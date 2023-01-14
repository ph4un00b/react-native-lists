import { useEffect, useState } from "react";
import { FlexStyle, Image, ImageSourcePropType } from "react-native";
/**
 * @abstract this wil only work on development builds
 * aka: $ npx expo prebuild && npx expo run:android
 * @see https://docs.expo.dev/versions/unversioned/sdk/image/#installation
 */
import { Image as ExImage, ImageSource, ImageStyle } from "expo-image";

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

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function SmartImage(
  { img, width = "90%", borderColor = "pink" }: {
    img: ImageSource;
    width?: FlexStyle["width"];
    borderColor?: ImageStyle["borderColor"];
  },
) {
  const [rect, setRect] = useState<Rect>({ w: 0, h: 0 });

  if (rect.w == 0) {
    return (
      <ExImage
        onLoad={(info) => {
          setRect({ w: info.source.width, h: info.source.height });
        }}
        contentFit="contain"
        placeholder={blurhash}
        style={{
          // aspectRatio: rect.w / rect.h,
          width,
          height: 250,
          borderColor,
          borderWidth: 1,
        }}
        source={img}
      />
    );
  }

  return (
    <ExImage
      contentFit="contain"
      placeholder={blurhash}
      style={{
        aspectRatio: rect.w / rect.h,
        width,
        borderColor,
        borderWidth: 1,
      }}
      source={img}
    />
  );
}
