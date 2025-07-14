// store/favoriteVacanciesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    addToFavoriteVacancies,
    removeFromFavoriteVacancies,
    getUserFavoriteVacancies
} from "../services/userService";

export const fetchFavorites = createAsyncThunk(
    "favorites/fetchFavorites",
    async () => {
        const response = await getUserFavoriteVacancies();
        return response;
    }
);

export const toggleFavorite = createAsyncThunk(
    "favorites/toggleFavorite",
    async ({ vacancy, isCurrentlyFavorite }) => {
        if (isCurrentlyFavorite) {
            await removeFromFavoriteVacancies(vacancy.id);
            window.location.reload();
            return { vacancyId: vacancy.id, remove: true };
        } else {
            await addToFavoriteVacancies(vacancy.id);
            return { vacancy, remove: false };
        }
    }
);

const favoriteVacanciesSlice = createSlice({
    name: "favorites",
    initialState: {
        items: [],
        isLoaded: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoaded = true;
            })
            .addCase(toggleFavorite.fulfilled, (state, action) => {
                if (action.payload.remove) {
                    state.items = state.items.filter(v => v.id !== action.payload.vacancyId);
                } else {
                    state.items.push(action.payload.vacancy);
                }
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export default favoriteVacanciesSlice.reducer;
