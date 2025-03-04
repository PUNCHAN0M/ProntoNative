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

const AirCompressorFan = require("@assets/Infomation/AirCompressorFan/AirCompressorFan.png");
const waterpump = require("@assets/Infomation/AirCompressorFan/waterpump.png");


const infoDetail = [
  "Possible Applications:",
  "The Harbor Freight 67487 Air Compressor (21-gallon, 2.5 HP) is suitable for various home, garage, and light-duty workshop applications.",
  "Features:",
  "The Harbor Freight 67487 air compressor is a 21-gallon, 2.5 horsepower (peak) unit capable of delivering 4.7 cubic feet per minute (CFM) at 90 psi. This compressor is suitable for home hobbyist tasks such as operating nail guns and impact wrenches. However, it may struggle to keep up with high-demand tools like grinders, drills, ratchets, and paint sprayers.",
];
const AirCompressorFanInFo = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle
          title="Information"
          model={AirCompressorFan}
          modelTitle="Air Compressor Fan"
        />
        <View style={styles.detailContainer}>
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailImage image={waterpump} />
          <DetailText text={infoDetail[2]} type="title" />
          <DetailText text={infoDetail[3]} type="paragraph" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AirCompressorFanInFo;

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
