import { createSlice } from "@reduxjs/toolkit"

interface SWP_type {
    Initial_Investment: string
    Monthly_Withdrawal: string
    Expected_Return_Rate: string
    Investment_Period: string
    Total_Withdrawn: string
    Remaining_Balance: string
    Total_Value: string
}

const initialState: SWP_type = {
    Initial_Investment: "",
    Monthly_Withdrawal: "",
    Expected_Return_Rate: "",
    Investment_Period: "",
    Total_Withdrawn: "",
    Remaining_Balance: "",
    Total_Value: "",
}

export const SWPSLice = createSlice(
    {
        name: "SWP",
        initialState: initialState,
        reducers: {
            set_Initial_Investment: (state, action) => {
                state.Initial_Investment = action.payload
            },
            set_Monthly_Withdrawal: (state, action) => {
                state.Monthly_Withdrawal = action.payload
            },
            set_Expected_Return_Rate: (state, action) => {
                state.Expected_Return_Rate = action.payload
            },
            set_Investment_Period: (state, action) => {
                state.Investment_Period = action.payload
            },
            resetSwp: (state) => {
                state.Initial_Investment = ""
                state.Monthly_Withdrawal = ""
                state.Expected_Return_Rate = ""
                state.Investment_Period = ""
                state.Total_Withdrawn = ""
                state.Remaining_Balance = ""
                state.Total_Value = ""
            },
            calculate_SWP: (state) => {
                let p: number = Number(state.Initial_Investment)
                let w: number = Number(state.Monthly_Withdrawal)
                let n: number = Number(state.Investment_Period) * 12
                let r: number = Number(state.Expected_Return_Rate) / 1200

                let FV: number = Number(p * (Math.pow((1 + r), n)) - (w * (Math.pow((1 + r), n) - 1) / r))

                state.Remaining_Balance = String(Math.floor(FV))
                state.Total_Withdrawn = String((w * n).toFixed(2))
                state.Total_Value = String(Number(state.Total_Withdrawn) + Number(state.Remaining_Balance))

            }
        }

    }
)

export const {
    set_Initial_Investment,
    set_Monthly_Withdrawal,
    set_Expected_Return_Rate,
    set_Investment_Period,
    calculate_SWP,
    resetSwp
} = SWPSLice.actions

export default SWPSLice.reducer