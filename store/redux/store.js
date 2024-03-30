import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

// ______________________________________________________________________
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
