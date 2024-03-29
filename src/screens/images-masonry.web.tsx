import React, { useState } from "react";
import { LayoutRectangle, Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";
import { mapItems } from "../models/projects";
import { Congelado } from "./gl.native";
import { SmartCardWeb } from "../common/images";
import { Button, Icon } from "react-native-magnus";

/**
 * on loading images
 * if the extension is CAPITALIZED
 * expo will fail on mobile (At least on android) atm!
 * in order to solve this
 * you can lowercase the extension
 * @returns Unable to resolve
 */
function Enlaces(props: any) {
  const drag = useDrag({
    width: props.width,
    height: props.height,
    decay: false,
  });
  return (
    <EnlacesItems
      handleDecay={() => drag.toggleDecay()}
      decay={drag.decay}
      top={100}
      left={15}
    />
  );
}

export function MasonryScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />
      {
        /**
         * @abstract tailwind mode will work on web mode only
         * try another strat on native!
         */
      }
      {layoutProps && (
        <View className="w-full text-center border lg:w-1/2 md:w-3/4 border-slate-100">
          {/* <View className="border border-slate-100"> */}
          <MasonryList
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 10,
              alignSelf: "stretch",
            }}
            ListHeaderComponent={
              <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
                Public projects
              </Text>
            }
            data={mapItems["2021 public projects"]
              .concat(mapItems["2022 public projects"])
              .concat(mapItems["2023 upcoming projects"])}
            keyExtractor={(item) => item.id}
            renderItem={({ item, i: index }: { item: any; i: number }) => {
              return index % 2 == 0
                ? (
                  <View className="flex flex-row items-center justify-center">
                    <Congelado debug={!false} />
                  </View>
                )
                : (
                  <SmartCardWeb
                    debug={!false}
                    opacity={0.8}
                    img={item.img}
                    title={item.title}
                    icons={item.icons}
                    button={
                      <Button
                        position="absolute"
                        bottom={8}
                        right={0}
                        zIndex={60}
                        bg="red500"
                        h={30}
                        w={30}
                        mx="xl"
                        rounded="circle"
                        shadow="md"
                        borderless
                      >
                        <Icon name="play" color="white" fontFamily="Feather" />
                      </Button>
                    }
                  />
                );
            }}
          />
        </View>
      )}
    </View>
  );
}
