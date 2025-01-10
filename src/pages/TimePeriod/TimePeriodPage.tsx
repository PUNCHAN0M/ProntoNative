import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyle";
import CardTimePeriod from "../../components/CardTimePeriod";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";


const TimePeriodPage = () => {
  const { typeItem } = useLocalSearchParams<{
    typeItem: string;
    expiredDate: string;
  }>();
  useEffect(() => {
    console.log(typeItem);
  });
  const {
    expiredDate,
    baseDay,
    baseMonth,
    baseYear,
    expiredDay,
    expiredMonth,
    expiredYear,
  } = useLocalSearchParams<{
    expiredDate: string;
    baseDay: string;
    baseMonth: string;
    baseYear: string;
    expiredDay: string;
    expiredMonth: string;
    expiredYear: string;
  }>();
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CardTimePeriod
        title="Time Period"
        model={typeItem}
        baseDay={baseDay}
        baseMonth={baseMonth}
        baseYear={baseYear}
        expiredDay={expiredDay}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
      />
    </View>
  );
};

export default TimePeriodPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 35,
  },
});
