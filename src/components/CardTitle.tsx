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

interface CardTitleProps {
  title?: string;
  model: any;
  modelTitle: string;
}

const CardTitle:React.FC<CardTitleProps> = ({ title ,model,modelTitle}) => {
  return (
    <View style={styles.shadown}>
      <View style={styles.infoPicture}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Image source={model ? model : null} style={styles.image}></Image>
        <Text style={styles.typeTitle}>{modelTitle}</Text>
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
    marginTop:20,
    marginVertical: 10,
    fontWeight:"bold",
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
