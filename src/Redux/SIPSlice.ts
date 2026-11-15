import { createSlice } from "@reduxjs/toolkit";

type Investment_Frequency_Type = "Monthly" | "Quartely" | "Yearly"

interface SIP_types {
    Monthaly_Investment: string,
    Expected_Return_Rate: string,
    Investment_Period: string,
    Investment_Frequency?: Investment_Frequency_Type,
    Maturity_Amount: string,
    Growth?: string
}

const initialState: SIP_types = {
    Monthaly_Investment: "",
    Expected_Return_Rate: "",
    Investment_Period: "",
    Investment_Frequency: "Yearly",
    Maturity_Amount: "",
    Growth: ""
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
                let r: number = (Number(state.Expected_Return_Rate) / (1200))
                let n: number = Number(state.Investment_Period) * 12

                let FV: number = Number(state.Monthaly_Investment) * ((((Math.pow((1 + r), n)) - 1) / r))

                state.Maturity_Amount = String(Math.floor(FV))
                console.log(FV)

                let Growth: number = ((FV - (Number(state.Monthaly_Investment) * 12 * Number(state.Investment_Period))) / (Number(state.Monthaly_Investment) * 12 * Number(state.Investment_Period))) * 100
                state.Growth = String(Growth.toFixed(2))

            },
            resetSip: (state) => {
                state.Monthaly_Investment = "";
                state.Expected_Return_Rate = ""
                state.Investment_Period = ""
                state.Investment_Frequency = "Yearly"
                state.Maturity_Amount = ""
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