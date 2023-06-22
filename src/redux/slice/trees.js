import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrees = createAsyncThunk("fetchtrees", async (path) => {
  const res = await fetch(path);
  const resolvedData = await Promise.resolve(res.json());
  return resolvedData;
});

const treesSlice = createSlice({
  name: "trees",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrees.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTrees.rejected, (state, action) => {
      console.log("err", action.payload);
      state.isError = true;
    });
  },
});

export default treesSlice.reducer;
