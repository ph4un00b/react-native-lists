import Constants from "expo-constants";
import React, { Suspense } from "react";
import { SafeAreaView, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import {
  Link,
  NativeRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-native";
import { $debug } from "./src/global/atoms";
import { APP_LINKS, IMG_LINKS } from "./src/models/routes";
import { useAtom } from "jotai";
import "./styles";

const LINKS = APP_LINKS.concat(IMG_LINKS);
export default function App() {
  const [debug] = useAtom($debug);
  return (
    <GestureHandlerRootView className="flex-1">
      <NativeRouter>
        <SafeAreaView className="flex-1">
          {debug && <BarNavigation links={APP_LINKS} />}
          {debug && <BarNavigation links={IMG_LINKS} />}
          <Suspense>
            <Routes>
              {LINKS.map((link) => (
                <React.Fragment key={link.id}>
                  <Route path={link.path} element={link.screen} />
                </React.Fragment>
              ))}
            </Routes>
          </Suspense>
        </SafeAreaView>
      </NativeRouter>
    </GestureHandlerRootView>
  );
}

type TabProps = { children: React.ReactNode; to: string };

function BarNavigation({ links }: { links: Record<string, any>[] }) {
  return (
    <View
      className="flex flex-row w-full bg-slate-900"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <ScrollView
        horizontal
        style={{ paddingBottom: Constants.statusBarHeight * 0.5 }}
      >
        {links.map((link) => (
          <React.Fragment key={link.id}>
            <AppBarTab to={link.path}>{link.alias}</AppBarTab>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

function AppBarTab({ children, to }: TabProps) {
  // console.log("chaging to", to);
  const { pathname } = useLocation();
  const style = pathname == to
    ? "transition-all px-3 pt-2 text-xl font-bold capitalize text-slate-200 hover:text-yellow-400"
    : "transition-all px-3 pt-2 text-xl font-bold capitalize text-slate-400 hover:text-green-400";
  return (
    <Link to={to}>
      <Text className={style}>{children}</Text>
    </Link>
  );
}
