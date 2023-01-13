import React, { useCallback, useState } from "react";
import { Image, LayoutRectangle, Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";
import { mapItems } from "../models/projects";

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
              return (
                <Image
                  resizeMode="cover"
                  style={{
                    width: layoutProps.width * 0.45,
                    height: 50 + Math.random() * 250,
                    borderColor: "pink",
                    borderWidth: 1,
                  }}
                  source={item.img}
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
}
