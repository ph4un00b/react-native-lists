import {
  FlexStyle,
  ImageSourcePropType,
  LayoutRectangle,
  View,
} from "react-native";
import React, { useState } from "react";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";
import { Button, Div, Icon, Text } from "react-native-magnus";
import { Entypo } from "@expo/vector-icons";
import { iconsMap } from "../components/icons";
import { Platform } from "expo-modules-core";

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
      top={200}
      left={105}
    />
  );
}

export function MenuScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />
      <MyCard
        title="my title"
        img={{
          uri:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        }}
      />
    </View>
  );
}

export function MyCard(
  { img, title }: { img: ImageSourcePropType; title: string },
) {
  const [show, setShow] = useState(0.1);
  return (
    <Button
      block
      color="white"
      p="none"
      onHoverIn={() => setShow(0.9)}
      onHoverOut={() => setShow(0.1)}
    >
      <Div
        opacity={0}
        p="lg"
        flex={1}
      // bgImg={img}
      // bgMode="cover"
      >
        <Text color="white" fontSize="3xl" fontWeight="bold" opacity={show}>
          {title}
        </Text>
        <Text color="white" fontSize="sm" mt="sm" opacity={show}>
          icons
        </Text>
        <Div row mt="xl" opacity={show}>
          <Text color="white">Explore</Text>
          <Entypo name="triangle-right" size={16} color="white" />
          {/* <Icon name="arrowright" color="white" ml="md" /> */}
        </Div>
      </Div>
    </Button>
  );
}

export function MySmartCardA(
  { img, title, width, height, icons, initialOpacity = 0.1 }: {
    img?: ImageSourcePropType;
    title: string;
    width?: FlexStyle["width"];
    height?: FlexStyle["height"];
    icons: string[];
    initialOpacity: number;
  },
) {
  const [show, setShow] = useState(initialOpacity);
  return (
    <Button
      borderColor="red"
      borderWidth={1}
      position="absolute"
      w={width}
      h={height}
      zIndex={50}
      block
      color="white"
      bg="transparent"
      p="none"
      onHoverIn={() => setShow(0.9)}
      onHoverOut={() => setShow(0.1)}
    >
      <Div
        w={width}
        h="100%"
        // opacity={1}
        // p="lg"
        flex={1}
        justifyContent="space-between"
        flexDir="column"
      // bgImg={img}
      // bgMode="cover"
      >
        <Div
          flexDir="row"
          justifyContent="space-between"
          borderColor="purple"
          borderWidth={1}
          px={16}
        >
          <Text
            color="white"
            fontSize="base"
            fontWeight="bold"
            opacity={show}
            textTransform="capitalize"
          >
            {title}
          </Text>
          <Text
            color="white"
            fontSize="base"
            fontWeight="bold"
            opacity={show}
            textTransform="capitalize"
          >
            fecha
          </Text>
        </Div>
        {/* <Text color="white" w={"100%"} fontSize="sm" mt="sm" opacity={show}> */}
        <Div w={Platform.select({ web: "50%", default: "50%" })} opacity={show} borderColor="yellow" borderWidth={1}>
          <CardDescription icons={icons} />
        </Div>
        {/* </Text> */}
        {/* <Div row mt="xl" opacity={show}> */}
        {/* <Text color="white">Explore</Text> */}
        {/* <Entypo name="triangle-right" size={16} color="white" /> */}
        {/* <Icon name="arrowright" color="white" ml="md" /> */}
        {/* </Div> */}
      </Div>
    </Button >
  );
}

function CardDescription({ icons }: { icons: string[] }) {
  const [groups] = useState<string[][]>(() => groupBy3(icons));

  return (
    // <View className="flex flex-1 border justify-evenly border-slate-100">
    <View className="flex flex-row justify-between px-4 pb-1">
      {groups.map((groupIcons, i) => (
        <View
          key={Date.now() + i}
          // className="flex flex-row border border-slate-100 justify-evenly"
          className="flex flex-row-reverse"
        >
          {groupIcons.map((iconName, i) => (
            <React.Fragment key={iconName}>{iconsMap[iconName]}</React.Fragment>
          ))}
        </View>
      ))}
    </View>
  );
}

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
