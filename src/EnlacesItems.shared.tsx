import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";

export function useToggleTransition({ state }: { state: boolean }) {
  const isToggled = useSharedValue(false);
  useEffect(() => {
    isToggled.value = state;
    // return () => {};
  }, [state, isToggled]);

  const optTransition = useDerivedValue(() => {
    if (isToggled.value) {
      return withSpring(Number(isToggled.value) /**, optional config */);
    }
    return withTiming(Number(isToggled.value) /**, optional config */);
  });

  return optTransition;
}

export const styles = StyleSheet.create({
  // left-0 w-[90px] pl-1 pr-1 py-0.5 capitalize border rounded-sm shadow-sm bg-rose-300 border-slate-800 -top-4
  optionStyle: {
    left: 0,
    width: 90,
    paddingHorizontal: 4,
    paddingVertical: 2,
    textTransform: "capitalize",
    borderWidth: 1,
    borderRadius: 4,
    // this won't work and will throw an error on mobile, top: -"1rem",
    top: -16,
    position: "absolute",
    // todo: shadows!
  },
});

export function useDrag({
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
