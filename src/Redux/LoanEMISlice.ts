import { createSlice } from "@reduxjs/toolkit";

interface EMI {
    Loan_Amount: number,
    Interest_Rate: number,
    Loan_Tenure: number,
    Monthly_EMI: number,
    Total_Interest: number,
    Total_Payment: number
}

const initialState: EMI = {
    Loan_Amount: 0,
    Interest_Rate: 0,
    Loan_Tenure: 0,
    Monthly_EMI: 0,
    Total_Interest: 0,
    Total_Payment: 0,
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
                state.Loan_Amount = 0;
                state.Interest_Rate = 0;
                state.Loan_Tenure = 0;
                state.Monthly_EMI = 0;
                state.Total_Interest = 0;
                state.Total_Payment = 0;
            },
            CalculateEMI: (state) => {
                let p: number = state.Loan_Amount
                let r: number = state.Interest_Rate / 1200
                let n: number = state.Loan_Tenure*12

                let EMI: number = (p * r * (Math.pow((1 + r), n))) / (Math.pow((1 + r), n) - 1)

                state.Monthly_EMI = Number(EMI.toFixed(2))
                state.Total_Payment = Number((EMI*n).toFixed(2))
                state.Total_Interest = Number((state.Total_Payment-p).toFixed(2))
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
