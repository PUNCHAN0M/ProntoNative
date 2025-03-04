import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardTitle from "@/src/components/CardTitle";
import DetailText from "@/src/components/DetailText";
import DetailImage from "@/src/components/DetailImage";

const { width, height } = Dimensions.get("window");
const AirCompressorFanPic = require("@assets/Infomation/AirCompressorFan/AirCompressorFan.png");
const BasePlatewithBracket = require("@assets/Infomation/BasePlatewithBracket/BasePlatewithBracket.png");
const Nylon11 = require("@assets/Materials/BracketorMountingArm/Nylon11.png");
const Nylon12 = require("@assets/Materials/BracketorMountingArm/Nylon12.png");

const infoDetail = [
  "Nylon 11 (Polyamide 11)",
  "Nylon 11, also known as PA11, is a high-performance thermoplastic polymer derived from renewable resources (castor oil). ",
  "     Key Properties of Nylon 11",
  "Mechanical Strength:",
  "High tensile and impact strength, ideal for parts subject to mechanical stresses.",
  "Ductility:",
  "Nylon 11 is more ductile than Nylon 12, allowing for greater elongation before breaking. This makes it suitable for applications requiring flexibility.",
  "Lightweight:",
  "Offers strength while being lightweight, beneficial for automotive and aerospace applications.",
];
const AirCompressorFan = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle title="Materials" model={AirCompressorFanPic} modelTitle="Air Compressor Fan"/>
        <View style={styles.detailContainer}>
          <DetailImage image={Nylon11} />
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={Nylon12} />
          <DetailText text={infoDetail[2]} type="title" />
          <DetailText text={infoDetail[3]} type="title" />
          <DetailText text={infoDetail[4]} type="paragraph" />
          <DetailText text={infoDetail[5]} type="title" />
          <DetailText text={infoDetail[6]} type="paragraph" />
          <DetailText text={infoDetail[7]} type="title" />
          <DetailText text={infoDetail[8]} type="paragraph" />

        </View>
      </ScrollView>
    </View>
  );
};

export default AirCompressorFan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  infoPicture: {
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.8,
  },
  infoTitle: {
    color: "white",
  },
  detailContainer: {
    backgroundColor: "#D9D9D9",
    width: width * 0.8,
    marginTop: 30,
    padding: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  detailTitle: {
    fontWeight: "bold",
  },
  detailParagraph: {
    paddingLeft: 10,
  },
});
