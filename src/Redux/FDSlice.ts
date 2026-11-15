import { createSlice } from "@reduxjs/toolkit";



interface FD {
    Deposit_Amount: string
    Interest_Rate: string
    Investment_Period: string
    Maturity_Amount: string
    Total_Interest: string
    Growth_Percentage: string
}
const initialState: FD = {
    Deposit_Amount: "",
    Interest_Rate: "",
    Investment_Period: "",
    Maturity_Amount: "",
    Total_Interest: "",
    Growth_Percentage: "",
}

export const FDSlice = createSlice(
    {
        name: "FD",
        initialState: initialState,
        reducers: {
            Set_Deposit_Amount: (state, action) => {
                state.Deposit_Amount = action.payload
            },
            Set_Interest_Rate: (state, action) => {
                state.Interest_Rate = action.payload
            },
            Set_Investment_Period: (state, action) => {
                state.Investment_Period = action.payload
            },

            resetFd: (state) => {
                state.Deposit_Amount = ""
                state.Interest_Rate = ""
                state.Investment_Period = ""
                state.Maturity_Amount = ""
                state.Total_Interest = ""
                state.Growth_Percentage = ""
            },
            Calculate_FD: (state) => {
                let r: number = Number(state.Interest_Rate) / 100
                let n: number = Number(state.Investment_Period)
                let p: number = Number(state.Deposit_Amount)

                let FV: number = p * (Math.pow((1 + r), n))

                state.Maturity_Amount = String(FV.toFixed(2))

                let Growth: number = Number((((FV - p) / p) * 100).toFixed(2))

                state.Growth_Percentage = String(Growth)

                let Total_Interest: number = Number((FV - p).toFixed(2))

                state.Total_Interest = String(Total_Interest)

            }
        }
    }
)

export const {
    Set_Deposit_Amount,
    Set_Interest_Rate,
    Set_Investment_Period,
    Calculate_FD,
    resetFd
} = FDSlice.actions

export default FDSlice.reducer

