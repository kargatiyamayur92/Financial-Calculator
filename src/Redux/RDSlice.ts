import { createSlice } from "@reduxjs/toolkit";


interface RD_types {
    Monthly_Deposit: number
    Interest_Rate: number
    Investment_Period: number
    Maturity_Amount: number
    Total_Investment: number
    Total_Interest: number
}

const initialState: RD_types = {
    Monthly_Deposit: 0,
    Interest_Rate: 0,
    Investment_Period: 0,
    Maturity_Amount: 0,
    Total_Investment: 0,
    Total_Interest: 0,
}

export const RDSlice = createSlice(
    {
        name: "RD",
        initialState: initialState,
        reducers: {
            set_Monthaly_Deposit: (state, action) => {
                state.Monthly_Deposit = action.payload
            },
            set_Expected_Return_Rate: (state, action) => {
                state.Interest_Rate = action.payload

            },
            set_Investment_Period: (state, action) => {
                state.Investment_Period = action.payload

            },
            Calculate_RD: (state) => {
                let p: number = state.Monthly_Deposit
                let r: number = (state.Interest_Rate / (1200))
                let n: number = state.Investment_Period

                let FV: number = p * ((Math.pow((1 + r), n) - 1) / r) * (1 + r)

                state.Maturity_Amount = (Math.floor(FV))
                //console.log(FV)

                let Total_Interest: number = FV - (p* state.Investment_Period)

                state.Total_Interest = Number(Total_Interest.toFixed(2))
                state.Total_Investment = p * state.Investment_Period

            },
            resetRD: (state) => {
                state.Monthly_Deposit = 0
                state.Interest_Rate = 0
                state.Investment_Period = 0
                state.Maturity_Amount = 0
                state.Total_Investment = 0
                state.Total_Interest = 0
            }

        }
    }
)

export const {
    set_Monthaly_Deposit,
    set_Investment_Period,
    set_Expected_Return_Rate,
    Calculate_RD,
    resetRD
} = RDSlice.actions

export default RDSlice.reducer