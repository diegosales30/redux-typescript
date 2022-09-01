import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
  name: string;
  favorite: false;
}

const INITIAL_STATE: Languages[] = [
  { name: "JAVASCRIPT", favorite: false },
  { name: "JAVA", favorite: false },
];

const languageSlisce = createSlice({
  name: "language",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages: (state, { payload }: PayloadAction<string>) => {
      //action desconstruido pegando p
      return [...state, { name: payload, favorite: false }];
    },
    removeLanguages: (state, { payload }: PayloadAction<number>) => {
      return state.filter((_, index) => index !== payload);
    },
    toFavorite: (state, { payload }: PayloadAction<number>) => {
      return state.map((current, index) =>
        index === payload
          ? { ...current, favorite: !current.favorite }
          : current
      );
    },
  },
});

export default languageSlisce.reducer;
export const { addLanguages, removeLanguages, toFavorite } =
  languageSlisce.actions;

//seletor opcional
// export const useLanguage = (state: any) => {
//     return state.languages as Languages[];
// }

//importar o useLanguages dentro do useSelecor no lugar do state.languages
