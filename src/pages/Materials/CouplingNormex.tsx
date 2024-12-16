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

const CouplingNormexPicture = require("../../assets/Infomation/CouplingNormex/CouplingNormex.png");
const ElastomericPicture = require("../../assets/Materials/CouplingNormex/Elastomeric.png");
const Full4CouplingNormexPicture = require("../../assets/Materials/CouplingNormex/Full4CouplingNormex.png");
const syntheticrubberPicture = require("../../assets/Materials/CouplingNormex/syntheticrubber.png");
const thermoplasticPicture = require("../../assets/Materials/CouplingNormex/thermoplastic.png");

const infoDetail = [
  "Elastomeric (rubber-like) ",
  "Elastomeric (rubber-like) elements are flexible components commonly used in mechanical couplings such as the Normex coupling",
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
        <CardTitle title="infomation" model={CouplingNormexPicture} />
        <View style={styles.detailContainer}>
          <DetailImage image={ElastomericPicture} />
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={Full4CouplingNormexPicture} />
          <DetailText text={infoDetail[2]} type="paragraph" />
          <DetailText text={infoDetail[3]} type="paragraph" />
          <DetailText text={infoDetail[4]} type="title" />
          <DetailImage image={syntheticrubberPicture} />
          <DetailText text={infoDetail[5]} type="title" />
          <DetailImage image={thermoplasticPicture} />
          <DetailText text={infoDetail[6]} type="paragraph" />
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
    paddingTop: 30,
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
  },
  detailTitle: {
    fontWeight: "bold",
  },
  detailParagraph: {
    paddingLeft: 10,
  },
});
