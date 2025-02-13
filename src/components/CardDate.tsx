import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
// Renamed the component to follow proper naming conventions
interface CardDateProps {
  title: string;
  day: number;
  month: number;
  year: number;
}
const CardDate: React.FC<CardDateProps> = ({ title, day, month, year }) => {
  return (
    <View style={styles.containerInner}>
      <Text style={styles.titleType}>{title}</Text>
      <View style={styles.containerDate}>
        <View>
          <Text style={[styles.dateFont, { width: 50 }]}>{day}</Text>
        </View>
        <View>
          <Text style={[styles.dateFont, { width: 50 }]}>{month}</Text>
        </View>
        <View>
          <Text style={[styles.dateFont, { width: 75 }]}>{year}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDate;

const styles = StyleSheet.create({
  containerInner: {
    backgroundColor: "#012042",
    padding: 20,
    borderRadius: 25,
    justifyContent: "center",
    width: width * 0.65,
    marginVertical: 15,
  },
  titleType: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  containerDate: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  dateFont: {
    color: "white",
    fontSize: 25,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign:"center",
  },
});
