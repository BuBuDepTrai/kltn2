import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

// Async Thunks
export const getUsers = createAsyncThunk(
  "customer/get-customers",
  async (_, thunkAPI) => {
    try {
      return await customerService.getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const blockUser = createAsyncThunk(
  "customer/block-user",
  async (userId, thunkAPI) => {
    try {
      const response = await customerService.blockUser(userId);
      return response;
    } catch (error) {
      console.error("blockUser error:", error);  // Detailed logging
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unblockUser = createAsyncThunk(
  "customer/unblock-user",
  async (userId, thunkAPI) => {
    try {
      const response = await customerService.unblockUser(userId);
      return response;
    } catch (error) {
      console.error("unblockUser error:", error);  // Detailed logging
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "customer/update-user",
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Assuming you store the token in the auth state
      if (!token) throw new Error("No token provided"); // Debugging step
      console.log("Token:", token); // Debugging step
      const response = await customerService.updateUser(user, token);
      return response;
    } catch (error) {
      console.error("updateUser error:", error);  // Detailed logging
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        state.customers = state.customers.map((customer) =>
          customer._id === action.payload._id ? action.payload : customer
        );
      })
      .addCase(blockUser.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(unblockUser.fulfilled, (state, action) => {
        state.customers = state.customers.map((customer) =>
          customer._id === action.payload._id ? action.payload : customer
        );
      })
      .addCase(unblockUser.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.customers = state.customers.map((customer) =>
          customer._id === action.payload._id ? action.payload : customer
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default customerSlice.reducer;
