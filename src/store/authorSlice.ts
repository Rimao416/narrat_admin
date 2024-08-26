import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../config";
import { Author } from "../interface/Author";

interface AuthorState {
  authors: Author[] | null;
  loading: boolean;
  errors: [] | null;
}

const initialState: AuthorState = {
  authors: [],
  loading: false,
  errors: null,
};

export const fetchAuthors = createAsyncThunk<Author[]>(
  "author/fetchAuthors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/v1/authors");
        // console.log(response);
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addAuthors=createAsyncThunk<Author,any>(
  "author/addAuthor",
  async(data,thunkAPI)=>{
    try {
      const response=await API.post("/api/v1/authors",data); 
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state) => {
        state.loading = false;
        // state.errors = action.payload;
      });
  },
});

export default authorSlice.reducer;