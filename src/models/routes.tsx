import { FlashSpotiScreen } from "../screens/flash-list-spotify";
import { FlatGestureScreen } from "../screens/flat-list-gesture";
import { FlatListScreen } from "../screens/flat-list-native";
import { MenuScreen } from "../screens/menu-experiments";
import { ScrollViewScreen } from "../screens/scroll-view";
import { ScrollGestureScreen } from "../screens/scroll-view-gesture";

export const APP_LINKS = [
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/flash-spo",
    alias: "flash-spotify",
    screen: <FlashSpotiScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/flat-ges",
    alias: "flat-gesture",
    screen: <FlatGestureScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/flat-list",
    alias: "flat-list",
    screen: <FlatListScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/scroll-gesture",
    alias: "scroll-gesture",
    screen: <ScrollGestureScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/scroll",
    alias: "scroll-view",
    screen: <ScrollViewScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/",
    alias: "menu",
    screen: <MenuScreen />,
  },
];
