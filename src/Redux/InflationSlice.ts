import { createSlice } from "@reduxjs/toolkit";

interface Inflation_Type {
    Current_Price: string
    Inflation_Rate: string
    Time_Period: string
    Future_Cost: string
    Price_Increase: string
    Increase_Percentage: string
    Current_Purchasing_Power: string
}

const initialState: Inflation_Type = {
    Current_Price: "",
    Inflation_Rate: "",
    Time_Period: "",
    Future_Cost: "",
    Price_Increase: "",
    Increase_Percentage: "",
    Current_Purchasing_Power: "",
}

export const InflationSlice = createSlice(
    {
        name: "Inflation",
        initialState: initialState,
        reducers: {
            setCurrentPRice: (state, action) => {
                state.Current_Price = action.payload
            },
            setInflation_Rate: (state, action) => {
                state.Inflation_Rate = action.payload
            },
            setTime_Period: (state, action) => {
                state.Time_Period = action.payload
            },
            resetInflation: (state) => {
                state.Current_Price = ""
                state.Inflation_Rate = ""
                state.Time_Period = ""
                state.Future_Cost = ""
                state.Price_Increase = ""
                state.Increase_Percentage = ""
                state.Current_Purchasing_Power = ""
            },
            calculate_inflaction: (state) => {
                let p: number = Number(state.Current_Price)
                let r: number = Number(state.Inflation_Rate) / 100
                let n: number = Number(state.Time_Period)

                let FV: number = p * (Math.pow((1 + r), n))

                state.Future_Cost = String(Math.floor(FV))

                state.Price_Increase = String(Math.floor(FV - Number(state.Current_Price)))
                state.Increase_Percentage = String((((FV - Number(state.Current_Price)) / p) * 100).toFixed(2))

                let Purchasingpower: number = ((p * n) / (Math.pow((1 + r), n)))
                state.Current_Purchasing_Power = String(Purchasingpower.toFixed(2))

            }
        }
    }
)

export const {
    setCurrentPRice,
    setInflation_Rate,
    setTime_Period,
    calculate_inflaction,
    resetInflation
} = InflationSlice.actions

export default InflationSlice.reducer