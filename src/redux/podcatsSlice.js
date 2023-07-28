import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  artist: "",
  imageUrl: "",
  summary: "",
};

export const podcatsSlice = createSlice({
  name: "podcats",
  initialState,
  reducers: {
    addPostcast: (state, { payload }) => {
      const { id, title, artist, imageUrl, sumary } = payload;
      state.id = id;
      state.title = title;
      state.artist = artist;
      state.imageUrl = imageUrl;
      state.summary = sumary;
    },
    episodeDetail: (state, { payload }) => {
      const { id } = payload;
      state.id = id;
    },
  },
});

export const { addPostcast, episodeDetail } = podcatsSlice.actions;
export default podcatsSlice.reducer;
