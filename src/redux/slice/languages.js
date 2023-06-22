import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLanguages = createAsyncThunk(
  "fetchLanguages",
  async (value) => {
    const res = await fetch(
      `https://api.github.com/repos${value}/languages`
    );
    const resolvedData = await Promise.resolve(res.json());
    return resolvedData;
  }
);

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLanguages.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchLanguages.rejected, (state, action) => {
      console.log("err", action.payload);
      state.isError = true;
    });
  },
});

export default languagesSlice.reducer;
