import { configureStore } from "@reduxjs/toolkit";
import favoriteVacanciesReducer from "./favoriteVacanciesSlice";

export const store = configureStore({
    reducer: {
        favorites: favoriteVacanciesReducer,
    },
});