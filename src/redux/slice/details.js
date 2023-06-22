import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDetails = createAsyncThunk(
  "fetchDetails",
  async (user_name) => {
    const res = await fetch(`https://api.github.com/repos${user_name}`);
    const resolvedData = await Promise.resolve(res.json());
    return resolvedData;
  }
);

const detailsSlice = createSlice({
    name: "details",
    initialState: {
      isLoading: true,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchDetails.pending, (state, action) => {
        state.isLoading = true;
      });

      builder.addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data = action.payload;
      });

      builder.addCase(fetchDetails.rejected, (state, action) => {
        console.log("err", action.payload);
        state.isError = true;
      });
    },
  });
  
  export default detailsSlice.reducer;