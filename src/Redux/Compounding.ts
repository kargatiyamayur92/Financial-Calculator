import { createSlice } from "@reduxjs/toolkit";


interface Compounding {
    Principal_Amount: number;
    Interest_Rate: number;
    Investment_Period: number;
    Maturity_Amount: number;
    Compound_Interest: number;
    Growth_Percentage: number;
}
const initialState: Compounding = {
    Principal_Amount: 0,
    Interest_Rate: 0,
    Investment_Period: 0,
    Maturity_Amount: 0,
    Compound_Interest: 0,
    Growth_Percentage: 0,
}

export const CompoundingSlice = createSlice(
    {
        name: "compounding",
        initialState: initialState,
        reducers: {
            Set_Principal_Amount: (state, action) => {
                state.Principal_Amount = action.payload
            },
            Set_Interest_Rate: (state, action) => {
                state.Interest_Rate = action.payload
            },
            Set_Investment_Period: (state, action) => {
                state.Investment_Period = action.payload
            },

            resetCompound: (state) => {
                state.Principal_Amount = 0;
                state.Interest_Rate = 0;
                state.Investment_Period = 0;
                state.Maturity_Amount = 0;
                state.Compound_Interest = 0;
                state.Growth_Percentage = 0;
            },
            Calculate_compounding: (state) => {
                let r: number = state.Interest_Rate / 100
                let n: number = state.Investment_Period
                let p: number = state.Principal_Amount

                let FV: number = p * (Math.pow((1 + r), n))

                state.Maturity_Amount = Number(FV.toFixed(2))

                let Growth: number = Number((((FV - p) / p) * 100).toFixed(2))

                state.Growth_Percentage = Growth

                let Compound_Interest: number = Number((FV - p).toFixed(2))

                state.Compound_Interest = Compound_Interest

            }
        }
    }
)

export const {
    Set_Principal_Amount,
    Set_Interest_Rate,
    Set_Investment_Period,
    Calculate_compounding,
    resetCompound
} = CompoundingSlice.actions

export default CompoundingSlice.reducer

