import { Node, Shaders } from "gl-react";
import { Surface } from "gl-react-expo";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  LayoutRectangle,
  Pressable,
  Text,
  View,
} from "react-native";

import card from "../../assets/cards.png";
import { Freeze } from "../common/freeze";
import { noises2 } from "../shaders/noises2";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  helloBlue: {
    // This is our first fragment shader in GLSL language (OpenGL Shading Language)
    // (GLSL code gets compiled and run on the GPU)
    // frag: defaultSShader,
    frag: noises2,
  },
});

const useAnimationFrame = (
  callback: ({ time, delta }: { time: number; delta: number }) => void
) => {
  /** @see https://github.com/franciscop/use-animation-frame/blob/master/src/index.js */
  const fnRef = useRef<
    ({ time, delta }: { time: number; delta: number }) => void
  >(null!);
  const frame = useRef<number>(null!);
  const init = useRef(performance.now());
  const last = useRef(performance.now());

  fnRef.current = callback;

  useLayoutEffect(() => {
    const animate = (now: number) => {
      // In seconds ~> you can do ms or anything in userland
      fnRef.current({
        time: (now - init.current) / 1000,
        delta: (now - last.current) / 1000,
      });
      last.current = now;
      frame.current = window.requestAnimationFrame(animate);
    };

    frame.current = window.requestAnimationFrame(animate);
    return () => {
      frame.current && cancelAnimationFrame(frame.current);
    };
  }, []);
};

function Blue({ blue }: { blue: number }) {
  // const time = useRef(0);
  const [time, setTime] = useState(0);
  useAnimationFrame((e) => {
    // console.log(e.time)
    // time.current = e.time;
    setTime(e.time);
  });
  return (
    <Node
      shader={shaders.helloBlue}
      uniforms={{
        u_resolution: [300, 300],
        // u_time: time.current,
        u_time: time,
      }}
    />
  );
}

export function GlExampleScreen() {
  return (
    <>
      <Imperative />
      <View className="flex flex-col items-center justify-center">
        {/* https://codesandbox.io/s/b7oykj?file=/phau/dict/chaos/0310noise1d.frag:5448-5465 */}
        <Text>source code</Text>
      </View>
      <Congelado />
    </>
  );
}

export function Imperative() {
  console.log({ windowWidth, windowHeight });
  const size = 0.5 * Math.min(windowWidth, windowHeight);
  console.log({ size });

  const [isPaused, setPaused] = useState(true);
  return (
    <Pressable
      onPress={() => setPaused(!isPaused)}
      className="flex flex-col items-center justify-center"
    >
      {isPaused ? (
        <Image
          resizeMode="contain"
          className="w-[300px] h-[300px]"
          source={card}
        />
      ) : (
        <Surface style={{ width: size, height: size }}>
          <Blue blue={0.5} />
        </Surface>
      )}
    </Pressable>
  );
}

export function Congelado({
  w = windowWidth,
  h = windowHeight,
}: {
  w?: any;
  h?: any;
}) {
  // console.log({ windowWidth, windowHeight });
  // const size = 1 * Math.min(w, h);
  // console.log({ size });

  const [isPaused, setPaused] = useState(true);
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="border border-indigo-300 aspect-square"
      style={{ width: "74%" }}
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Pressable
        onHoverIn={() => setPaused(false)}
        onHoverOut={() => setPaused(true)}
        onPress={() => setPaused(!isPaused)}
        className="flex flex-col items-center justify-center"
      >
        {layoutProps && (
          <Freeze
            freeze={isPaused}
            placeholder={
              <Image
                resizeMode="contain"
                style={{ width: "100%", height: layoutProps.height }}
                source={card}
              />
            }
          >
            <Surface style={{ width: "100%", height: layoutProps.height }}>
              <Blue blue={0.5} />
            </Surface>
          </Freeze>
        )}
      </Pressable>
    </View>
  );
}
