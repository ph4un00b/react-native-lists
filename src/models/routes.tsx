import { ScrollViewScreen } from "../screens/scroll-view";

export const APP_LINKS = [
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/",
    alias: "scroll-view",
    screen: <ScrollViewScreen />,
  },
];
