import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdmin, loginUser, signupUser } from "../../service/userService";

const initialState = {
  user: null,
};

export const registerUserAsync = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signupUser(
        userData.name,
        userData.email,
        userData.address,
        userData.phone_number,
        userData.birth_of_date,
        userData.gender,
        userData.password,
        userData.avatar
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData.email, userData.password);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAdminAsync = createAsyncThunk(
  "admin/loginAdmin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginAdmin(userData.email, userData.password);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
