import { createSlice } from "@reduxjs/toolkit";



interface FD {
    Deposit_Amount: number;
    Interest_Rate: number;
    Investment_Period: number;
    Maturity_Amount: number;
    Total_Interest: number;
    Growth_Percentage: number;
}
const initialState: FD = {
    Deposit_Amount: 0,
    Interest_Rate: 0,
    Investment_Period: 0,
    Maturity_Amount: 0,
    Total_Interest: 0,
    Growth_Percentage: 0,
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
                state.Deposit_Amount = 0;
                state.Interest_Rate = 0;
                state.Investment_Period = 0;
                state.Maturity_Amount = 0;
                state.Total_Interest = 0;
                state.Growth_Percentage = 0;
            },
            Calculate_FD: (state) => {
                let r: number = state.Interest_Rate / 100
                let n: number = state.Investment_Period
                let p: number = state.Deposit_Amount

                let FV: number = p * (Math.pow((1 + r), n))

                state.Maturity_Amount = Number(FV.toFixed(2))

                let Growth: number = Number((((FV - p) / p) * 100).toFixed(2))

                state.Growth_Percentage = Growth

                let Total_Interest: number = Number((FV - p).toFixed(2))

                state.Total_Interest = Total_Interest

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

