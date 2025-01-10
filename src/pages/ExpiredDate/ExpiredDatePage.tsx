import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardExpired from "../../components/CardExpired";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

const ExpiredDatePage = () => {
  const { typeItem, expiredDate } = useLocalSearchParams<{
    typeItem: string;
    expiredDate: string;
  }>();
  useEffect(() => {
    console.log(typeItem);
  });

  return (
    <View style={[globalStyles.container, styles.container]}>
      <CardExpired
        title="Expired date"
        model={typeItem}
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
