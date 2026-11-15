import { createSlice } from "@reduxjs/toolkit";

interface Inflation_Type {
    Current_Price: number
    Inflation_Rate: number
    Time_Period: number
    Future_Cost: number
    Price_Increase: number
    Increase_Percentage: number
    Current_Purchasing_Power: number
}

const initialState: Inflation_Type = {
    Current_Price: 0,
    Inflation_Rate: 0,
    Time_Period: 0,
    Future_Cost: 0,
    Price_Increase: 0,
    Increase_Percentage: 0,
    Current_Purchasing_Power: 0,
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
                state.Current_Price = 0
                state.Inflation_Rate = 0
                state.Time_Period = 0
                state.Future_Cost = 0
                state.Price_Increase = 0
                state.Increase_Percentage = 0
                state.Current_Purchasing_Power = 0
            },
            calculate_inflaction: (state) => {
                let p: number = state.Current_Price
                let r: number = state.Inflation_Rate / 100
                let n: number = state.Time_Period

                let FV: number = p * (Math.pow((1 + r), n))

                state.Future_Cost = Math.floor(FV)

                state.Price_Increase = Math.floor(FV - state.Current_Price)
                state.Increase_Percentage = Number((((FV - state.Current_Price) / p) * 100).toFixed(2))

                let Purchasingpower: number = ((p * n) / (Math.pow((1 + r), n)))
                state.Current_Purchasing_Power = Number(Purchasingpower.toFixed(2))

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