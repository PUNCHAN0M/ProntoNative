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

const Bracket = require("@assets/Infomation/BracketorMountingArm/Bracket.png");
const BracketInfo1 = require("@assets/Infomation/BracketorMountingArm/BracketInfo1.png");

const infoDetail = [
  "Possible Applications:",
  "- Used in machinery or structures to support or attach other parts.- Could be used for rotational components (due to the hole, which seems intended for a shaft, pin, or bolt)",
  "Features:",
  "1.Flat Base with Cutouts:",
  "  - Provides stability and can be bolted or welded to another surface.",
  "  - The cutouts could help reduce weight or allow for another part to slide through",
  "2.Inclined Section with Circular Hole:",
  "- The inclined section adds rigidity to the structure.",
  "- The hole may act as a pivot or mounting point for a cylindrical component.",
  "3.Chamfers and Dimensions:",
  "- The dimensions and chamfers (angled edges) improve accuracy and prevent stress concentrations during assembly.",
];
const BracketorMountingArm = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle title="Information" model={Bracket} modelTitle="Bracket or Mounting Arm"/>
        <View style={styles.detailContainer}>
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={BracketInfo1} />
          <DetailText text={infoDetail[2]} type="title" />
          <DetailText text={infoDetail[3]} type="title" />
          <DetailText text={infoDetail[4]} type="paragraph" />
          <DetailText text={infoDetail[5]} type="paragraph" />
          <DetailText text={infoDetail[6]} type="title" />
          <DetailText text={infoDetail[7]} type="paragraph" />
          <DetailText text={infoDetail[8]} type="paragraph" />
          <DetailText text={infoDetail[9]} type="title" />
          <DetailText text={infoDetail[10]} type="paragraph" />
        </View>
      </ScrollView>
    </View>
  );
};

export default BracketorMountingArm;

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
    paddingBottom: 10,
    marginBottom: 20,
  },
  detailTitle: {
    fontWeight: "bold",
  },
  detailParagraph: {
    paddingLeft: 10,
  },
});
