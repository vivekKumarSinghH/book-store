import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createBook = createAsyncThunk(
  "book/createBook",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createBook(formValue);
      toast.success("Book Added Successfully");
      // console.log(response.data)
      // navigate("/");

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getBooks();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getTour = createAsyncThunk(
//   "tour/getTour",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await api.getTour(id);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );




// export const deleteTour = createAsyncThunk(
//   "tour/deleteTour",
//   async ({ id, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.deleteTour(id);
//       toast.success("Tour Deleted Successfully");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const updateTour = createAsyncThunk(
//   "tour/updateTour",
//   async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await api.updateTour(updatedTourData, id);
//       toast.success("Tour Updated Successfully");
//       navigate("/");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const searchTours = createAsyncThunk(
//   "tour/searchTours",
//   async (searchQuery, { rejectWithValue }) => {
//     try {
//       const response = await api.getToursBySearch(searchQuery);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );



const tourSlice = createSlice({
  name: "book",
  initialState: {
    book: {},
    books: [],
    // currentPage: 1,
    // numberOfPages: null,
    error: "",
    loading: false,
  },
  // reducers: {
  //   setCurrentPage: (state, action) => {
  //     state.currentPage = action.payload;
  //   },
  // },
  extraReducers: {
    [createBook.pending]: (state, action) => {
      state.loading = true;
    },
    [createBook.fulfilled]: (state, action) => {
      state.loading = false;
      // state.tours = [action.payload];
    },
    [createBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
    
      state.books = action.payload.data;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },


    
      // state.numberOfPages = action.payload.numberOfPages;
      // state.currentPage = action.payload.currentPage;
    
    
    
   
    // [deleteTour.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [deleteTour.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   // console.log(action)
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userTours = state.userTours.filter((item) => item._id !== id);
    //     state.tours = state.tours.filter((item) => item._id !== id);
    //   }
    // },
    // [deleteTour.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
    // [updateTour.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [updateTour.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userTours = state.userTours.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //     state.tours = state.tours.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //   }
    // },
    // [updateTour.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  
    // [searchTours.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [searchTours.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.tours = action.payload;
    // },
    // [searchTours.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
    
    
  },
});

// export const { setCurrentPage } = tourSlice.actions;

export default tourSlice.reducer;