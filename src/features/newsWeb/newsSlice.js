import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homenewsData: [],
  technologynewsData: [],
  sciencenewsData: [],
  wildlifenewsData: [],
  politicsnewsData: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    sethomeNews: (state, action) => {
      state.homenewsData = action.payload
    },
    settechNews: (state, action) => {
      state.technologynewsData = action.payload;
    },
    setscienceNews: (state, action) => {
      state.sciencenewsData = action.payload;
    },
    setwildlifeNews: (state, action) => {
      state.wildlifenewsData = action.payload;
    },
    setpoliticsNews: (state, action) => {
      state.politicsnewsData = action.payload;
    },
  },
});

export const {
  sethomeNews,
  setpoliticsNews,
  setscienceNews,
  settechNews,
  setwildlifeNews,
} = newsSlice.actions;

export default newsSlice.reducer;
