import { configureStore } from "@reduxjs/toolkit";
import SIPSlice from "./SIPSlice.ts";
import LumpsumSlice from "./LumpsumSclice.ts";
import EMISlice from "./LoanEMISlice.ts";
import CompoundingSlice from "./Compounding.ts";
import FDSlice from "./FDSlice.ts";
import RDSlice from "./RDSlice.ts";
import InflationSlice from "./InflationSlice.ts";
import SWPSLice from "./SWPSlice.ts";






export const store = configureStore(
    {
        reducer: {
            sip: SIPSlice,
            lumpsum: LumpsumSlice,
            EMI: EMISlice,
            compound: CompoundingSlice,
            FD: FDSlice,
            RD: RDSlice,
            Inflation: InflationSlice,
            SWP: SWPSLice
        }

    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


