import {
  GestureResponderEvent,
  Image,
  LayoutRectangle,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ReactNode, useRef, useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";
import { Feather } from "@expo/vector-icons";

import "./styles";

export default function App() {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});

  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <SafeAreaView
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      {/* <DenoIcon width={1000} height={1000} /> */}
      {/* <TsIcon width={40} height={40} /> */}

      <View className="flex flex-row">
        <Text className="text-slate-200">phau ~ Made with expo</Text>
        <ExpoIcon width={20} height={20} />
      </View>
      {layoutProps && (
        <>
          <ScrollView className="w-3/4 px-2 text-center lg:w-1/3">
            <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
              2023 upcoming projects
            </Text>
            {/* @see https://github.com/ph4un00b/query_html */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/cards.gif") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/cards-tree">
                      3d cards
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <View className="flex flex-row justify-evenly">
                  <AstroIcon width={40} height={40} />
                  <CssIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                  <VueIcon width={40} height={40} />
                  <ReactIcon width={40} height={40} />
                </View>
              </View>
            </View>
            {/* animation */}
            <View className="flex flex-row-reverse w-full">
              <View className="flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/graph-editor.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <MyButton onPress={() => {}}>graph editor</MyButton>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <View className="flex flex-row justify-evenly">
                  <WasmIcon width={40} height={40} />
                  <AstroIcon width={40} height={40} />
                  <VueIcon width={40} height={40} />
                  <ReactIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>

            <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200 ">
              2022 public projects
            </Text>
            {/* @see https://github.com/ph4un00b/query_html */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/query_html.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <MyLinkButton href="https://plinks.deno.dev/html-transformers">
                    html jq
                  </MyLinkButton>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - An HTML transformation CLI tool
                </Text>

                <Text className="text-base text-slate-200">
                  - Uses css selectors & native idioms
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>
            {/* animation */}
            <View className="flex flex-row-reverse w-full">
              <View className="flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Video
                  className="flex h-full"
                  ref={video}
                  // style={styles.video}
                  source={{
                    // uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                    uri: require("./assets/zip2.mp4"),
                  }}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
                <View className="absolute bottom-0 w-full">
                  <MyLinkButton href="https://plinks.deno.dev/3rf-animation">
                    Animation
                  </MyLinkButton>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - A React Three Fiber Animation
                </Text>
                <Text className="text-base text-slate-200">
                  - Mixing Audio, mobile friendly, performance aware
                </Text>
                <View className="flex flex-row justify-evenly">
                  <NextIcon width={40} height={40} />
                  <GlIcon width={40} height={40} />
                  <ThreeIcon width={40} height={40} />
                  <ReactIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* blends */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/blends.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/card-editor">
                      card editor
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - An card editor webapp
                </Text>
                <Text className="text-base text-slate-200">
                  - Mixing blend modes and shaders in Vue
                </Text>
                <View className="flex flex-row justify-evenly">
                  <GlIcon width={40} height={40} />
                  <VueIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* composition */}
            <View className="flex flex-row-reverse w-full">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/compositions.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/shaders-compositions">
                      shaders
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - mixing noises & patterns
                </Text>
                <Text className="text-base text-slate-200">
                  - Shaders compositions
                </Text>
                <View className="flex flex-row justify-evenly">
                  <GlIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* @see https://github.com/ph4un00b/threejs-patterns-styles/blob/main/src/App.tsx */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/r3f.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/3d-compositions">
                      3d compositions
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - multiple webgl compositions
                </Text>
                <Text className="text-base text-slate-200">
                  - mixing different techniques like shaders & post-processing
                </Text>
                <View className="flex flex-row justify-evenly">
                  <GlIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                  <ThreeIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* composition */}
            <View className="flex flex-row-reverse w-full">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/compo2.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/compositions-2">
                      compositions 2
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - More GLSL compositions
                </Text>
                <View className="flex flex-row justify-evenly">
                  <GlIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* @see https://github.com/ph4un00b/dirty_lurker */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/instagram_bot.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/instagram-bot">
                      instagram bot
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - An instagram bot scrapper
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <PuppeteerIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* @see https://github.com/ph4un00b/tele-bot */}
            <View className="flex flex-row-reverse w-full">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/telegram_bot.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/telegram-bot">
                      telegram bot
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - A telegram bot template
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>

            <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200 ">
              2021 public projects
            </Text>
            {/* @see https://github.com/ph4un00b/css_reducer */}
            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/css_refactoring.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/css-refactoring">
                      Css refactoring
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - A CSS refactoring tool
                </Text>
                <Text className="text-base text-slate-200">- TDD && E2E</Text>
                <Text className="text-base text-slate-200">
                  - made for windicss and tailwind
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <TwIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>

            {/* @see https://github.com/ph4un00b/simple-cli */}
            <View className="flex flex-row-reverse w-full">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/page_generator.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/ssg">
                      SSG CLI
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - A Static Site Generator CLI
                </Text>
                <Text className="text-base text-slate-200">- TDD && E2E</Text>
                <Text className="text-base text-slate-200">
                  - I dig quick prototyping ideas
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>
            {/* @see https://github.com/ph4un00b/json2html */}

            <View className="flex flex-row w-full my-10">
              <View className="relative flex justify-start w-1/2 border rounded-md shadow-sm bg-slate-900 aspect-square border-slate-700">
                <Image
                  resizeMode="contain"
                  className="w-full h-3/4"
                  source={{ uri: require("./assets/json2html.PNG") }}
                />
                <View className="absolute bottom-0 w-full">
                  <View className="w-full">
                    <MyLinkButton href="https://plinks.deno.dev/json2html ">
                      json 2 html
                    </MyLinkButton>
                  </View>
                </View>
              </View>

              <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                <Text className="text-base text-slate-200">
                  - A CLI made with Deno runtime & Typescript & TDD
                </Text>
                <Text className="text-base text-slate-200">
                  - I love the UNIX philosophy
                </Text>
                <View className="flex flex-row justify-evenly">
                  <DenoIcon width={40} height={40} />
                  <TsIcon width={40} height={40} />
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

type BtnProps = {
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

function MyLinkButton({ children, href }: BtnProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={
        "transition hover:scale-110 duration-300 h-8 items-center justify-center rounded-sm bg-[#5046E4] px-4 py-2 shadow-sm hover:bg-indigo-400"
      }
      onPress={() => {
        href && Linking.openURL(href);
      }}
    >
      <Text className="uppercase text-slate-200">
        {children} <Feather name="external-link" size={18} color="white" />
      </Text>
    </TouchableOpacity>
  );
}

function MyButton({ children, onPress }: BtnProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={
        "h-8 items-center justify-center rounded-sm bg-[#5046E4] p-4 shadow-sm hover:bg-gray-400"
      }
      onPress={onPress}
    >
      <Text className="uppercase text-slate-200">{children}</Text>
    </TouchableOpacity>
  );
}

const DenoIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 1024 1024" {...props}>
    <Path
      d="M472 106.6c-1.9.2-8 .9-13.5 1.4-78.2 8.2-155.2 41.3-218 93.9-11.6 9.6-38 36-47.6 47.6-52 62.1-82.4 131.8-93.6 214.3-2.5 18.3-2.5 80.1 0 98.4 11.2 82.5 41.6 152.2 93.6 214.3 9.6 11.6 36 38 47.6 47.6 62.1 52 131.8 82.4 214.3 93.6 18.3 2.5 80.1 2.5 98.4 0 82.5-11.2 152.2-41.6 214.3-93.6 11.6-9.6 38-36 47.6-47.6 52-62.1 82.4-131.8 93.6-214.3 2.5-18.3 2.5-80.1 0-98.4-11.2-82.5-41.6-152.2-93.6-214.3-9.6-11.6-36-38-47.6-47.6-61.9-51.8-132.3-82.6-213.7-93.5-8.8-1.2-21.6-1.7-45.3-1.9-18.1-.2-34.6-.1-36.5.1zm5 43.2c0 11.7.8 37.1 1.9 61.2.6 11.8 1.3 28.7 1.6 37.5 1.1 31.2 4.4 113.1 4.9 120.4l.5 7.3-4.5-.5c-2.5-.2-4.8-.8-5.2-1.1-.3-.4-1-7.3-1.4-15.4-1.8-35.6-7.7-173.7-8.3-193.9l-.6-22.2 2.8-.4c1.5-.2 4-.5 5.6-.6l2.7-.1v7.8zm95.7-2.4c.1.1.4 30.3.7 67.1.4 36.9.9 70 1.2 73.6.3 3.7.2 6.9-.3 7.1-.4.3-2.9.3-5.4 0l-4.6-.4-.7-29.1c-.4-16.1-.9-33.9-1.1-39.7-.8-17.7-1.5-77.8-.9-79.3.4-1.1 1.5-1.2 5.7-.5 2.9.6 5.3 1.1 5.4 1.2zm-231.3 33.5c.6.9 5.3 56 11.1 128.1 1.9 24.5 3.8 46.9 4.1 49.7.5 5.1.4 5.3-2.8 7.3-1.8 1.1-3.6 2-4 2-.3 0-.9-2.6-1.2-5.8-1.4-13-6.8-75.8-10.6-121.2-2.2-26.7-4.2-50.6-4.5-53.2-.5-4.4-.4-4.8 2.2-6.2 3.2-1.7 5-2 5.7-.7zM616.7 201c2.8 1 3.1 1.5 3.7 7.2 1 10 .7 57.8-.4 57.8-2.9 0-8.9-3.4-9.4-5.3-.3-1.2-.6-15.4-.6-31.5 0-32.5-.4-30.6 6.7-28.2zM432 205.7c0 2.7.7 17.6 1.5 33.3.8 15.7 1.7 35.6 2.1 44.2.7 17.4.9 16.8-5.8 17.2-3.3.1-3.3.1-3.5-4.9-.2-2.8-.7-11.5-1.3-19.5-.5-8-1.7-25.3-2.5-38.5s-1.8-26.3-2.1-29.1c-.6-5-.5-5.2 2.2-6.2 1.6-.6 4.4-1.1 6.2-1.1 3.2-.1 3.2-.1 3.2 4.6zm277.4 13.7 3.4 1.4.7 13.4c.3 7.3.5 23.1.3 35l-.3 21.8-4.2-2.1-4.2-2-.3-33.2c-.2-18.3-.1-33.8.1-34.5.4-1.5.4-1.5 4.5.2zm-182.6 13.1c.6.6 2 49.1 2.1 73.7l.1 14.8-4.7-.7c-2.7-.3-4.9-.6-5-.7-.3-.2-3.3-74.3-3.3-81.5v-7.4l5.1.6c2.9.4 5.4.9 5.7 1.2zm230.3 7.1c1.2 1.4 1.4 23.3 1.7 144.1.3 138.7.3 142.3-1.5 142.3-1.1 0-2.6-.6-3.5-1.3-1.5-1.1-1.7-13.2-2.2-131.7-.4-71.8-.9-137-1.2-144.9l-.6-14.4 2.9 2.1c1.7 1.2 3.6 2.9 4.4 3.8zm-89.7 20.5c.5.4 1 6.1 1.1 12.6.5 22.1.6 157.6.1 158-.2.2-2-.3-4-1.1l-3.6-1.5V258l2.8.6c1.5.4 3.1 1 3.6 1.5zm-276 5.6c.3 2.7.8 8.8 1.1 13.8.3 4.9 1 16.1 1.6 24.8 1.2 17.6 1 18.7-4.7 18.7-3 0-3.4-.3-3.8-3.3-1-5.9-4.5-55.1-4-55.9.5-.7 5.7-2.5 8.1-2.7.6-.1 1.4 2 1.7 4.6zM226 291.2c1.1 10.6 3.3 32.8 4.9 49.3 1.7 16.5 3.1 30.5 3.1 31.1 0 1.2-7.7 5-8.5 4.2-.5-.5-10.5-89-10.5-93 0-2.4 7.7-12.5 8.7-11.4.3.2 1.3 9.1 2.3 19.8zm392.1 10.5 2.9 1.7.1 21.6c.1 11.8.3 25 .3 29.3.2 9-.9 10.5-6.3 8.6l-3.1-1.1v-8.6c0-4.8-.3-18.7-.7-31l-.6-22.2h2.3c1.2 0 3.5.8 5.1 1.7zm-348.2 38.8c1.8 19.2 4.7 51.6 6.6 72l3.4 37-3.9 3.9-3.8 3.9-.7-7.9c-.4-4.4-2.4-24.8-4.5-45.4-2.1-20.6-5.1-50.5-6.6-66.4l-2.8-28.8 3.9-3.6c3.5-3.3 3.9-3.4 4.6-1.6.4 1 2.1 17.6 3.8 36.9zM195 352.6c2.2 19.7 8 72.1 13 116.4 5 44.3 9.7 87 10.6 95 .8 8 2.2 20.1 3 27 1.4 11.7 1.4 12.5-.2 13.7-2.4 1.8-3.4 1.6-3.4-.5 0-.9-.9-8.5-2-16.7-1.8-13.7-4.8-36.9-11.5-89-1.4-10.5-4.1-31.4-6-46.5-2-15.1-4.9-37.6-6.5-50-1.6-12.4-4.3-33.6-6-47.3-1.8-13.6-2.9-25.7-2.6-27 .7-2.7 6.6-12.1 7.2-11.5.2.3 2.2 16.6 4.4 36.4zm-30.6 43.1c1.5 12 4.3 33.9 6.2 48.8 1.9 14.8 4.3 33.3 5.4 41l1.9 14-2.1 1.8c-1.2 1-2.4 1.4-2.8 1-.4-.4-1.2-4.4-1.8-8.8-.6-4.4-4.3-30.1-8.3-57l-7.1-49 2.3-6.8c1.2-3.7 2.5-6.7 2.8-6.7.4 0 1.9 9.8 3.5 21.7zm549-13.1c1.4 1.4 1.6 7.6 1.6 53.5V488h-2.8c-6.1 0-6 1.5-6.4-55.3l-.3-51.7h3.2c1.7 0 3.9.7 4.7 1.6zm-218.9 17.9c22.6 3.4 42.3 9.7 61.8 19.7 12.6 6.5 18.6 11 32.6 24.4 20.8 19.9 33.6 37.3 45.6 61.9C652 542.3 658.8 574 667.4 659c3.9 38.1 9 107.2 10.1 135.5.3 8.2 1 21.7 1.6 30 1.1 17.6 2.4 15.2-13.1 22.7-21.5 10.4-42.2 17.6-69.5 24.3-33.4 8.2-55 10.8-88 10.9l-24 .1.2-11.5c0-6.3.6-21 1.2-32.5 3-55.7 2.4-126-1.5-165-2.2-22.4-6.5-49.6-8.9-55.6-.5-1.3 1.8-2.4 11.7-5.8 18.1-6.3 33.8-14.2 36.2-18.1 4.3-7.4-3.4-18-13.2-18-1.7 0-6.8 1.8-11.5 3.9-22.4 10.3-67.3 22.4-93.2 25.1-17.9 1.9-45.7.8-65-2.7-10.5-1.9-29.3-9-45-17.1-18.1-9.4-29.2-21.9-32.5-36.7-1.8-8-1.3-24 1-33 2.5-9.9 9.5-24.3 15.9-32.7 28.5-37.5 87.3-70 147.6-81.4 19.2-3.6 46.4-4 67-.9zm308.5 3.1c3.6 1.5 4 1.9 4 5.3.2 27.3-.4 89.7-.9 92.3-.1.9-5.3 1-7.5.2-1.4-.5-1.6-5.9-1.6-50 0-31.6.4-49.4 1-49.4.5 0 2.8.7 5 1.6zm43.7 54.9 3.6 1.5-.7 82.8c-.8 105.5-.9 108.6-4.7 117.7-6.2 14.9-5.9 17.9-5.3-47.5.2-32.7.7-65.8.9-73.5.2-7.7.4-29.4.5-48.3 0-22.8.3-34.2 1-34.2.6 0 2.7.7 4.7 1.5zm-601.4 24.9c.6 8.1.4 8.9-2.5 15.3l-3.2 6.8-1.2-10c-1.9-16-1.9-16.7 1.9-19.1 1.7-1.2 3.5-2 3.8-1.8.3.2.9 4.2 1.2 8.8zm-61.8 60.3c.9 8.2 7.9 62.6 11.5 89.3 5.4 41.3 5.8 47.2 3.4 44.7-.3-.3-2.6-14.2-5-30.9-15.6-107.8-15.5-107.1-14.2-107.9 2.7-1.8 3.6-.8 4.3 4.8zm72 45.8c.6 2.5 3.5 29.6 3.5 32.9 0 2.8-3.6 5.4-5.2 3.8-.5-.5-1.8-9-2.8-18.8-1.1-9.9-2.2-20.2-2.5-22.9l-.6-5 3.5 4c2 2.2 3.8 4.9 4.1 6zm80.7 37.7c1.1 1 1.8 5 2.7 15.8 1.5 19.5 1.7 18-2.4 18-4.2 0-4.1.3-5.5-17.3-1.4-17.9-1.4-17.7 1.3-17.7 1.3 0 3 .6 3.9 1.2zm79.2 1.5c.2 1 .7 7 1.1 13.3.3 6.3 1.2 20.5 2 31.5 2.8 40.4 2.9 45.5 1.2 45.5-1.9 0-2.1-1.5-4.3-30-.8-11.8-2.3-30.4-3.3-41.3-.9-10.9-1.5-20-1.2-20.2 1.1-1.2 4-.3 4.5 1.2zm-188 19.2c.6.9 4.4 32.9 9.1 76.6 1.4 13.2 2.8 25.9 3.1 28.3l.5 4.3-2.5-1.6c-1.9-1.3-2.6-2.6-2.6-4.9 0-6.3-4.3-47.8-7.6-73.2-1.9-14.4-3.4-27.1-3.4-28.3 0-2.1 2.4-2.9 3.4-1.2zm577.1 41.8-.7 41.8-2.5 3.7c-5.7 8.4-5.4 10-5.1-36.8l.2-42.9 3.7-3.8c2-2 4-3.7 4.4-3.7.3 0 .3 18.8 0 41.7zM712 756c.5 58.1.4 62.6-1.2 64.4-1 1.1-1.9 1.8-2.2 1.5-.7-.8-1.7-127.5-.9-128.2.4-.4 1.4-.6 2.3-.5 1.3.3 1.6 7.4 2 62.8zm-326.6-39.8c.7 6.2 3.2 35.9 4.2 49.9.6 9.4.6 9.7-1.6 10.4-1.2.4-2.6.3-3-.2-.7-.7-2.9-22.9-5.6-57.1l-.7-8.2h3.1c2.9 0 3.1.2 3.6 5.2zm-78.6 35c.7.7 1.2 3.2 1.2 5.7 0 2.6 1.2 16.1 2.5 30.1 3.8 38.3 4.1 43.5 2.4 42.5-2.6-1.5-4.9-3.8-4.4-4.4.2-.4-.2-5.4-1-11.1-.7-5.8-1.6-15.2-2-21-.4-5.8-1.3-16.4-2.1-23.5-1.9-17.5-1.8-19.5.4-19.5 1 0 2.3.5 3 1.2zm47.3 67.3c.3 2.2.9 10.4 1.3 18.2.7 15 .4 16.1-3.7 13-1.2-.9-2-4.7-3.2-16.1-2.1-20.6-2.2-19.8 1.7-19.4 2.9.3 3.3.7 3.9 4.3z"
      fill="#ecedee"
    />
    <Path
      d="M318.4 448.4C308 452.9 307.2 467 317 472c7.1 3.6 14.3 1.9 18-4.3 7-11.4-4.4-24.6-16.6-19.3zm67.8 9.6c-9.6 5.9-9.6 20.1 0 26 9.5 5.7 21.8-1.8 21.8-13.2 0-11-12.6-18.4-21.8-12.8z"
      fill="#ecedee"
    />
  </Svg>
);

const TsIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 300 300" {...props}>
    <Path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#3178C6"
    />
    <Path
      d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
      fill="#FFF"
    />
  </Svg>
);

const AstroIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 200 200" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M156.377 4.834c1.575 1.956 2.379 4.595 3.986 9.874l35.105 115.32a146.081 146.081 0 0 0-41.97-14.209l-22.857-77.24a2.975 2.975 0 0 0-5.708.008l-22.58 77.193a146.086 146.086 0 0 0-42.159 14.23L95.471 14.682c1.612-5.27 2.418-7.904 3.994-9.857A12.97 12.97 0 0 1 104.72.936C107.048 0 109.804 0 115.315 0h25.196c5.518 0 8.277 0 10.607.938a13.016 13.016 0 0 1 5.259 3.896Z"
        fill="#ecedee"
      />
      <Path
        d="M160.577 135.516c-5.787 4.949-17.338 8.324-30.643 8.324-16.33 0-30.017-5.084-33.65-11.922-1.298 3.92-1.589 8.404-1.589 11.269 0 0-.856 14.068 8.929 23.852a9.199 9.199 0 0 1 9.2-9.198c8.707 0 8.697 7.596 8.69 13.76l-.001.55c0 9.355 5.718 17.375 13.85 20.757a18.86 18.86 0 0 1-1.896-8.268c0-8.923 5.238-12.246 11.326-16.108 4.845-3.072 10.227-6.485 13.936-13.332a25.145 25.145 0 0 0 3.034-12.013 25.24 25.24 0 0 0-1.186-7.67Z"
        fill="#FF5D01"
      />
    </G>
  </Svg>
);

const CssIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 452 520" {...props}>
    <Path fill="#0c73b8" d="M41 460 0 0h451l-41 460-185 52" />
    <Path fill="#30a9dc" d="m226 472 149-41 35-394H226" />
    <Path
      fill="#ecedee"
      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261-124-33 7 60 117 32z"
    />
    <Path
      fill="#fff"
      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
    />
  </Svg>
);

const ReactIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path
      d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
      fill="#00D8FF"
    />
  </Svg>
);

const ThreeIcon = (props: SvgProps) => (
  <Svg
    fill="none"
    strokeLinecap="square"
    strokeMiterlimit={10}
    viewBox="0 0 226.77 226.77"
    {...props}
  >
    <G
      fillRule="evenodd"
      stroke="#ecedee"
      strokeLinecap="butt"
      strokeLinejoin="round"
      strokeWidth={4}
    >
      <Path d="M71.984 204.863 28.771 29.923l173.23 49.874z" />
      <Path d="m115.354 54.865 21.591 87.496-86.567-24.945z" />
      <Path d="M93.874 129.283 83.15 85.818l43.008 12.346zM72.422 42.406 83.146 85.87 40.138 73.525zM158.434 67.183l10.724 43.465-43.008-12.346zM93.879 129.313l10.724 43.465-43.008-12.346z" />
    </G>
  </Svg>
);

const VueIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path
      d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
      fill="#41B883"
    />
    <Path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883" />
    <Path
      d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
      fill="#35495E"
    />
  </Svg>
);

const ExpoIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path
      d="M121 85c2-3 5-4 7-4 1 0 5 1 7 4 16 22 43 67 63 101l26 40c7 8 18 3 24-6s8-15 8-22c0-4-88-168-97-182-9-13-11-16-26-16h-11c-14 0-16 3-25 16C88 30 0 194 0 198c0 7 2 13 8 22s17 14 24 6l26-40c20-34 47-79 63-101Z"
      fill="#ecedee"
    />
  </Svg>
);

const TwIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Defs>
      <LinearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a">
        <Stop stopColor="#2298BD" offset="0%" />
        <Stop stopColor="#0ED7B5" offset="100%" />
      </LinearGradient>
    </Defs>
    <Path
      d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      fill="url(#a)"
    />
  </Svg>
);

const ViteIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Defs>
      <LinearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a">
        <Stop stopColor="#41D1FF" offset="0%" />
        <Stop stopColor="#BD34FE" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b">
        <Stop stopColor="#FFEA83" offset="0%" />
        <Stop stopColor="#FFDD35" offset="8.333%" />
        <Stop stopColor="#FFA800" offset="100%" />
      </LinearGradient>
    </Defs>
    <Path
      d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
      fill="url(#a)"
    />
    <Path
      d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
      fill="url(#b)"
    />
  </Svg>
);

const VercelIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path d="m128 0 128 221.705H0z" />
  </Svg>
);

const WasmIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 600 600" {...props}>
    <Path
      d="M376 0v3.3c0 38.76-31.42 70.17-70.17 70.17-38.76 0-70.17-31.42-70.17-70.17V0H0v612h612V0z"
      fill="#654ff0"
    />
    <Path
      d="M142.16 329.81h40.56l27.69 147.47h.5l33.28-147.47h37.94l30.06 149.28h.59l31.56-149.28h39.78L332.43 546.5h-40.25l-29.81-147.47h-.78L229.68 546.5h-41zm287.69 0h63.94l63.5 216.69h-41.84l-13.81-48.22H428.8l-10.66 48.22h-40.75zm24.34 53.41-17.69 79.5h55.06l-20.31-79.5z"
      fill="#fff"
    />
  </Svg>
);

const GlIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 1082 452.3" {...props}>
    <G fill="#900">
      <Path d="M1049.4 294.8v5.5h-8v19.1h-6v-19.1h-8v-5.5zM1073.4 319.4v-18.7l-5 18.7h-5l-6-18.7v18.7h-6v-24.6h10l4 16.4 4-16.4h10v24.6z" />
    </G>
    <G fill="#900">
      <Path d="M798.66 318c-8.962 3.8-17.924 5.7-26.986 5.7-14.34 0-27.285-2.5-38.736-7.5s-21.111-11.9-28.978-20.7-13.941-19.1-18.124-31-6.273-24.7-6.273-38.4c0-14.1 2.091-27.1 6.273-39.2s10.158-22.6 18.024-31.5c7.867-9 17.526-16 28.978-21.1s24.298-7.7 38.737-7.7c9.659 0 18.92 1.5 27.882 4.4s17.128 7.2 24.397 12.8 13.244 12.6 17.925 20.9 7.568 17.8 8.663 28.5h-39.234c-2.49-10.5-7.17-18.4-14.14-23.7s-15.436-7.9-25.493-7.9c-9.261 0-17.128 1.8-23.6 5.4s-11.751 8.4-15.734 14.5-6.97 13-8.763 20.7-2.789 15.7-2.789 24c0 7.9.897 15.6 2.789 23.1 1.792 7.5 4.78 14.2 8.763 20.2s9.26 10.8 15.733 14.4 14.34 5.4 23.6 5.4c13.643 0 24.199-3.5 31.667-10.4s11.75-16.9 13.045-30.1h-41.425v-31.1h78.569v101.7h-26.19l-4.182-21.3c-7.27 9.5-15.435 16.1-24.397 19.9zM920.248 131.3v153.1h91.315v34.9H879.12v-188z" />
      <Path d="M725.868 342.7c-62.835 38.4-157.038 60.2-262.095 60.2-189.302 0-342.655-79.1-342.655-176.8 0-97.6 153.453-176.8 342.655-176.8 105.455 0 199.957 22.3 262.792 60.9C658.054 45.5 534.973.1 394.365 0 178.876 0 4.212 101.2 4.212 226.1s174.664 226.2 390.055 226.2c140.11 0 262.792-45.3 331.602-109.6z" />
    </G>
    <G fill="#900">
      <Path d="m220.9 273.6-36.3-157h-34.3l53.8 204.7h32.2l45.3-160.8 44.7 160.8h32.3l55.7-204.7H378l-36.3 157-43.8-157h-33.2zM504.9 202.8c-5-7.1-11.3-12.5-18.7-16.2-7.6-3.8-16.4-5.7-26.2-5.7-11 0-20.9 2-29.5 5.9-8.1 3.7-15 9.2-20.6 16.3-10.3 13.1-15.7 31.6-15.7 53.5 0 9.7 1.4 18.9 4.1 27.1 2.7 8.3 6.8 15.6 12 21.7 11 12.8 26.7 19.6 45.4 19.6 9.8 0 17.8-1 24.5-3.1 5.8-1.8 9.7-4.2 12.9-6.3 4.1-2.7 7.8-6 11.2-9.8 2.8-3.3 5.3-6.9 7.5-10.8 3.8-7 5.7-13.6 6.1-17l.3-2.3h-26.7l-.1 1.9c-.7 8.7-12.1 24.2-32.4 24.2-29 0-35.9-21-36.4-39.5h97.2v-2.1c0-11.9-1.2-22.8-3.6-32.3-2.7-9.9-6.4-18.3-11.3-25.1zm-48 2.1c21.5 0 33 11.6 35.1 35.4h-69.6c1.1-19.3 16.4-35.4 34.5-35.4zM654.1 222.4c-2.6-8.3-6.4-15.6-11.3-21.7-5.1-6.3-11.3-11.2-18.4-14.6-7.4-3.5-15.7-5.3-24.7-5.3-8.3.1-15.8 1.9-22.4 5.4-5.5 2.8-10.4 6.8-14.6 11.8v-62.8h-26.6v186h25.3v-12.7c2.2 2.9 5.1 6 8.9 8.7 7.2 5.2 16.1 7.8 26.4 7.8 11.1 0 21.1-2.5 29.5-7.4 7.5-4.4 13.9-10.7 18.9-18.7 4.4-7 7.7-15.3 9.9-24.6 1.9-8 2.9-16.8 2.9-25.4.1-9.3-1.2-18.3-3.8-26.5zm-23.9 30.2c0 14.6-2.9 26.8-8.5 35.4-5.9 9.1-14.5 13.7-25.5 13.7-15.9 0-34.5-11.1-34.5-42.5 0-15 1.9-26.6 5.7-35.4 5.5-12.7 14.8-18.8 28.3-18.8 14.4 0 24.1 5.6 29.5 17.3 4.4 9.6 5 21.3 5 30.3z" />
    </G>
  </Svg>
);

const PuppeteerIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 383" {...props}>
    <Path
      fill="#DFDEDF"
      d="M253.422 214.246H2.192v-14.168c0-9.52 7.717-17.237 17.236-17.237h216.757c9.52 0 17.237 7.717 17.237 17.237v14.168Z"
    />
    <Path
      fill="#FFF"
      d="M235.92 378.553H19.692c-9.666 0-17.502-7.836-17.502-17.502V214.246h251.23V361.05c0 9.666-7.835 17.502-17.502 17.502"
    />
    <Path d="M250.302 211.398v-12.706c0-7.501-6.08-13.582-13.581-13.582H19.279c-7.501 0-13.581 6.08-13.581 13.582v12.706h244.604Zm0 151.469V217.096H5.698v145.77c0 7.502 6.08 13.582 13.581 13.582h217.442c7.501 0 13.581-6.08 13.581-13.581ZM20.554 179.413l.846-9.236-3.592 9.31c.487-.037.974-.074 1.471-.074h1.275Zm213.401-15.57 1.254 15.57h1.512c.809 0 1.601.066 2.384.163l-5.15-15.733Zm17.247 22.164c2.977 3.394 4.798 7.826 4.798 12.685v164.175c0 10.63-8.649 19.279-19.279 19.279H19.279C8.649 382.146 0 373.498 0 362.866V198.693c0-5.152 2.043-9.827 5.347-13.29l19.22-49.817 8.381-91.554 9.456.865-7.552 82.492 2.66 1.026-3.61 9.358-3.812 41.64h195.593L214.829 44.669l9.464-.763 6.402 79.469.004-.001 20.503 62.634Zm-230.046 8.39a4.302 4.302 0 1 1 0 8.603 4.302 4.302 0 0 1 0-8.603Zm14.709 0a4.302 4.302 0 1 1 0 8.603 4.302 4.302 0 0 1 0-8.603Zm14.244 0a4.302 4.302 0 1 1 0 8.603 4.302 4.302 0 0 1 0-8.603Z" />
    <Path d="M36.022 287.748c.739-.855 1.128-1.979 1.128-3.374 0-1.396-.39-2.475-1.128-3.33-.778-.855-1.868-1.26-3.268-1.26h-6.847v9.223h6.847c1.4 0 2.49-.405 3.268-1.259Zm-3.268-13.497c2.956 0 5.29.9 7.04 2.744 1.752 1.844 2.608 4.318 2.608 7.38 0 3.102-.856 5.532-2.567 7.376-1.751 1.846-4.085 2.79-7.081 2.79h-6.847v12.414h-5.291v-32.704h12.138Zm28.544 20.057v-9.54h5.698v21.54h-5.698v-1.942c-1.727 1.726-3.97 2.589-6.777 2.589-2.59 0-4.662-.863-6.259-2.546-1.597-1.683-2.374-3.842-2.374-6.518v-13.123h5.698v11.914c0 1.51.388 2.763 1.208 3.67.777.906 1.813 1.38 3.151 1.38 3.583 0 5.353-2.46 5.353-7.424Zm27.926 5.914c1.122-1.166 1.683-2.72 1.683-4.662 0-1.942-.56-3.54-1.683-4.705-1.166-1.166-2.59-1.77-4.36-1.77-1.597 0-3.02.604-4.273 1.813-1.252 1.209-1.856 2.762-1.856 4.662 0 1.899.604 3.454 1.856 4.618 1.252 1.21 2.676 1.814 4.273 1.814 1.77 0 3.194-.604 4.36-1.77Zm-3.367-16.101c2.806 0 5.31 1.08 7.425 3.238 2.115 2.2 3.15 4.92 3.15 8.2 0 3.28-1.035 6-3.15 8.159-2.116 2.159-4.576 3.237-7.425 3.237-2.806 0-5.18-.777-7.122-2.33v11.959h-5.698v-31.816h5.698v1.727c1.9-1.597 4.273-2.374 7.122-2.374Zm31.078 16.1c1.122-1.165 1.683-2.72 1.683-4.661 0-1.942-.561-3.54-1.683-4.705-1.166-1.166-2.59-1.77-4.36-1.77-1.597 0-3.021.604-4.273 1.813-1.252 1.209-1.857 2.762-1.857 4.662 0 1.899.605 3.454 1.857 4.618 1.252 1.21 2.676 1.814 4.273 1.814 1.77 0 3.194-.604 4.36-1.77Zm-3.368-16.1c2.806 0 5.31 1.08 7.426 3.238 2.114 2.2 3.15 4.92 3.15 8.2 0 3.28-1.036 6-3.15 8.159-2.116 2.159-4.576 3.237-7.426 3.237-2.805 0-5.18-.777-7.122-2.33v11.959h-5.697v-31.816h5.697v1.727c1.9-1.597 4.274-2.374 7.122-2.374Zm18.991 8.935h10.403c-.345-1.338-.993-2.33-1.899-2.98-.907-.646-1.985-.991-3.195-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935Zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065 2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403c.302 1.51.95 2.718 1.943 3.626.992.906 2.114 1.38 3.452 1.38 2.461 0 4.231-.95 5.353-2.848l5.094 1.079c-.907 2.202-2.288 3.843-4.1 4.965-1.814 1.122-3.929 1.682-6.347 1.682-3.108 0-5.74-1.078-7.856-3.193-2.115-2.115-3.195-4.878-3.195-8.202 0-3.323 1.08-6.086 3.238-8.245 2.115-2.114 4.75-3.194 7.9-3.194Zm26.632 17.526c1.079 0 2.288-.346 3.583-1.036l1.64 4.748c-1.986 1.079-3.842 1.597-5.612 1.597-2.633 0-4.705-.734-6.216-2.16-1.51-1.422-2.244-3.538-2.244-6.43v-8.936h-4.62v-4.662h4.62v-6.517h5.698v6.517h7.036v4.662h-7.036v8.504c0 2.46 1.036 3.713 3.15 3.713Zm11.954-8.591h10.403c-.345-1.338-.993-2.33-1.899-2.98-.907-.646-1.985-.991-3.195-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935Zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065 2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403c.302 1.51.95 2.718 1.943 3.626.992.906 2.114 1.38 3.452 1.38 2.461 0 4.231-.95 5.353-2.848l5.093 1.079c-.906 2.202-2.287 3.843-4.1 4.965-1.813 1.122-3.928 1.682-6.346 1.682-3.108 0-5.74-1.078-7.856-3.193-2.115-2.115-3.195-4.878-3.195-8.202 0-3.323 1.08-6.086 3.238-8.245 2.115-2.114 4.75-3.194 7.9-3.194Zm20.285 8.935h10.403c-.345-1.338-.993-2.33-1.898-2.98-.907-.646-1.986-.991-3.196-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935Zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065 2.115 2.072 3.195 4.704 3.325 7.942v1.943h-16.404c.302 1.51.95 2.718 1.944 3.626.992.906 2.114 1.38 3.452 1.38 2.46 0 4.23-.95 5.352-2.848l5.095 1.079c-.907 2.202-2.288 3.843-4.101 4.965-1.814 1.122-3.929 1.682-6.346 1.682-3.108 0-5.742-1.078-7.856-3.193-2.115-2.115-3.196-4.878-3.196-8.202 0-3.323 1.08-6.086 3.238-8.245 2.115-2.114 4.75-3.194 7.9-3.194Zm28.66.345c.649 0 1.167.043 1.513.172l-.303 5.483h-1.251c-5.137 0-7.685 3.065-7.685 9.238v6.949h-5.697v-21.54h5.697v3.928c1.943-2.806 4.533-4.23 7.727-4.23Z" />
    <Path
      fill="#00D8A2"
      d="m211.095 132.638 30.741-14.841v-14.84l-71.023-33.922 71.023-36.571v-14.31L212.155 4.373l-84.096 41.871-85.51-41.871-27.561 14.841v12.72L81.77 68.505l-66.782 33.922v15.37l28.621 14.841 84.803-43.462z"
    />
    <Path d="M214.95 126.585v-6.392l23.14-11.991v7.18l-23.14 11.203Zm-198.1-18.551 22.36 12.836v5.11l-22.36-11.312v-6.634ZM131.383 81.04l76.92 38.005v7.642l-76.92-39.405V81.04Zm-85.526 39.117 78.88-39.11v6.233l-78.88 39.908v-7.031Zm55.852-63.905L21.887 17.714 42.561 7.207 128.06 51.53l84.067-44.304 21.404 10.963-77.84 39.174c-3.113 1.566-3.108 6.01.007 7.57l77.038 38.557-19.968 10.347-84.708-43.403-86.206 44.289-19.689-11.303 79.59-39.562c3.152-1.567 3.126-6.075-.045-7.606ZM17.844 30.77v-7.014L92.29 60.899l-7.526 3.007-66.92-33.135Zm152.654 33.548c-.102-.062-7.13-3.378-7.13-3.378l74.721-37.605v7.045L170.5 64.319Zm7.48 3.683 65.674-32.976a1.969 1.969 0 0 0 1.085-1.76v-15.6a1.97 1.97 0 0 0-1.07-1.752L213.032.222a1.97 1.97 0 0 0-1.788-.003l-82.303 41.764a1.965 1.965 0 0 1-1.769.006L43.42.207a1.97 1.97 0 0 0-1.77.007L11.28 15.648a1.969 1.969 0 0 0-1.078 1.755v15.855c0 .749.425 1.433 1.097 1.765L77.25 67.607l-65.646 32.595a1.968 1.968 0 0 0-1.092 1.727l-.287 15.59a1.969 1.969 0 0 0 1.08 1.793l31.536 15.956a1.97 1.97 0 0 0 1.772.002l82.558-41.455a1.968 1.968 0 0 1 1.775.004l81.53 41.454a1.97 1.97 0 0 0 1.748.017l31.402-15.203a1.969 1.969 0 0 0 1.111-1.771v-16.29a1.97 1.97 0 0 0-1.1-1.767l-65.66-32.257Z" />
  </Svg>
);

const NextIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path
      d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5Z"
      fill="#ecedee"
    />
  </Svg>
);
