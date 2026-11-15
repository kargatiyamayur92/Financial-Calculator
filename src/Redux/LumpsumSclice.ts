import { createSlice } from "@reduxjs/toolkit";

interface Lumpsum_Type {
    Intial_Investment: string
    Expected_Return_Rate: string
    duration: string
    Lumpsum_Amount?: string
    Growth?: string
}

const initialState: Lumpsum_Type = {
    Intial_Investment: "",
    Expected_Return_Rate: "",
    duration: "",
    Lumpsum_Amount: "",
    Growth: ""
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
                state.Intial_Investment = ""
                state.Expected_Return_Rate = ""
                state.duration = ""
                state.Lumpsum_Amount = ""
                state.Growth = ""
            },
            calculate_Lumpsum(state) {
                let p: number = Number(state.Intial_Investment)
                let r: number = Number(state.Expected_Return_Rate) / 100

                let FV = p * Math.pow((r + 1), Number(state.duration))

                state.Lumpsum_Amount = String(Math.floor(FV))

                let Growth = Number(FV) - Number(state.Intial_Investment)

                state.Growth = String(Growth.toFixed(2))
            }
        }
    }
)

export const { set_Intial_Investment, set_Expected_Return_Rate, set_duration, resetLumpsum, calculate_Lumpsum } = LumpsumSlice.actions

export default LumpsumSlice.reducer