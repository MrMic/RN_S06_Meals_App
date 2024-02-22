import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  // ______________________________________________________________________
  return (
    <View>
      <Text>MealDetailScreen - MEALID = {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
