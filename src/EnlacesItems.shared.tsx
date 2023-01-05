import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export function useToggleTransition({ state }: { state: boolean }) {
  const isToggled = useSharedValue(false);
  useEffect(() => {
    isToggled.value = state;
    return () => {};
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
  optionStyle: {
    // width: 90,
    // textTransform: "capitalize",
    position: "absolute",
    // this won't work and will throw an error on mobile, top: -"1rem",
    // top: -16,
    // left: 0,
    // borderRadius: 4,
    // paddingHorizontal: 12,
    // paddingVertical: 4,
    // todo: shadows!
  },
});
