import React, { useCallback, useState } from "react";
import { Image, LayoutRectangle, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";

import { EnlacesItems } from "../EnlacesItems";
import { mapItems } from "../models/projects";

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

export function ImgGestureScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);

  const onViewableItemsChanged = useCallback(
    (info: { changed: any[] }): void => {
      // console.log(info.changed)
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        trackItem(visible.item);
      });
    },
    [],
  );

  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />
      <View className="w-full text-center border lg:w-1/2 md:w-3/4 border-slate-100">
        <FlatList
          numColumns={2}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
            minimumViewTime: 500,
            // viewAreaCoveragePercentThreshold: 60
          }}
          initialNumToRender={4}
          onViewableItemsChanged={onViewableItemsChanged}
          ListHeaderComponent={
            <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
              Public projects
            </Text>
          }
          data={mapItems["2021 public projects"]
            .concat(mapItems["2022 public projects"])
            .concat(mapItems["2023 upcoming projects"])}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            if (index % 2 == 0) {
              return (
                <Image
                  resizeMode="contain"
                  style={{
                    width: 200,
                    height: 200,
                    borderColor: "red",
                    borderWidth: 1,
                  }}
                  source={item.img}
                />
              );
            } else {
              return (
                <Image
                  resizeMode="contain"
                  style={{
                    width: 200,
                    height: 400,
                    borderColor: "green",
                    borderWidth: 1,
                  }}
                  source={item.img}
                />
              );
            }
          }}
        />
      </View>
    </View>
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
    onStart: (_, ctx: Record<string, any>) => {
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
