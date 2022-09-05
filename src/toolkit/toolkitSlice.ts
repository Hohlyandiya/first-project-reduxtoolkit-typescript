import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialType {
    count: number
}

const initialState: initialType = {
    count: 0,
}

export const toolkitSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload;
        }
    }
})

export default toolkitSlice.reducer