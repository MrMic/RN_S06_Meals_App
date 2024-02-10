// HACK: Use useRoute() hook instead
// import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  // ________________ HACK: One can use this hook instead ________________
  // const route = useRoute();

  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen {catId}</Text>
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
