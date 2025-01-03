import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardExpired from "../../components/CardExpired";
import { useLocalSearchParams } from "expo-router";

const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");

const ExpiredDatePage = () => {
  const { expiredDate } = useLocalSearchParams<{ expiredDate: string }>();
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CardExpired
        title="Expired date"
        model={CouplingNormexPicture}
        usedTime={expiredDate}
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
