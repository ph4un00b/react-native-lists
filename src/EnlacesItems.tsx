import { useState } from "react";
import {
	View,
	Text,
	Linking,
	TouchableOpacity,
	TouchableHighlight,
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
import { DEBUG } from "./global/atoms";
import { useAtom } from "jotai";
import { Platform } from "expo-modules-core";

const size = 50;

export function EnlacesItems({
	handleDecay,
	decay,
	top = 10,
	left = 10,
}: {
	decay: SharedValue<boolean>;
	handleDecay: any;
	top: number;
	left: number;
}) {
	// const [decay2Op, setDecay2Op] = useState(decay);
	// const [decay3Op, setDecay3Op] = useState(decay);

	const { openTransition, open, toggle } = useTransition();

	const chunks = 8;
	const transitionStyleA = useAnimatedStyle(() => {
		const rotate =
			1 *
			mix(openTransition.value, 0, 360 / chunks /** for 45deg chunks */);
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
			/**
			 * this works on web: transform origin-[0%_50%]
			 * won't work on mobile!
			 *
			 * then we use this trick
			 * { translateX: -30 },
			 * { rotate ... },
			 * { translateX: 70 },
			 */
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

	const transitionStyleDebug = useAnimatedStyle(() => {
		const rotate = -2 * mix(openTransition.value, 0, 360 / chunks);
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

	const [debug, setDebug] = useAtom(DEBUG);
	const [play, setPlay] = useState(false);
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
				// style={{ zIndex: 40, top: 97, left: 14, position: "absolute" }}
				// @ts-ignore web style
				style={{
					zIndex: 40,
					top,
					left,
					position: Platform.select({
						web: "fixed",
						ios: "absolute",
						android: "absolute",
					}),
				}}
				onPress={() => toggle()}
			>
				<View
					// title="click"
					style={{
						position: "absolute",
						width: size,
						height: size,
						borderRadius: size * 0.5,
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
						{/* <Entypo name="triangle-right" size={12} color="white" />
            <Entypo name="triangle-right" size={12} color="white" />
            <Entypo name="triangle-right" size={12} color="white" />  */}
						touch
					</Text>
				</View>
			</TouchableOpacity>

			<TouchableHighlight
				// @ts-ignore web style
				style={{
					// top: 120,
					top: top + 23,
					// left: 40,
					left: left + 30,
					zIndex: 10,
					position: Platform.select({
						web: "fixed",
						ios: "absolute",
						android: "absolute",
					}),
				}}
			>
				<Animated.View>
					<TouchableOpacity
						onPress={() =>
							Linking.openURL("https://plinks.deno.dev/jan-2023")
						}
					>
						{/* @see https://reactnative.dev/docs/stylesheet.html#absolutefill-vs-absolutefillobject */}
						<Animated.View
							className="bg-emerald-300"
							style={[
								{ zIndex: 0 },
								styles.optionStyle,
								transitionStyleA,
							]}
						>
							<Text>
								<Entypo
									name="triangle-right"
									size={16}
									color="black"
								/>{" "}
								resume
							</Text>
						</Animated.View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() =>
							Linking.openURL(
								"mailto:phaunus[at]protonmail[dot]com"
							)
						}
					>
						<Animated.View
							// className="left-0 w-[90px] pl-1 pr-1 py-0.5 capitalize border rounded-sm shadow-sm bg-rose-300 border-slate-800 -top-4"
							className="bg-rose-300"
							style={[
								{ zIndex: 0 },
								styles.optionStyle,
								transitionStyleC,
							]}
						>
							<Text>
								<Entypo
									name="triangle-right"
									size={16}
									color="black"
								/>{" "}
								contact
							</Text>
						</Animated.View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							setPlay(!play);
						}}
					>
						<Animated.View
							className="bg-yellow-200"
							style={[
								{ zIndex: 30 },
								styles.optionStyle,
								transitionStyleB,
							]}
						>
							<Text>
								<Entypo
									name="triangle-right"
									size={16}
									color="black"
								/>{" "}
								phau
							</Text>
						</Animated.View>
					</TouchableOpacity>
				</Animated.View>
			</TouchableHighlight>
		</>
	);
}
function useTransition() {
	/**
	 * transition form state
	 */
	// if (Platform.OS == "web") {
	//   const [open, setOpenOpts] = useState(false);
	//   const openTransition = useToggleTransition({ state: open });
	//   const toggle = () => setOpenOpts(!open);
	//   return { openTransition, open, toggle };
	// }

	/**
	 * transition form from sharedValue
	 * some issues happen on triggering another pressable items
	 * hance we prefer the stateful way atm!
	 *
	 * @see you need to change the openOps too!
	 * @yields this strategy  seems to work better on mobile!
	 */
	const open = useSharedValue(false);
	const openTransition = useDerivedValue(() => {
		console.log(Number(open.value));
		if (open.value) {
			return withSpring(Number(open.value) /**, optional config */);
		}
		return withTiming(Number(open.value) /**, optional config */);
	});
	const toggle = () => (open.value = !open.value);
	return { openTransition, open, toggle };
}
