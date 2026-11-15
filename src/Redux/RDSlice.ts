import { createSlice } from "@reduxjs/toolkit";


interface RD_types {
    Monthly_Deposit: string
    Interest_Rate: string
    Investment_Period: string
    Maturity_Amount: string
    Total_Investment: string
    Total_Interest: string
}

const initialState: RD_types = {
    Monthly_Deposit: "",
    Interest_Rate: "",
    Investment_Period: "",
    Maturity_Amount: "",
    Total_Investment: "",
    Total_Interest: "",
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
                let p: number = Number(state.Monthly_Deposit)
                let r: number = (Number(state.Interest_Rate) / (1200))
                let n: number = Number(state.Investment_Period)

                let FV: number = p * ((Math.pow((1 + r), n) - 1) / r) * (1 + r)

                state.Maturity_Amount = String(Math.floor(FV))
                //console.log(FV)

                let Total_Interest: number = FV - (p * Number(state.Investment_Period))

                state.Total_Interest = String(Total_Interest.toFixed(2))
                state.Total_Investment = String(p * Number(state.Investment_Period))

            },
            resetRD: (state) => {
                state.Monthly_Deposit = ""
                state.Interest_Rate = ""
                state.Investment_Period = ""
                state.Maturity_Amount = ""
                state.Total_Investment = ""
                state.Total_Interest = ""
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