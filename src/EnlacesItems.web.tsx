import { useEffect, useState } from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { mix } from "react-native-redash";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { styles, useToggleTransition } from "./EnlacesItems.shared";

export function EnlacesItems({
  handleDecay,
  decay,
}: {
  decay: SharedValue<boolean>;
  handleDecay: any;
}) {
  console.log("web!");
  // const [decay2Op, setDecay2Op] = useState(decay);
  // const [decay3Op, setDecay3Op] = useState(decay);
  /**
   * transition form state
   */
  const [openOpts, setOpenOpts] = useState(false);
  const openTransition = useToggleTransition({ state: openOpts });

  /**
   * transition form from sharedValue
   * some issues happen on triggering another pressable items
   * hance we prefer the stateful way atm!
   *
   * @see you need to change the openOps too!
   * @yields this strategy  seems to work better on mobile!
   */
  // const open = useSharedValue(false);
  // const openTransition = useDerivedValue(() => {
  //   console.log(Number(open.value));
  //   if (open.value) {
  //     return withSpring(Number(open.value) /**, optional config */);
  //   }
  //   return withTiming(Number(open.value) /**, optional config */);
  // });

  const chunks = 8;
  const transitionStyleA = useAnimatedStyle(() => {
    const rotate =
      1 * mix(openTransition.value, 0, 360 / chunks /** for 45deg chunks */);
    // console.log({ rotate });
    return {
      // backgroundColor: decay.value ? "white" : "white",
      transform: [
        { translateX: -30 },
        { rotate: rotate + "deg" },
        { translateX: 70 },
      ],
    };
  });

  const transitionStyleB = useAnimatedStyle(() => {
    const rotate = 0 * mix(openTransition.value, 0, 360 / chunks);
    // console.log({ rotate });
    return {
      // backgroundColor: decay.value ? "white" : "white",
      transform: [
        { translateX: -30 },
        { rotate: rotate + "deg" },
        { translateX: 70 },
      ],
    };
  });

  const transitionStyleC = useAnimatedStyle(() => {
    const rotate = -1 * mix(openTransition.value, 0, 360 / chunks);
    // console.log({ rotate });
    return {
      // backgroundColor: decay.value ? "white" : "white",
      transform: [
        { translateX: -30 },
        { rotate: rotate + "deg" },
        { translateX: 70 },
      ],
    };
  });

  return (
    <>
      {/*
       * @see https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/touchables/
       * TouchableWithoutFeedback | TouchableOpacity from reanimated
       * seems to not respect z-index
       * todo: research more!
       *
       * even classnames from nativewind
       * throws some errors on runtime!
       * in  order  to bail out console errors
       * i fallback to style objects! atm
       * */}
      <TouchableOpacity
        style={{ zIndex: 40, top: 97, left: 14, position: "fixed" }}
        // onPress={() => (open.value = !open.value)}
        onPress={() => {
          console.log("open!", openOpts);
          setOpenOpts(!openOpts);
        }}
      >
        <View
          // title="click"
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#5046E4",
            backgroundColor: "transparent",
          }}
        >
          <MaterialCommunityIcons
            name="robot-confused-outline"
            size={32}
            color="white"
          />
          <Text className="text-sm text-center transition-all -bottom-2 text-slate-300 hover:text-yellow-200">
            touch me
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableHighlight
        style={{ top: 120, left: 40, zIndex: 10, position: "fixed" }}
      >
        <Animated.View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://plinks.deno.dev/jan-2023")}
          >
            {/* @see https://reactnative.dev/docs/stylesheet.html#absolutefill-vs-absolutefillobject */}
            <Animated.View
              className="left-0 w-[90px] pl-1 pr-1 py-0.5 capitalize border rounded-sm shadow-sm bg-emerald-300 border-slate-800 -top-4"
              style={[
                { zIndex: 0 },
                /**
                 * this works on web: transform origin-[0%_50%]
                 * won't work on mobile!
                 *
                 * then we use this trick
                 * { translateX: -30 },
                 * { rotate ... },
                 * { translateX: 70 },
                 */
                styles.optionStyle,
                transitionStyleA,
              ]}
            >
              <Text>
                <Entypo name="triangle-right" size={16} color="black" /> resume
              </Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("mailto:phaunus[at]protonmail[dot]com")
            }
          >
            <Animated.View
              className="left-0 w-[90px] pl-1 pr-1 py-0.5 capitalize border rounded-sm shadow-sm bg-rose-300 border-slate-800 -top-4"
              style={[{ zIndex: 0 }, styles.optionStyle, transitionStyleC]}
            >
              <Text>
                <Entypo name="triangle-right" size={16} color="black" /> contact
              </Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Animated.View
              className="left-0 w-[90px] pl-1 pr-1 py-0.5 capitalize bg-yellow-200 border rounded-sm shadow-sm border-slate-800 -top-4"
              style={[{ zIndex: 30 }, styles.optionStyle, transitionStyleB]}
            >
              <Text>
                <Entypo name="triangle-right" size={16} color="black" /> phau
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableHighlight>
    </>
  );
}
