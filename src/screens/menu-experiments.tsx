import { LayoutRectangle, View } from "react-native";
import React, { useState } from "react";

import { EnlacesItems } from "../EnlacesItems";
import { useDrag } from "../EnlacesItems.shared";

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
      top={200}
      left={105}
    />
  );
}

export function MenuScreen() {
  const [layoutProps, setLayout] = useState<LayoutRectangle>(null!);
  return (
    <View
      className="flex items-center flex-1 mt-1 pt-9 justify-evenly bg-slate-900"
      onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
    >
      <Enlaces {...layoutProps} />
    </View>
  );
}
