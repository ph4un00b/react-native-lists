import { ScrollViewScreen } from "../screens/scroll-view";
import { ScrollGestureScreen } from "../screens/scroll-view-gesture";

export const APP_LINKS = [
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/",
    alias: "scroll-view",
    screen: <ScrollViewScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/scroll-gesture",
    alias: "scroll-gesture",
    screen: <ScrollGestureScreen />,
  },
];
