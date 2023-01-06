import Constants from "expo-constants";
import React from "react";
import { Suspense } from "react";
import { View, Text, SafeAreaView } from "react-native";
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
import { APP_LINKS } from "./src/models/routes";
import { useAtom } from "jotai";
import "./styles";

export default function App() {
  const [debug] = useAtom($debug);
  return (
    <GestureHandlerRootView className="flex-1">
      <NativeRouter>
        <SafeAreaView className="flex-1">
          {debug && <BarNavigation />}
          <Suspense>
            <Routes>
              {APP_LINKS.map((link) => (
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

function BarNavigation() {
  return (
    <View
      className="flex flex-row w-full bg-slate-600"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <ScrollView
        horizontal
        style={{ paddingBottom: Constants.statusBarHeight * 0.5 }}
      >
        {APP_LINKS.map((link) => (
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
  const style =
    pathname == to
      ? "px-3 pt-2 text-xl font-bold capitalize text-slate-200"
      : "px-3 pt-2 text-xl font-bold capitalize text-slate-400";
  return (
    <Link to={to}>
      <Text className={style}>{children}</Text>
    </Link>
  );
}
