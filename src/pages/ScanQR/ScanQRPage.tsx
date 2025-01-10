import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const prontoLogo = require("../../assets/ProntoIcon.jpg");
const { width, height } = Dimensions.get("window");

export default function ScanQRPage() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  });

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function handleBarCodeScanned({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) {
    setScanned(true);
    alert(`QR Code scanned! Type: ${type}, Data: ${data}`);
    console.log("data QRcode : ", data);

    const [typeItem, timePeriod, expiredDate] = data.split("/");
    
    console.log(typeItem);  // "test"
    console.log(timePeriod); // "1000"
    console.log(expiredDate); // "2021-11-01"
    
    router.push({
      pathname: "/Munu/Menu",
      params: {
        id: "1",
        typeItem: typeItem,
        expiredDate: timePeriod, //ส่งเป็น กี่วันหมดอายุ (วัน)
        timePriod: expiredDate, //ส่งเป็น Date
      },
    });
    setTimeout(() => {
      setScanned(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraLogo}>
        <Image source={prontoLogo} style={{ width: 60, height: 60 }}></Image>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
          Pronto
        </Text>
      </View>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      ></CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text
            style={styles.text}
            onPress={() =>
              router.push({
                pathname: "/Munu/Menu",
                params: {
                  typeItem: "CouplingNormex",
                  expiredDate: "100", //ส่งเป็น กี่วันหมดอายุ (วัน)
                  timePriod: "2024-11-01", //ส่งเป็น Date
                },
              })
            }
          >
            SCAN
          </Text>
        </TouchableOpacity>
        <Text style={styles.paragraphText}>
          Scan QR Code for an information about engine part
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 0,
    backgroundColor: "#012042",
    flexDirection: "column",
    alignItems: "center",
  },
  cameraLogo: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    padding: 0,
    margin: 0,
    width: width * 0.7,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  paragraphText: {
    fontSize: 20,
    color: "white",
    width: 250,
    textAlign: "center",
  },
});
