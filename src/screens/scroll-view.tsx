import {
  Image,
  ImageSourcePropType,
  LayoutRectangle,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

import { EnlacesItems } from "../EnlacesItems";
import { items } from "../models/projects";
import { iconsMap } from "../components/icons";
import { MyLinkButton } from "../components/button";
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

console.log({ items });
export function ScrollViewScreen() {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});

  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />

      {layoutProps && (
        <ScrollView className="px-2 text-center lg:w-1/2 md:w-3/4 sm:w-full">
          {items.map((year) => {
            const [title, projects] = year;
            return (
              <React.Fragment key={title}>
                <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
                  {title}
                </Text>
                {projects.map((project, index) => (
                  <View
                    key={project.id}
                    className={index % 2 == 0
                      ? "flex flex-row w-full my-10"
                      : "flex flex-row-reverse w-full"}
                  >
                    <CardImage
                      link={project.link}
                      img={project.img}
                      title={project.title}
                    />

                    <MemoDescription icons={project.icons} />
                  </View>
                ))}
              </React.Fragment>
            );
          })}
        </ScrollView>
      )}
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
  nextProps: { icons: string[] },
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
      // console.log('group', currentGroup)
      groups.push([...currentGroup]);
      currentGroup.length = 0;
      // currentGroup.push(iconName);
    }
    currentGroup.push(iconName);
  });
  groups.push([...currentGroup]);
  // console.log(JSON.stringify(groups));
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
