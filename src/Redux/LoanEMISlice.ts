import { createSlice } from "@reduxjs/toolkit";

interface EMI {
    Loan_Amount: string
    Interest_Rate: string
    Loan_Tenure: string
    Monthly_EMI: string
    Total_Interest: string
    Total_Payment: string
}

const initialState: EMI = {
    Loan_Amount: "",
    Interest_Rate: "",
    Loan_Tenure: "",
    Monthly_EMI: "",
    Total_Interest: "",
    Total_Payment: "",
}


export const EMISlice = createSlice(
    {
        name: "EMI",
        initialState: initialState,
        reducers: {
            set_Loan_Amount: (state, action) => {
                state.Loan_Amount = action.payload
            },
            set_Interest_Rate: (state, action) => {
                state.Interest_Rate = action.payload
            },
            set_Loan_Tenure: (state, action) => {
                state.Loan_Tenure = action.payload
            },
            resetEmi: (state) => {
                state.Loan_Amount = ""
                state.Interest_Rate = ""
                state.Loan_Tenure = ""
                state.Monthly_EMI = ""
                state.Total_Interest = ""
                state.Total_Payment = ""
            },
            CalculateEMI: (state) => {
                let p: number = Number(state.Loan_Amount)
                let r: number = Number(state.Interest_Rate) / 1200
                let n: number = Number(state.Loan_Tenure) * 12

                let EMI: number = (p * r * (Math.pow((1 + r), n))) / (Math.pow((1 + r), n) - 1)

                state.Monthly_EMI = String(EMI.toFixed(2))
                state.Total_Payment = String((EMI * n).toFixed(2))
                state.Total_Interest = String((Number(state.Total_Payment) - p).toFixed(2))
                console.log(EMI)
            }
        }
    }
)

export const {
    set_Loan_Amount,
    set_Interest_Rate,
    set_Loan_Tenure,
    CalculateEMI,
    resetEmi
} = EMISlice.actions
export default EMISlice.reducer
