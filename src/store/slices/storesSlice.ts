// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "services/axiosInstance";

const initialState = {
  storeLoading: false,
  storeBrands: [],
};

// start get store brands action
// export const getStoreBrands = createAsyncThunk(
//   "stores/getStoreBrands",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const res = await Axios({
//         method: "GET",
//         path: "storeSectorBrands",
//       });
//       console.log("getStoreBrands DATA ::: ", res?.data);
//       return res?.data;
//     } catch (error) {
//       let errorRes = error?.response?.data;
//       console.log("getStoreBrands Error: " + JSON.stringify(errorRes));
//       return rejectWithValue(errorRes);
//     }
//   }
// );
// end get store brands action
//---------------------------------------------------

const storesSlice = createSlice({
  name: "stores",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Start get store brands reducer
    // builder
    //   .addCase(getStoreBrands.pending, (state) => {
    //     state.storeLoading = true;
    //   })
    //   .addCase(getStoreBrands.fulfilled, (state, action) => {
    //     state.storeLoading = false;
    //     state.storeBrands = action.payload;
    //   })
    //   .addCase(getStoreBrands.rejected, (state, action) => {
    //     state.storeLoading = false;
    //   });
    // end get store brands reducer
  },
});

export default storesSlice.reducer;
