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

const GENEVAwheel = require("@assets/Infomation/GENEVAwheel/GENEVAwheel.png");
const Geewhell2 = require("@assets/Infomation/GENEVAwheel/Geewhell2.png");

const infoDetail = [
  "Possible Applications:",
  "- Watches: Used in mechanical watches for precise movement of the gears.",
  "Features:",
  "  - Film Projectors: Advances film reels one frame at a time. Indexing Tables: Ensures precise positioning of a workpiece in manufacturing.",
  "1.Wheel with Slots:",
  "  - The Geneva wheel typically has evenly spaced slots, which interact with a driving pin on a rotating wheel or crank. Driving Wheel",
  "- A wheel with a pin rotates continuously and engages the slots of the Geneva wheel, causing it to rotate incrementally. Intermittent Motion.",
  "- The mechanism pauses after every step of motion, making it ideal for applications where precise and periodic movement is needed. Locking Mechanism:",
];
const BracketorMountingArm = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardTitle
          title="Information"
          model={GENEVAwheel}
          modelTitle="GENEVAwheel"
        />
        <View style={styles.detailContainer}>
          <DetailText text={infoDetail[0]} type="title" />
          <DetailText text={infoDetail[1]} type="paragraph" />
          <DetailText text={infoDetail[2]} type="paragraph" />
          <DetailImage image={Geewhell2} />
          <DetailText text={infoDetail[3]} type="title" />
          <DetailText text={infoDetail[4]} type="title" />
          <DetailText text={infoDetail[5]} type="paragraph" />
          <DetailText text={infoDetail[6]} type="paragraph" />
          <DetailText text={infoDetail[7]} type="paragraph" />
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
