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

const Nylon11 = require("@assets/Materials/BracketorMountingArm/Nylon11.png");
const Nylon12 = require("@assets/Materials/BracketorMountingArm/Nylon12.png");
const Bracket = require("@assets/Infomation/BracketorMountingArm/Bracket.png");

const infoDetail = [
  "Nylon 11 (Polyamide 11)",
  "Nylon 11, also known as PA11, is a high-performance thermoplastic polymer derived from renewable resources (castor oil). ",
  "to provide cushioning, vibration damping, and misalignment compensation. ",
  "These elements are typically made from ",
  "synthetic rubber",
  "thermoplastic materials",
  "which exhibit elastic properties—meaning they can stretch and return to their original shape when the force is removed.",
];
const CouplingNormex = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle title="Materials" model={Bracket} modelTitle="Bracket or Mounting Arm" />
        {/* <CardTitle title="infomation" model={CouplingNormexPicture} /> */}
        <View style={styles.detailContainer}>
          <DetailImage image={Nylon11} />
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={Nylon12} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CouplingNormex;

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
