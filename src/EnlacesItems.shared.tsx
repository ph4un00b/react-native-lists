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
