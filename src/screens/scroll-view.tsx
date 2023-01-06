import {
  GestureResponderEvent,
  Image,
  LayoutRectangle,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

import { Feather } from "@expo/vector-icons";
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { clamp, mix } from "react-native-redash";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { EnlacesItems } from "../EnlacesItems";
import { items } from "../models/projects";
import { iconsMap } from "../components/icons";

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
                    className={
                      index % 2 == 0
                        ? "flex flex-row w-full my-10"
                        : "flex flex-row-reverse w-full"
                    }
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

type BtnProps = {
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

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

function MyLinkButton({ children, href }: BtnProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={
        "transform hover:scale-110 transition duration-300 items-center justify-center ease-in-out bg-[#5046E4] hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-sm"
        // "transform hover:scale-150 duration-300 h-9 items-center justify-center rounded-sm bg-[#5046E4] px-4 py-2 shadow-sm hover:bg-indigo-400"
      }
      onPress={() => {
        href && Linking.openURL(href);
      }}
    >
      <Text className="uppercase text-slate-200">
        {/* {children} <Feather name="external-link" size={18} color="white" /> */}
        {/* {children} <Entypo name="chevron-right" size={18} color="white" /> */}
        {/* {children} <Entypo name="chevron-thin-right" size={18} color="white" /> */}
        {/* {children} <EvilIcons name="chevron-right" size={18} color="white" /> */}
        {children} <Entypo name="triangle-right" size={16} color="white" />
        {/* {children} <FontAwesome name="caret-right" size={18} color="white" /> */}
      </Text>
    </TouchableOpacity>
  );
}

function useDrag({
  width,
  height,
  decay,
}: {
  width: number;
  height: number;
  decay: boolean;
}) {
  const sharedDecay = useSharedValue(decay);
  const mx = useSharedValue(0);
  const my = useSharedValue(0);
  const boundX = width >> 1;
  const boundY = height >> 1;
  // console.log({ width, height, boundX, boundY });
  const handler = useAnimatedGestureHandler({
    onStart: (e, ctx: Record<string, any>) => {
      remember_last_position: {
        ctx.offsetX = mx.value;
        ctx.offsetY = my.value;
      }
    },
    onActive: (e, ctx) => {
      mx.value = clamp(e.translationX + ctx.offsetX, -boundX, boundX);
      my.value = clamp(e.translationY + ctx.offsetY, -boundY, boundY);
    },
    onEnd: (e) => {
      if (!sharedDecay.value) return;
      mx.value = withDecay({ velocity: e.velocityX, clamp: [-boundX, boundX] });
      my.value = withDecay({ velocity: e.velocityY, clamp: [-boundY, boundY] });
      console.log({ x: mx.value, y: my.value });
    },
  });

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: mx.value },
        { translateY: my.value },
        // { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      // backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  return {
    handler,
    styles,
    decay: sharedDecay,
    toggleDecay: () => {
      sharedDecay.value = !sharedDecay.value;
      // console.log({ toggled: sharedDecay.value });
    },
  };
}
