import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const CardTitle = ({ title ,model}) => {
  return (
    <View style={styles.shadown}>
      <View style={styles.infoPicture}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Image source={model ? model : null} style={styles.image}></Image>
        <Text style={styles.typeTitle}>Coupling Normex</Text>
      </View>
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  infoPicture: {
    backgroundColor: "#D9D9D9",
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    paddingBottom:20
  },
  infoTitle: {
    color: "black",
    fontSize: 18,
    marginBottom: 10,
    fontSize:30,
    fontWeight:"bold",
    color:"#012042",
  },
  shadown: {
    backgroundColor: "gray",
    borderRadius: 40,
    paddingBottom: 10,
  },
  typeTitle:{
    color:"#012042",
    fontSize:15,
    fontWeight:"bold"
  },
  image:{
    height:200,
    width:200
  }
});
