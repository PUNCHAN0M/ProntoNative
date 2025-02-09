import React, { Suspense, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
} from "react-native";
import globalStyles from "../../styles/globalStyle";
import { router } from "expo-router";
import { calculateExpiredDateDetails } from "@/src/utility/calculateExpiredDateDetails";
import { getModelImage } from "@/src/utility/imageUtils";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");
const scanIcon = require("../../assets/scanIcon.png");
const settingIcon = require("../../assets/setting.png");
const prontoLogo = require("../../assets/Pronto.png");
const rotateIcon = require("../../assets/rotateIcon.png");
const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");

interface MenuProp {
  typeItem: string;
  expiredDate: string;
  timePriod: string;
}

const MenuPage: React.FC<MenuProp> = ({ typeItem, expiredDate, timePriod }) => {
  const menuIcon = [
    { icon: require("../../assets/infoIcon.png"), name: "Information" },
    { icon: require("../../assets/materialIcon.png"), name: "Materials" },
    { icon: require("../../assets/expiredIcon.png"), name: "Expired date" },
    { icon: require("../../assets/timeIcon.png"), name: "Time Period" },
  ];
  const imageSource = getModelImage(typeItem);

  const handleImage = () => {
    switch (typeItem) {
      case "CouplingNormex":
        return (
          <Image source={CouplingNormexPicture} style={styles.imageTypeItem} />
        );
      default:
        return <></>;
    }
  };

  const handlePressMenu = (title: string) => {
    console.log(`navigate : ${title}`);

    // Use the utility function to get the expired date details
    const {
      baseDay,
      baseMonth,
      baseYear,
      expiredDay,
      expiredMonth,
      expiredYear,
      daysRemaining,
      elapsedPercentage,
    } = calculateExpiredDateDetails(timePriod, expiredDate);

    console.log(`expired D/M/Y : ${expiredDay}/${expiredMonth}/${expiredYear}`);
    console.log(`daysRemaining : ${daysRemaining}`);
    console.log(`elapsedPercentage : ${elapsedPercentage}`);

    switch (title) {
      case "Information":
        router.push({
          pathname: "/Information/[typeItem]",
          params: {
            typeItem: typeItem,
          },
        });
        break;
      case "Materials":
        router.push({
          pathname: "/Materials/[typeItem]",
          params: {
            typeItem: typeItem,
          },
        });
        break;
      case "Expired date":
        router.push({
          pathname: "/Expired/Expired",
          params: {
            typeItem: typeItem,
            expiredDate: elapsedPercentage,
            timePriod: timePriod,
          },
        });
        break;
      case "Time Period":
        router.push({
          pathname: "/TimePeriod/TimePeriod",
          params: {
            typeItem: typeItem,
            baseDay: baseDay,
            baseMonth: baseMonth,
            baseYear: baseYear,
            expiredDay: expiredDay,
            expiredMonth: expiredMonth,
            expiredYear: expiredYear,
          },
        });
        break;
      default:
        console.log("No matching screen found.");
        break;
    }
  };

  const [dialogSetting, setDialogSetting] = useState(false);
  const [inputPath, setInputPath] = useState(`http://172.20.10.6:5173/${typeItem}`);
  const defaultPath = `http://172.20.10.6:5173/${typeItem}`;

  const handleSavePath = () => {
    console.log("Saved Path:", inputPath);
    setDialogSetting(false);
  };

  const handleResetPath = () => {
    setInputPath(defaultPath);
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={styles.scanIconContainer}>
        <TouchableOpacity onPress={() => router.push("/ScanQR")}>
          <Image source={scanIcon} style={styles.scanIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.settingIconContainer}>
        <TouchableOpacity onPress={() => setDialogSetting(true)}>
          <Image source={settingIcon} style={styles.scanIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={dialogSetting}
        onRequestClose={() => setDialogSetting(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>ตั้งค่าเส้นทาง</Text>
            <TextInput
              style={styles.input}
              value={inputPath}
              onChangeText={setInputPath}
              placeholder="กรอก URL"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSavePath}>
                <Text style={styles.buttonText}>บันทึก</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleResetPath}>
                <Text style={styles.buttonText}>รีเซ็ตค่าเริ่มต้น</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Image source={prontoLogo} style={styles.logo} />
        <Text style={styles.logoTitle}>Pronto</Text>
        <View style={styles.canvasContainer}>
          {imageSource && (
            <TouchableOpacity
              onPress={() => {
                console.log("test");
                router.push(`http://172.20.10.6:5173/${typeItem}`);
              }}
            >
              <Image source={imageSource} style={styles.imageTypeItem} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title}>{typeItem}</Text>
        <Image source={rotateIcon} style={styles.logo} />
        <View style={styles.containerMenuOut}>
          <View style={styles.containerMenuIn}>
            <FlatList
              data={menuIcon}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => {
                    handlePressMenu(item.name);
                  }}
                >
                  <Image source={item.icon} style={styles.iconImage} />
                  <Text style={styles.iconText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  canvasContainer: {
    width: height * 0.3,
    height: height * 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "100%",
  },
  scanIconContainer: {
    position: "absolute",
    top: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    zIndex: 100,
  },
  scanIcon: {
    width: 55,
    height: 55,
  },
  logo: {
    width: 35,
    height: 35,
    margin: 0,
    padding: 0,
  },
  logoTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
    margin: 0,
    padding: 0,
  },
  title: {
    color: "white",
    fontSize: 15,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
    padding: 40,
    borderColor: "#325481",
    borderWidth: 1,
    borderRadius: 10,
  },
  iconText: {
    color: "#012042",
    textAlign: "center",
  },
  containerMenuOut: {
    backgroundColor: "#868686",
    width: width,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopEndRadius: "8%",
    borderTopStartRadius: "8%",
  },
  containerMenuIn: {
    position: "relative",
    top: 0,
    backgroundColor: "#D9D9D9",
    width: width * 0.9,
    borderTopEndRadius: "10%",
    borderTopStartRadius: "10%",
    marginTop: 5,
  },
  imageTypeItem: {
    width: height * 0.3,
    height: height * 0.3,
  },
  settingIconContainer: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    zIndex: 100,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
