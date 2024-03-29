import { useEffect, useState } from "react";
import { FlexStyle, Image, ImageSourcePropType, View } from "react-native";
/**
 * @abstract this wil only work on development builds
 * aka: $ npx expo prebuild && npx expo run:android
 * @see https://docs.expo.dev/versions/unversioned/sdk/image/#installation
 */
import { Image as ExImage, ImageSource, ImageStyle } from "expo-image";
import { MySmartCardA } from "../screens/menu-experiments";
import { Button, Icon } from "react-native-magnus";

type Rect = { w: number; h: number };

type CardProps = {
  title: string;
  img: ImageSourcePropType;
  opacity?: number;
  width?: FlexStyle["width"];
  borderColor?: ImageStyle["borderColor"];
  icons?: string[];
  button?: React.ReactNode;
  debug?: boolean;
};

export function SmartImageWeb(
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


export function SmartCardWeb(
  { img, title, button, debug = false, opacity = 0.1, icons = [], width = "100%" }: CardProps,
) {
  const [rect, setRect] = useState<Rect>({ w: 0, h: 0 });
  useEffect(() => {
    Image.getSize(img.toString(), (w, h) => setRect({ w, h }));
  }, [img]);

  return (
    <View
      className="relative bg-black"
      style={{ width: "100%", aspectRatio: rect.w / rect.h }}
    >
      <Image
        resizeMode="contain"
        style={{
          aspectRatio: rect.w / rect.h,
          width,
          borderColor: debug ? "pink" : "",
          borderWidth: debug ? 1 : 0,
          opacity: 0.5,
        }}
        source={img}
      />
      <MySmartCardA
        debug={debug}
        initialOpacity={opacity}
        title={title}
        width="100%"
        height="100%"
        icons={icons}
      />
      {button && button}
    </View>
  );
}

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
          //   console.log(info.source.width / info.source.height);
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

export function SmartCardNative(
  { img, title, icons = [], width = "100%", borderColor = "pink" }: CardProps,
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
    <View
      className="relative bg-black"
      style={{
        borderColor: "pink",
        borderWidth: 1,
        width: "100%",
        aspectRatio: rect.w / rect.h,
      }}
    >
      <ExImage
        contentFit="contain"
        placeholder={blurhash}
        style={{
          aspectRatio: rect.w / rect.h,
          width,
          borderColor,
          borderWidth: 1,
          opacity: 0.6,
        }}
        source={img}
      />
      <MySmartCardA
        initialOpacity={0.75}
        title={title}
        width="98%"
        height="98%"
        icons={icons}
      />
      <Button
        position="absolute"
        bottom={8}
        right={0}
        zIndex={60}
        bg="red500"
        h={35}
        w={35}
        mx="xl"
        rounded="circle"
        shadow="md"
        borderless
      >
        <Icon name="play" color="white" fontFamily="Feather" />
      </Button>
    </View>
  );
}
