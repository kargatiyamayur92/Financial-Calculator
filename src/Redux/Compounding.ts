import { createSlice } from "@reduxjs/toolkit";


interface Compounding {
    Principal_Amount: String;
    Interest_Rate: String;
    Investment_Period: String;
    Maturity_Amount: String;
    Compound_Interest: String;
    Growth_Percentage: String;
}
const initialState: Compounding = {
    Principal_Amount: "",
    Interest_Rate: "",
    Investment_Period: "",
    Maturity_Amount: "",
    Compound_Interest: "",
    Growth_Percentage: "",
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
                state.Principal_Amount = ""
                state.Interest_Rate = ""
                state.Investment_Period = ""
                state.Maturity_Amount = ""
                state.Compound_Interest = ""
                state.Growth_Percentage = ""
            },
            Calculate_compounding: (state) => {
                let r: number = Number(state.Interest_Rate) / 100
                let n: number = Number(state.Investment_Period)
                let p: number = Number(state.Principal_Amount)

                let FV: number = p * (Math.pow((1 + r), n))

                state.Maturity_Amount = String(FV.toFixed(2))

                let Growth: String = String((((FV - p) / p) * 100).toFixed(2))

                state.Growth_Percentage = Growth

                let Compound_Interest: String = String((FV - p).toFixed(2))

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

