import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommits = createAsyncThunk(
  "fetchCommits",
  async (value) => {
    const res = await fetch(
      `https://api.github.com/repos${value}/commits`
    );
    const resolvedData = await Promise.resolve(res.json());
    return resolvedData;
  }
);

const commitsSlice = createSlice({
  name: "commits",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommits.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCommits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchCommits.rejected, (state, action) => {
      console.log("err", action.payload);
      state.isError = true;
    });
  },
});

export default commitsSlice.reducer;
