import CouplingNormex from "@/src/pages/Materials/CouplingNormex";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";

export default function Index() {
  const { typeItem } = useLocalSearchParams();
  useEffect(() => {
    console.log(typeItem);
  }, []);
  return (
    <>
      {typeItem == "CouplingNormex" ? (
        <CouplingNormex />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>404 not found {typeItem}</Text>
        </View>
      )}
    </>
  );
}
