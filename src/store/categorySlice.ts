import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../config";
import { Category } from "../interface/Category";
// import { createSlice } from "@reduxjs/toolkit";
interface CategoryState {
  categories: Category[] | null;
  loading: boolean;
  errors: [] | null;
}
const initialState: CategoryState = {
  categories: [],
  loading: false,
  errors: null,
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/v1/categories");
      //   console.log(response);
      return response.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        // state.errors = action.payload;
      });
  },
});

export default categorySlice.reducer;
