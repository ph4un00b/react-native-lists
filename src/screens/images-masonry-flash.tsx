import { MasonryFlashList } from "@shopify/flash-list";
import { useCallback, useState } from "react";
import { Image, LayoutRectangle, Platform, Text, View } from "react-native";
import { SmartImage } from "../common/images";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";
import { mapItems } from "../models/projects";
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

const trackItem = (item: any & { title: string }) =>
  console.log("### track " + item.title);

export function MasonryFlashScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);

  const onViewableItemsChanged = useCallback(
    (info: { changed: any[] }): void => {
      // console.log(info.changed)
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        trackItem(visible.item);
      });
    },
    [],
  );

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
        <View
          className="border border-slate-100"
          style={{ width: layoutProps.width, height: layoutProps.height }}
        >
          <MasonryFlashList
            // not supported
            // - horizontal
            // - inverted
            // - initialScrollIndex
            // - viewabilityConfigCallbackPairs
            // - onBlankArea
            // only flash
            estimatedItemSize={Platform.select({ web: 293, android: 290 })}
            // static api
            numColumns={2}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 70,
              minimumViewTime: 500,
              // viewAreaCoveragePercentThreshold: 60
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            ListHeaderComponent={
              <Text className="pt-4 pb-3 text-3xl capitalize text-slate-200">
                Public projects
              </Text>
            }
            data={mapItems["2021 public projects"]
              .concat(mapItems["2022 public projects"])
              .concat(mapItems["2023 upcoming projects"])}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return index % 2 == 0
                ? <Congelado w={200} h={200} />
                : <SmartImage img={item.img} borderColor="red" />;
            }}
          />
        </View>
      )}
    </View>
  );
}
