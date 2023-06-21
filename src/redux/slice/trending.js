import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrending = createAsyncThunk(
  "fetchTrending",
  async (value) => {
    const res = await fetch("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc");
    const resolvedData = await Promise.resolve(res.json());
    return { res: resolvedData, value };
  }
);

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    radioName: "repositories",
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.radioName = action?.payload?.value || "repositories";
      state.data = action.payload.res;
    });
  },
});

export default trendingSlice.reducer;
