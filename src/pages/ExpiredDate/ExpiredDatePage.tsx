import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardExpired from "../../components/CardExpired";

const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");

const ExpiredDatePage = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CardExpired
        title="infomation"
        model={CouplingNormexPicture}
        usedTime={51}
      />
    </View>
  );
};

export default ExpiredDatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
});
