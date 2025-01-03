import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import globalStyles from "../../styles/globalStyle";
import { router } from "expo-router";

const prontoLogo = require("@assets/ProntoIcon.jpg");
const checkBox = require("@assets/check.png");
const checkBox_Non = require("@assets/check-non.png");

const bulletPoints = [
  "Camera Access Request",
  "Our app requires access to your camera for the following features:",
  "• [Describe specific feature] (e.g., taking profile pictures, scanning documents, video calls)",
  "• [Another feature] (e.g., scanning barcodes, capturing media)",
  "Please grant camera access to fully utilize these functions.",
  "Permissions:",
  "• This access allows the app to use your camera.",
  "• Your camera feed will only be used for the specified features and never without your permission.",
  "Privacy:",
  "• We respect your privacy and will not share any images or recordings without your consent.",
  "• You can revoke access at any time through your device’s settings.",
];

const HomePages = () => {
  const [conditionPage, setConditionPage] = useState(false);
  const [conditionStatus, setConditionStatus] = useState(false);
  const [logoScale] = useState(new Animated.Value(1)); // เริ่มต้นที่ขนาด 100%

  const handleConditionPage = () => {
    setConditionPage(true);
    console.log(`conditionPage ${conditionPage}`);
    // เริ่มการทำ animation ของโลโก้
    Animated.timing(logoScale, {
      toValue: 0.8, // ลดขนาดลง 50%
      duration: 500, // เวลาแอนิเมชั่น
      useNativeDriver: true,
    }).start();
  };
  const handleConditionStatus = () => {
    setConditionStatus(!conditionStatus);
    console.log(`conditionStatus ${conditionStatus}`);
  };
  const handleGoScanQR = () => {
    if (conditionStatus) {
      router.push({
        pathname: '/ScanQR',
      });
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };
  return (
    <View style={[globalStyles.container, styles.container]}>
      {!conditionPage ? (
        <>
          <Image source={prontoLogo} style={{ width: 150, height: 150 }} />
          <Text style={styles.homeTitle}>Pronto</Text>
          <TouchableOpacity onPress={() => handleConditionPage()}>
            <View style={styles.enterContainer}>
              <Text style={styles.enterText}>ENTER</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Animated.Image
            source={prontoLogo}
            style={[
              { width: 75, height: 75, marginTop: 75 },
              { transform: [{ scale: logoScale }] }, // ใช้ animation เพื่อปรับขนาด
            ]}
          />
          <Text
            style={[
              styles.bulletPoint,
              { marginBottom: 5, fontWeight: "bold" },
            ]}
          >
            Pronto
          </Text>
          <Text style={styles.bulletPoint}>{bulletPoints[0]}</Text>
          <FlatList
            data={bulletPoints}
            renderItem={({ item }) => (
              <Text style={styles.bulletPoint}>{item}</Text>
            )}
          />
          <View style={{ marginBottom: "10%" }}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleConditionStatus();
                }}
              >
                {conditionStatus ? (
                  <Image source={checkBox} style={styles.checkBoxIcon}></Image>
                ) : (
                  <Image
                    source={checkBox_Non}
                    style={styles.checkBoxIcon}
                  ></Image>
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxTitle}>Agreement</Text>
            </View>
            <TouchableOpacity onPress={handleGoScanQR}>
              <View style={styles.enterContainer}>
                <Text style={styles.enterText}>ENTER</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default HomePages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  enterContainer: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderColor: "white",
    borderRadius: 30,
    borderStyle: "solid",
    borderWidth: 2,
  },
  enterText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bulletPoint: {
    color: "white",
    fontSize: 12,
    marginHorizontal: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
  checkBoxIcon: {
    width: 15,
    height: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  checkboxTitle: {
    color: "white",
  },
});
