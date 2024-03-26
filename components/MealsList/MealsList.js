import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

// ══════════════════════════════════════════════════════════════════════
function MealsList({ items }) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

// ______________________________________________________________________
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
