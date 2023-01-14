import { useEffect, useState } from "react";
import { FlexStyle, Image, ImageSourcePropType } from "react-native";

type Rect = { w: number; h: number };

export function SmartWebImage(
  { img, width = "100%" }: {
    img: ImageSourcePropType;
    width?: FlexStyle["width"];
  },
) {
  const [rect, setRect] = useState<Rect>({ w: 0, h: 0 });
  useEffect(() => {
    Image.getSize(img.toString(), (w, h) => setRect({ w, h }));
  }, [img]);

  return (
    <Image
      resizeMode="contain"
      style={{
        aspectRatio: rect.w / rect.h,
        width,
        borderColor: "pink",
        borderWidth: 1,
      }}
      source={img}
    />
  );
}
