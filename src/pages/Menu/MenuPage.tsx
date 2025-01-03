import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import globalStyles from "../../styles/globalStyle";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");
const scanIcon = require("../../assets/scanIcon.png");
const prontoLogo = require("../../assets/ProntoIcon.png");
const rotateIcon = require("../../assets/rotateIcon.png");

// interface MenuProp {
//   typeItem: string;
//   expiredDate: number;
//   timePriod: number;
// }

const MenuPage = () => {
  const menuIcon = [
    { icon: require("../../assets/infoIcon.png"), name: "Information" },
    { icon: require("../../assets/materialIcon.png"), name: "Materials" },
    { icon: require("../../assets/expiredIcon.png"), name: "Expired date" },
    { icon: require("../../assets/timeIcon.png"), name: "Time Period" },
  ];
  const handlePressMenu = (title:string) => {
    console.log(`navigate : ${title}`);

    switch (title) {
      case "Information":
        router.push({
          pathname:"/Information/CouplingNormex",
          params:{
            typeItem:"ComplingNormax",
            expiredDate:10,
            timePriod:10
          }
        })
        break;
      case "Materials":
        router.push({
          pathname:"/Materials/CouplingNormex",
          params:{
            typeItem:"ComplingNormax",
            expiredDate:10,
            timePriod:10
          }
        })
        break;
      case "Expired date":
        router.push({
          pathname:"/Expired/Expired",
          params:{
            typeItem:"ComplingNormax",
            expiredDate:10,
            timePriod:10
          }
        })
        break;
      case "Time Period":
        router.push({
          pathname:"/TimePeriod/TimePeriod",
          params:{
            typeItem:"ComplingNormax",
            expiredDate:10,
            timePriod:10
          }
        })
        break;
      default:
        console.log("No matching screen found.");
        break;
    }
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={styles.scanIconContainer}>
        <TouchableOpacity onPress={() => router.push('/ScanQR')}>
          <Image source={scanIcon} style={styles.scanIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={prontoLogo} style={styles.logo} />
        <Text style={styles.logoTitle}>Pronto</Text>
        <View style={styles.canvasContainer}></View>
        <Text style={styles.title}>Coupling Normex</Text>
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
    width: width,
    height: height * 0.3,
    backgroundColor: "red",
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
});
