import { createSlice } from "@reduxjs/toolkit";

interface Lumpsum_Type {
    Intial_Investment: number,
    Expected_Return_Rate: number,
    duration: number,
    Lumpsum_Amount?: number,
    Growth?: number
}

const initialState: Lumpsum_Type = {
    Intial_Investment: 0,
    Expected_Return_Rate: 0,
    duration: 0,
    Lumpsum_Amount: 0,
    Growth: 0
}

export const LumpsumSlice = createSlice(
    {
        name: "Lumpsum",
        initialState: initialState,
        reducers: {
            set_Intial_Investment(state, action) {
                state.Intial_Investment = action.payload
            },
            set_Expected_Return_Rate(state, action) {
                state.Expected_Return_Rate = action.payload
            },
            set_duration(state, action) {
                state.duration = action.payload
            },
            resetLumpsum: (state) => {
                state.Intial_Investment = 0
                state.Expected_Return_Rate = 0
                state.duration = 0
                state.Lumpsum_Amount = 0
                state.Growth = 0
            },
            calculate_Lumpsum(state) {
                let p: number = state.Intial_Investment
                let r: number = (state.Expected_Return_Rate / 100)

                let FV = p * Math.pow((r + 1), state.duration)

                state.Lumpsum_Amount = Math.floor(FV)

                let Growth=Number(FV)-(state.Intial_Investment)
               
                state.Growth =Number(Growth.toFixed(2))
            }
        }
    }
)

export const { set_Intial_Investment, set_Expected_Return_Rate, set_duration, resetLumpsum,calculate_Lumpsum } = LumpsumSlice.actions

export default LumpsumSlice.reducer