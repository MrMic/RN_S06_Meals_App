// NOTE: Use useRoute() hook instead
// import { useRoute } from "@react-navigation/native";

import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  // ________________ NOTE: One can use this hook instead ________________
  // const route = useRoute();

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // ______________________________________________________________________
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      <MealItem
        {...mealItemProps}
        // NOTE: Pass the navigation object to the MealItem component
        // navigation={navigation}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
