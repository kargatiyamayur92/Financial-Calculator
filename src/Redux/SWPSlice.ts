import { createSlice } from "@reduxjs/toolkit"

interface SWP_type {
    Initial_Investment: number,
    Monthly_Withdrawal: number,
    Expected_Return_Rate: number,
    Investment_Period: number,
    Total_Withdrawn: number,
    Remaining_Balance: number,
    Total_Value: number,
}

const initialState: SWP_type = {
    Initial_Investment: 0,
    Monthly_Withdrawal: 0,
    Expected_Return_Rate: 0,
    Investment_Period: 0,
    Total_Withdrawn: 0,
    Remaining_Balance: 0,
    Total_Value: 0,
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
                state.Initial_Investment = 0,
                    state.Monthly_Withdrawal = 0,
                    state.Expected_Return_Rate = 0,
                    state.Investment_Period = 0,
                    state.Total_Withdrawn = 0,
                    state.Remaining_Balance = 0,
                    state.Total_Value = 0
            },
            calculate_SWP: (state) => {
                let p: number = state.Initial_Investment
                let w: number = state.Monthly_Withdrawal
                let n: number = state.Investment_Period * 12
                let r: number = state.Expected_Return_Rate / 1200

                let FV:number = Number(p * (Math.pow((1 + r), n)) - (w * (Math.pow((1 + r), n) - 1) / r))

                state.Remaining_Balance = Math.floor(FV)
                state.Total_Withdrawn = Number((w * n).toFixed(2))
                state.Total_Value = state.Total_Withdrawn + state.Remaining_Balance

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