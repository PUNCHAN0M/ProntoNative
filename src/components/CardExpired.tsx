import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

const { width, height } = Dimensions.get("screen");

interface CardExpiredProps {
  title: string;
  model: any;
  usedTime: string;
}
const CardExpired: React.FC<CardExpiredProps> = ({
  title,
  model,
  usedTime,
}) => {
  // ขนาดของวงกลม (เช่น ขนาดของกราฟ)
  const timeUsed = Math.min(Math.max(Number(usedTime) || 0, 0), 100);
  const radius = 70; // ปรับขนาดของวงกลม
  const strokeWidth = 20; // เพิ่มขนาด stroke ใหญ่ขึ้น
  const circumference = 2 * Math.PI * radius;
  const progress = (timeUsed / 100) * circumference;

  // ฟังก์ชันเพื่อกำหนดเงื่อนไขที่แสดงขึ้นตาม timeUsed
  const getConditionText = () => {
    if (timeUsed >= 90) {
      return "100-90% in ideal conditions";
    } else if (timeUsed >= 80) {
      return "80-90% in moderately challenging conditions";
    } else if (timeUsed >= 50) {
      return "50-70% in demanding conditions";
    } else {
      return "Less than 50% in poor or harsh conditions";
    }
  };

  return (
    <View style={styles.shadown}>
      <View style={styles.infoPicture}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Image source={model ? model : null} style={styles.image}></Image>
        <Text style={styles.typeTitle}>Coupling Normex</Text>
        <View style={styles.containerInner}>
          {/* Graph */}
          <View style={styles.graphContainer}>
            <Svg viewBox="0 0 200 200" style={styles.circleContainer}>
              {/* Background Circle */}
              <Circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#e0e0e0"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Foreground Circle (Progress Circle) */}
              <Circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#A2594D"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
              />
              {/* Text in the center of the circle */}
              <SvgText
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="18"
                fontWeight="bold"
                fill="#012042"
              >
                {timeUsed}%
              </SvgText>
            </Svg>
          </View>

          <View style={styles.cardInner}>
            <Text style={styles.conditionTitle}>Used Time {timeUsed}%</Text>
            <Text style={styles.conditionText}>{getConditionText()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardExpired;

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
    fontSize: 30,
    fontWeight: "bold",
    color: "#012042",
    marginBottom: 10,
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
  cardInner: {},
  graphContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 180, // เพิ่มขนาดเพื่อให้กราฟไม่หลุดขอบ
    height: 180, // เพิ่มขนาดเพื่อให้กราฟไม่หลุดขอบ
    margin: 0,
    padding: 0,
  },
  circleContainer: {
    width: 200, // เพิ่มขนาดเพื่อให้กราฟไม่หลุดขอบ
    height: 200, // เพิ่มขนาดเพื่อให้กราฟไม่หลุดขอบ
    padding: 20,
    margin: 30,
  },
  conditionTitle: {
    fontSize: 14,
    color: "#012042",
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  conditionText: {
    fontSize: 14,
    color: "#012042",
    marginTop: 15,
    textAlign: "center",
    fontWeight: "black",
  },
  containerInner: {
    backgroundColor: "#C0BDBD",
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
