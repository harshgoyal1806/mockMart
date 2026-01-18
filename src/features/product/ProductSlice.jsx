import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async Thunk
export const fetchData = createAsyncThunk(
  "products/fetch",
  async (_, thunkApi) => {
    try {
      const productResponse = await fetch("https://fakestoreapi.com/products");
      const categoryResponse = await fetch("https://fakestoreapi.com/products/categories");

      if (!productResponse.ok || !categoryResponse.ok) {
        throw new Error("Failed to fetch products or categories");
      }

      const productData = await productResponse.json();
      const categoryData = await categoryResponse.json();

      return { productData, categoryData };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    categories: [],
    filterProducts: [],
    allProducts: [],
    error: null,
    loading: false,
  },
  reducers: {
    filterByCategory: (state, action) => {
    const category = action.payload;
    state.filterProducts = state.product.filter(
      (product) => product.category === category
    );
  },
  searchProduct: (state, action) => {
      const value = action.payload.toLowerCase();

      if (value === "") {
        state.product = state.allProducts;
      } else {
        state.product = state.allProducts.filter((item) =>
          item.title.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.productData;
        state.categories = action.payload.categoryData;
        state.filterProducts = action.payload.productData;
        state.allProducts = action.payload.productData;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {filterByCategory,searchProduct} = productSlice.actions;

export default productSlice.reducer;
