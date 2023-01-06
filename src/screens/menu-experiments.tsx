import { LayoutRectangle, View } from "react-native";
import React, { useState } from "react";
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
import { EnlacesItems } from "../EnlacesItems";

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
    <EnlacesItems handleDecay={() => drag.toggleDecay()} decay={drag.decay} />
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
