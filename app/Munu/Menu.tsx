import HomePages from "@/src/pages/Home/HomePage";
import MenuPage from "@/src/pages/Menu/MenuPage";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Munu() {
  const { typeItem, expiredDate, timePriod } = useLocalSearchParams<{
    id: string;
    typeItem: string;
    expiredDate: string;
    timePriod: string;
  }>();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuPage
        typeItem={typeItem}
        expiredDate={expiredDate}
        timePriod={timePriod}
      />
    </GestureHandlerRootView>
  );
}
