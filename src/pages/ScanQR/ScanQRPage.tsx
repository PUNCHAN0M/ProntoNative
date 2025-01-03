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
    router.push(`/Munu/[id]?qrData=${data}`);
    setTimeout(() => {
      setScanned(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Image source={prontoLogo} style={styles.cameraLogo}></Image>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      ></CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text} onPress={() => router.push("/Munu/[id]")}>
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
