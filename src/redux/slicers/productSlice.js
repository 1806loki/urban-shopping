import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import fetchProducts from "../../api/fetchProducts";
import {
    getProductsFromCache,
    setProductsToCache
} from "../cache";

const initialState = {
    products: [],
    selectedProduct: null,
    status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
    "product/fetchProducts",
    async (category) => {
        const cachedProducts = getProductsFromCache(category);
        if (cachedProducts) {
            return cachedProducts;
        }

        const response = await fetchProducts(category);
        setProductsToCache(category, response);
        return response;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.products = action.payload;
            });
    },
});


export const {
    clearSelectedProduct
} = productSlice.actions;

export const selectCategoryProducts = (state) => state.product.products;
export const selectTotalItems = (state) => (state.product.products || []).length;

export default productSlice.reducer;