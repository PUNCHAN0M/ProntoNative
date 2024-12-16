import HomePages from "@/src/pages/Home/HomePage";
import MenuPage from "@/src/pages/Menu/MenuPage";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Munu() {
  return (
    <>
      <MenuPage typeItem="CouplingNormex" expiredDate={10} timePriod={10}/>
    </>
  );
}
