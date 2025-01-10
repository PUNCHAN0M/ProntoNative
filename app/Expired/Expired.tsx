import ExpiredDatePage from "@/src/pages/ExpiredDate/ExpiredDatePage";
import { router } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import backIcon from "@assets/backIcon.png";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();
  return (
    <>
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
      <ExpiredDatePage />
    </>
  );
}
