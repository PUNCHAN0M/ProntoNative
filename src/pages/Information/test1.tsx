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

const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");
const FullCouplingNormexPicture = require("@assets/Infomation/CouplingNormex/FullCouplingNormex.png");
const PumpsPicture = require("@assets/Infomation/CouplingNormex/Pumps.png");
const CompressorsPicture = require("@assets/Infomation/CouplingNormex/Compressors.png");
const ConveyorsPicture = require("@assets/Infomation/CouplingNormex/Conveyors.png");
const OtherPicture = require("@assets/Infomation/CouplingNormex/Other.png");

const infoDetail = [
  "The Normex coupling ",
  "The Normex coupling is a type of flexible jaw coupling designed to transmit torque between two shafts while accommodating misalignments and dampening vibrations.",
  "It's commonly used in industrial applications like :",
  "1.Pumps",
  "2.Compressors",
  "3.Conveyors",
  "4.Other rotating equipment. ",
  "Key Features of Normex Coupling:",
  "1.Flexibility",
  "2.Vibration Damping",
  "3.Durable Elastomer Inserts",
  "4.Compact Design",
  "5.Easy Maintenance",
  "6.Torque Transmission",
];
const CouplingNormex = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle title="infomation" model={CouplingNormexPicture} />
        {/* <View style={styles.detailContainer}>
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={FullCouplingNormexPicture} />
          <DetailText text={infoDetail[2]} type="paragraph" />
          <DetailText text={infoDetail[3]} type="title" />
          <DetailImage image={PumpsPicture} />
          <DetailText text={infoDetail[4]} type="title" />
          <DetailImage image={CompressorsPicture} />
          <DetailText text={infoDetail[5]} type="title" />
          <DetailImage image={ConveyorsPicture} />
          <DetailText text={infoDetail[6]} type="title" />
          <DetailImage image={OtherPicture} />
          <DetailText text={infoDetail[7]} type="title" />
          <DetailText text={infoDetail[8]} type="paragraph" />
          <DetailText text={infoDetail[9]} type="paragraph" />
          <DetailText text={infoDetail[10]} type="paragraph" />
          <DetailText text={infoDetail[11]} type="paragraph" />
          <DetailText text={infoDetail[12]} type="paragraph" />
          <DetailText text={infoDetail[13]} type="paragraph" />
        </View> */}
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
    paddingBottom:10,
    marginBottom:20
  },
  detailTitle: {
    fontWeight: "bold",
  },
  detailParagraph: {
    paddingLeft: 10,
  },
});
