import React from "react";
import { Text, StyleSheet } from "react-native";

const DetailText = ({ text, type }) => {
  return <Text style={type === "title" ? styles.detailTitle : styles.detailParagraph}>{text}</Text>;
};

export default DetailText;

const styles = StyleSheet.create({
  detailTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  detailParagraph: {
    paddingLeft: 10,
    fontSize: 14,
    marginBottom: 8,
  },
});
