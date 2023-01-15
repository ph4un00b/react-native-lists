import {
  GestureResponderEvent,
  Linking,
  Pressable,
  PressableProps,
  Text,
  View,
} from "react-native";
import { Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { ReactNode } from "react";

type BtnProps = {
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export function MyLinkButton({ children, href, className }: BtnProps) {
  return (
    <Pressable
      // className={className}
      className="absolute bottom-0 z-10"
      onPress={() => {
        href && Linking.openURL(href);
      }}
    >
      <View
        className={
          "transition-all transform hover:scale-110 duration-300 items-center justify-center ease-in-out bg-[#5046E4] hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-sm"
          // "transform hover:scale-150 duration-300 h-9 items-center justify-center rounded-sm bg-[#5046E4] px-4 py-2 shadow-sm hover:bg-indigo-400"
        }
      >
        <Text className="uppercase text-slate-200">
          {/* {children} <Feather name="external-link" size={18} color="white" /> */}
          {/* {children} <Entypo name="chevron-right" size={18} color="white" /> */}
          {/* {children} <Entypo name="chevron-thin-right" size={18} color="white" /> */}
          {/* {children} <EvilIcons name="chevron-right" size={18} color="white" /> */}
          {children} <Entypo name="triangle-right" size={16} color="white" />
          {/* {children} <FontAwesome name="caret-right" size={18} color="white" /> */}
        </Text>
      </View>
    </Pressable>
  );
}
