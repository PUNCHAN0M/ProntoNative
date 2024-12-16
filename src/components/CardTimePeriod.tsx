import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import CardDate from "./CardDate.js";

const { width, height } = Dimensions.get("screen");

const CardTimePeriod = ({ title, model }) => {
  return (
    <View style={styles.shadown}>
      <View style={styles.infoPicture}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Image source={model ? model : null} style={styles.image}></Image>
        <Text style={styles.typeTitle}>Coupling Normex</Text>
        <View style={styles.containerOuter}>
          <CardDate title="Production Date" day="12" month="12" year="2024" />
          <CardDate title="Production Date" day="12" month="12" year="2024" />
        </View>
      </View>
    </View>
  );
};

export default CardTimePeriod;

const styles = StyleSheet.create({
  infoPicture: {
    backgroundColor: "#D9D9D9",
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    paddingBottom: 20,
  },
  infoTitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    color: "#012042",
  },
  shadown: {
    backgroundColor: "gray",
    borderRadius: 40,
    paddingBottom: 5,
  },
  typeTitle: {
    color: "#012042",
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
  },
  containerInner: {
    backgroundColor: "#C0BDBD",
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerOuter: {
    width: width * 0.7,
    backgroundColor: "#C0BDBD",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius:20,
    marginTop:10
  },
});
