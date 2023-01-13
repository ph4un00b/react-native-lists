import { FlashList } from "@shopify/flash-list";
import { Platform } from "expo-modules-core";
import React, { useCallback, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  LayoutRectangle,
  Text,
  View,
} from "react-native";

import { EnlacesItems } from "../EnlacesItems";
import { MyLinkButton } from "../components/button";
import { iconsMap } from "../components/icons";
import { mapItems } from "../models/projects";
import { useDrag } from "../EnlacesItems.shared";

/**
 * on loading images
 * if the extension is CAPITALIZED
 * expo will fail on mobile (At least on android) atm!
 * in order to solve this
 * you can lowercase the extension
 * @returns Unable to resolve
 */
function Enlaces(props: any) {
  const drag = useDrag({
    width: props.width,
    height: props.height,
    decay: false,
  });
  return (
    <EnlacesItems
      handleDecay={() => drag.toggleDecay()}
      decay={drag.decay}
      top={100}
      left={15}
    />
  );
}

const trackItem = (item: any & { title: string }) =>
  console.log("### track " + item.title);

export function FlashSpotiScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />
      {Platform.OS != "web" && (
        <View>
          <List />
        </View>
      )}

      {Platform.OS == "web" && (
        <View className="w-full px-2 text-center lg:w-1/2 md:w-3/4">
          <List />
        </View>
      )}
    </View>
  );
}

function List() {
  const onViewableItemsChanged = useCallback(
    (info: { changed: any[] }): void => {
      // console.log(info.changed)
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        trackItem(visible.item);
      });
    },
    []
  );
  return (
    <FlashList
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
        minimumViewTime: 500,
        // viewAreaCoveragePercentThreshold: 60
      }}
      onViewableItemsChanged={onViewableItemsChanged}
      // estimatedListSize={}
      estimatedItemSize={50}
      ListHeaderComponent={
        <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
          Public projects
        </Text>
      }
      data={mapItems["2023 upcoming projects"]
        .concat(mapItems["2022 public projects"])
        .concat(mapItems["2021 public projects"])}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <ProjectItem
          index={index}
          link={item.link}
          img={item.img}
          title={item.title}
          icons={item.icons}
        />
      )}
    />
  );
}

function ProjectItem({
  index,
  link,
  img,
  title,
  icons,
}: {
  index: number;
  link: string;
  img: any;
  title: string;
  icons: string[];
}): JSX.Element {
  const newLocal = "flex flex-row w-full my-10";
  return (
    <View
      className={index % 2 == 0 ? newLocal : "flex flex-row-reverse w-full"}
    >
      <CardImage link={link} img={img} title={title} />
      <MemoDescription icons={icons} />
    </View>
  );
}

function CardDescription({ icons }: { icons: string[] }) {
  const [groups] = useState<string[][]>(() => groupBy3(icons));

  return (
    <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
      {groups.map((groupIcons, i) => (
        <View key={Date.now() + i} className="flex flex-row justify-evenly">
          {groupIcons.map((iconName, i) => (
            <React.Fragment key={iconName}>{iconsMap[iconName]}</React.Fragment>
          ))}
        </View>
      ))}
    </View>
  );
}

const areEqual = (
  prevProps: { icons: string[] },
  nextProps: { icons: string[] }
) => {
  //   console.log("==?");
  const { icons } = nextProps;
  const { icons: prevIcons } = prevProps;
  /*if the props are equal, it won't update*/
  const isEqual = icons.every((val, i) => Object.is(prevIcons[i], val));
  return isEqual;
};

const MemoDescription = React.memo(CardDescription, areEqual);

function groupBy3(icons: string[]) {
  const currentGroup = [] as string[];
  const groups = [] as string[][];
  icons.forEach((iconName) => {
    if (currentGroup.length >= 3) {
      groups.push([...currentGroup]);
      currentGroup.length = 0;
    }
    currentGroup.push(iconName);
  });
  groups.push([...currentGroup]);
  return groups;
}

function CardImage({
  link,
  img,
  title,
}: {
  link: string;
  img: ImageSourcePropType;
  title: string;
}) {
  console.log("img?");
  return (
    <View className="flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
      <Image resizeMode="contain" className="w-full h-3/4" source={img} />
      <View className="absolute bottom-0 w-full">
        <MyLinkButton href={link}>{title}</MyLinkButton>
      </View>
    </View>
  );
}
