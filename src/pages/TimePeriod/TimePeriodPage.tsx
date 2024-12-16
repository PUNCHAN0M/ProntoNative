import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardTimePeriod from "../../components/CardTimePeriod";

const CouplingNormexPicture = require("../../assets/Infomation/CouplingNormex/CouplingNormex.png");

const TimePeriodPage = ({ navigation }) => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CardTimePeriod title="infomation" model={CouplingNormexPicture} ></CardTimePeriod>
    </View>
  );
};

export default TimePeriodPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30, 
  }
});
