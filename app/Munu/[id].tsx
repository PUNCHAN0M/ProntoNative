import HomePages from "@/src/pages/Home/HomePage";
import MenuPage from "@/src/pages/Menu/MenuPage";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Munu() {
  const { id, typeItem, expiredDate, timePriod } = useLocalSearchParams<{
    id: string;
    typeItem: string;
    expiredDate: string;
    timePriod: string;
  }>();

  return (
    <>
      <MenuPage
        typeItem={typeItem}
        expiredDate={expiredDate}
        timePriod={timePriod}
      />
    </>
  );
}
