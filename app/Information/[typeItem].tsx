import CouplingNormex from "@/src/pages/Information/CouplingNormex";
import test1 from "@/src/pages/Information/test1";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import backIcon from "@assets/backIcon.png";
export default function Index() {
  const { typeItem } = useLocalSearchParams();
  const router = useRouter();
  useEffect(() => {
    console.log(typeItem);
  }, []);
  const handlePages = () => {
    switch (typeItem) {
      case "CouplingNormex":
        return <CouplingNormex />;

      case "test":
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>TEST</Text>
          </View>
        );

      default:
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              404 not found {typeItem}
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={{ color: "blue" }}>Go Back to Menu</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          zIndex: 1,
          top: 20,
          left: 50,
          backgroundColor: "white",
          borderRadius: "100%",
          padding: 10,
        }}
        onPress={() => router.back()}
      >
        <Image source={backIcon} style={{ width: "100%", height: "100%" }} />
      </TouchableOpacity>
      {handlePages()}
    </View>
  );
}
