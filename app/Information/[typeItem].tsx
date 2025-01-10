import CouplingNormex from "@/src/pages/Information/CouplingNormex";
import test1 from "@/src/pages/Information/test1.tsx";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { typeItem } = useLocalSearchParams();
  useEffect(() => {
    console.log(typeItem);
  }, []);

  switch (typeItem) {
    case "CouplingNormex":
      return <CouplingNormex />;
    case "test":
      return <test1 />;
    default:
      return (
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
      );
  }
}
