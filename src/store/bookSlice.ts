import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../config";
import { Book } from "../interface/Book";

interface BookState {
  books: Book[] | null;
  loading: boolean;
  errors: [] | null;
}
const initialState: BookState = {
  books: [],
  loading: false,
  errors: null,
};
export const fetchBooks = createAsyncThunk<Book[]>(
  "book/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/v1/books");
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

const bookSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        // state.errors = action.payload;
      });
  },
});
export default bookSlice.reducer;
