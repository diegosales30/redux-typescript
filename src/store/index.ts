import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./feature/languageSlice";

const store = configureStore({
  reducer: {
    languages: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
