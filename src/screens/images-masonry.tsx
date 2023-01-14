import React, { useCallback, useState } from "react";
import { LayoutRectangle, Text, View } from "react-native";
/**
 * @abstract this wil only work on development builds
 * aka: $ npx expo prebuild && npx expo run:android
 * @see https://docs.expo.dev/versions/unversioned/sdk/image/#installation
 */
import { Image as ExImage } from "expo-image";
import MasonryList from "@react-native-seoul/masonry-list";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";
import { mapItems } from "../models/projects";
import { SmartImage } from "../common/images";
import { Congelado } from "./gl.native";

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
      {/* <View className="w-full text-center border lg:w-1/2 md:w-3/4 border-slate-100"> */}
      {
        /**
         * @abstract tailwind mode will not work at the moment
         */
      }
      {layoutProps && (
        <View className="border border-slate-100">
          <MasonryList
            style={{ width: layoutProps.width }}
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
                ? <Congelado w={200} h={200} />
                : <SmartImage img={item.img} borderColor="peru" />;
            }}
          />
        </View>
      )}
    </View>
  );
}
