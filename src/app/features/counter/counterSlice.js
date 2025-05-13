import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increament: (state) => {
            state.value += 1;
        },

        decreament: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },

        clear: (state) => {
            state.value = 0;
        }
    },

})

export const { increament, decreament, clear } = counterSlice.actions;
export default counterSlice.reducer;