import card from "../../assets/cards.png";
import graph from "../../assets/graph-editor.png";
import htmlq from "../../assets/query_html.png";
import animation from "../../assets/rose.png";
import editor from "../../assets/blends.png";
import glsl from "../../assets/compositions.png";
import compositions from "../../assets/r3f.png";
import glsl2 from "../../assets/compo2.png";
import insta from "../../assets/instagram_bot.png";
import tele from "../../assets/telegram_bot.png";
import refactoring from "../../assets/css_refactoring.png";
import ssg from "../../assets/page_generator.png";
import json2html from "../../assets/json2html.png";

export const mapItems = {
  "2023 upcoming projects": [
    {
      // crypto.randomUUID(): ,
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/cards-tree",
      img: card,
      title: "wip, 3d cards",
      icons: ["astro", "css", "ts", "vue", "react"],
    },
    {
      // crypto.randomUUID(): ,
      id: Math.random().toString(36).slice(2),
      link: "#",
      img: graph,
      title: "wip, graph editor",
      icons: ["wasm", "astro", "vue", "react", "ts"],
    },
  ],
  "2022 public projects": [
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/html-transformers",
      img: htmlq,
      title: "html q",
      icons: ["deno", "ts"],
      //   <Text className="text-base text-center text-slate-200">
      //   - An HTML transformation CLI tool
      // </Text>

      // <Text className="text-base text-center text-slate-200">
      //   - Uses css selectors & native idioms
      // </Text>
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/3rf-animation",
      img: animation,
      title: "wip, animation",
      icons: ["next", "gl", "three", "react", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                  <Text className="text-base text-center text-slate-200">
                    - Generative animation
                  </Text>
                  <Text className="text-base text-center text-slate-200">
                    - Reacting to music, mobile friendly
                  </Text>
                </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/card-editor",
      img: editor,
      title: "card editor",
      icons: ["gl", "vue"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                  <Text className="text-base text-center text-slate-200">
                    - An card editor webapp
                  </Text>
                  <Text className="text-base text-center text-slate-200">
                    - Mixing blend modes and shaders in Vue
                  </Text>
                </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/shaders-compositions",
      img: glsl,
      title: "shaders",
      icons: ["gl"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                  <Text className="text-base text-center text-slate-200">
                    - Mixing noises & patterns
                  </Text>
                  <Text className="text-base text-center text-slate-200">
                    - Shaders compositions
                  </Text>
                </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/3d-compositions",
      img: compositions,
      title: "3d compositions",
      icons: ["gl", "ts", "three"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                  <Text className="text-base text-center text-slate-200">
                    - Webgl compositions
                  </Text>
                  <Text className="text-base text-center text-slate-200">
                    - Mixing shaders & post-processing
                  </Text>
                </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/compositions-2",
      img: glsl2,
      title: "compositions 2",
      icons: ["gl"],
      /*
                <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
                  <Text className="text-base text-center text-slate-200">
                    - More GLSL compositions
                  </Text>
                </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/instagram-bot",
      img: insta,
      title: "instagram bot",

      icons: ["deno", "puppeteer", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
        <Text className="text-base text-center text-slate-200">
        - An instagram bot scrapper
        </Text>
        </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/telegram-bot",
      img: tele,
      title: "telegram bot",
      icons: ["deno", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
        <Text className="text-base text-center text-slate-200">
          - A telegram bot template
          </Text>
          </View> */
    },
  ],
  "2021 public projects": [
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/css-refactoring",
      img: refactoring,
      title: "css refactoring",
      icons: ["deno", "tw", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
    <Text className="text-base text-center text-slate-200">
      - A CSS refactoring tool
    </Text>
    <Text className="text-base text-center text-slate-200">
    - TDD && E2E
    </Text>
    <Text className="text-base text-center text-slate-200">
    - for windicss and tailwind
    </Text>
    </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/ssg",
      img: ssg,
      title: "SSG CLI",
      icons: ["deno", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
        <Text className="text-base text-center text-slate-200">
        - A Static Site Generator
        </Text>
        <Text className="text-base text-center text-slate-200">
          - TDD && E2E
        </Text>
        <Text className="text-base text-center text-slate-200">
        - for quick prototyping
        </Text>
        </View> */
    },
    {
      id: Math.random().toString(36).slice(2),
      link: "https://plinks.deno.dev/json2html",
      img: json2html,
      title: "json 2 html",
      icons: ["deno", "ts"],
      /* <View className="relative flex w-1/2 rounded-md shadow-sm bg-slate-900 aspect-square justify-evenly">
        <Text className="text-base text-center text-slate-200">
          - Deno, Typescript & TDD
        </Text>
        <Text className="text-base text-center text-slate-200">
          - I love the UNIX philosophy
        </Text>
      </View> */
    },
  ],
};

export const items = Object.entries(mapItems);
