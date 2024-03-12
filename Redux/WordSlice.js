import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addNewWord: (state, action) => {
      const newWord = {
        id: action.payload.id,
        en: action.payload.en,
        tr: action.payload.tr,
      };
      return { words: [...state.words, newWord] };
    },
    deleteWord: (state, action) => {
      const newArray = state.words.filter((item) => item.id !== action.payload);
      return { words: newArray };
    },
  },
});

export const { addNewWord, deleteWord } = wordSlice.actions;
export default wordSlice.reducer;
