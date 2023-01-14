import { FlashSpotiScreen } from "../screens/flash-list-spotify";
import { FlatGestureScreen } from "../screens/flat-list-gesture";
import { FlatListScreen } from "../screens/flat-list-native";
import { GlExampleScreen } from "../screens/gl.native";
import { GlslListScreen } from "../screens/glsl-list-native";
import { ImgFlashScreen } from "../screens/images-flash-list";
import { ImgGestureScreen } from "../screens/images-list-gesture";
import { ImgListScreen } from "../screens/images-list-native";
import { MasonryScreen } from "../screens/images-masonry";
import { MasonryFlashScreen } from "../screens/images-masonry-flash";
import { MenuScreen } from "../screens/menu-experiments";
import { ScrollViewScreen } from "../screens/scroll-view";
import { ScrollGestureScreen } from "../screens/scroll-view-gesture";

export const IMG_LINKS = [
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/img-flat",
    alias: "img-flat-list",
    screen: <ImgListScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/img-gesture",
    alias: "img-gesture-list",
    screen: <ImgGestureScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/img-flash",
    alias: "img-flash-list",
    screen: <ImgFlashScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/img-masonry",
    alias: "img-masonry-list",
    screen: <MasonryScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/img-masonry-flash",
    alias: "img-masonry-flash",
    screen: <MasonryFlashScreen />,
  },
];

export const APP_LINKS = [
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/",
    alias: "menu",
    screen: <MenuScreen />,
    // screen: <GlExampleScreen />,
    // screen: <FlatListScreen />,
    // screen: <MasonryFlashScreen />,
  },
  {
    id: Math.random().toString(36).slice(2),
    color: "peru",
    path: "/gl",
    alias: "expo-gl",
    screen: <GlExampleScreen />,
  },
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
];
