import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

// ______________________________________________________________________
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
