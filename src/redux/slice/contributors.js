import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContributors = createAsyncThunk(
  "fetchContributors",
  async (value) => {
    const res = await fetch(
      `https://api.github.com/repos${value}/contributors`
    );
    const resolvedData = await Promise.resolve(res.json());
    return resolvedData;
  }
);

const contributorsSlice = createSlice({
  name: "contributors",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContributors.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchContributors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchContributors.rejected, (state, action) => {
      console.log("err", action.payload);
      state.isError = true;
    });
  },
});

export default contributorsSlice.reducer;
