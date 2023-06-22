import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBranches = createAsyncThunk(
  "fetchBranches",
  async (value) => {
    const res = await fetch(
      `https://api.github.com/repos${value}/branches`
    );
    const resolvedData = await Promise.resolve(res.json());
    return resolvedData;
  }
);

const branchesSlice = createSlice({
  name: "branches",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBranches.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBranches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchBranches.rejected, (state, action) => {
      console.log("err", action.payload);
      state.isError = true;
    });
  },
});

export default branchesSlice.reducer;
