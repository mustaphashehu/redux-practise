import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        // get all products (reading)

        getAllProduct: builder.query({
            query: () => '/products',
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

        addNewProduct: builder.mutation({
            query: (newproduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newproduct,
            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: updatedProduct,
            }),
        }),
    })
})

export const { useGetAllProductQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation } = productsApi;