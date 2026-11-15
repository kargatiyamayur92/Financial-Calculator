import { createSlice } from "@reduxjs/toolkit";

type Investment_Frequency_Type = "Monthly" | "Quartely" | "Yearly"

interface SIP_types {
    Monthaly_Investment: number,
    Expected_Return_Rate: number,
    Investment_Period: number,
    Investment_Frequency?: Investment_Frequency_Type,
    Maturity_Amount: number,
    Growth?: number
}

const initialState: SIP_types = {
    Monthaly_Investment: 0,
    Expected_Return_Rate: 0,
    Investment_Period: 0,
    Investment_Frequency: "Yearly",
    Maturity_Amount: 0,
    Growth: 0
}

export const SIPSlice = createSlice(
    {
        name: "sip",
        initialState: initialState,
        reducers: {
            set_Monthaly_Investment: (state, action) => {
                state.Monthaly_Investment = action.payload
            },
            set_Expected_Return_Rate: (state, action) => {
                state.Expected_Return_Rate = action.payload

            },
            set_Investment_Period: (state, action) => {
                state.Investment_Period = action.payload

            },
            Set_Investment_Frequency: (state, action) => {
                state.Investment_Frequency = action.payload

            },
            CalculateSIP: (state) => {
                let r: number = (state.Expected_Return_Rate / (1200))
                let n: number = state.Investment_Period * 12

                let FV: number = state.Monthaly_Investment * ((((Math.pow((1 + r), n)) - 1) / r))

                state.Maturity_Amount = (Math.floor(FV))
                console.log(FV)

                let Growth: number = ((FV - (state.Monthaly_Investment * 12 * state.Investment_Period)) / (state.Monthaly_Investment * 12 * state.Investment_Period)) * 100
                state.Growth = Number(Growth.toFixed(2))

            },
            resetSip: (state) => {
                state.Monthaly_Investment = 0;
                state.Expected_Return_Rate = 0
                state.Investment_Period = 0
                state.Investment_Frequency = "Yearly"
                state.Maturity_Amount = 0
            }

        }
    }
)

export const {
    set_Monthaly_Investment,
    set_Investment_Period,
    set_Expected_Return_Rate,
    Set_Investment_Frequency,
    CalculateSIP,
    resetSip
} = SIPSlice.actions

export default SIPSlice.reducer