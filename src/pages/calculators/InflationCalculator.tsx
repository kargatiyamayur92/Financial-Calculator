import {

  RotateCcw,
  Calculator,
  
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../Redux/Store";
import {
  calculate_inflaction,
  resetInflation,
  setCurrentPRice,
  setInflation_Rate,
  setTime_Period,
} from "../../Redux/InflationSlice";



export default function InflationCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Current_Price = useSelector<RootState>(
    (state) => state.Inflation.Current_Price,
  );
  const Inflation_Rate = useSelector<RootState>(
    (state) => state.Inflation.Inflation_Rate,
  );
  const Time_Period = useSelector<RootState>(
    (state) => state.Inflation.Time_Period,
  );
  const Future_Cost = useSelector<RootState>(
    (state) => state.Inflation.Future_Cost,
  );
  const Price_Increase = useSelector<RootState>(
    (state) => state.Inflation.Price_Increase,
  );
  const Increase_Percentage = useSelector<RootState>(
    (state) => state.Inflation.Increase_Percentage,
  );
  const Current_Purchasing_Power = useSelector<RootState>(
    (state) => state.Inflation.Current_Purchasing_Power,
  );

  return (
    <div className="page-content calculator-page">
      

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Inflation Calculator</h2>
          <p>Estimate how inflation changes the future cost of money.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-inflation">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Inflation assumptions</h3>
             
            </div>
         
          </div>
          <div className="field-list calculator-fields-inflation">
            <div className="field-group" key="currentAmount">
              <div className="field-label-row">
                <label htmlFor="currentAmount">Current cost / amount</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="currentAmount"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Current_Price)}
                  onChange={(event) =>
                    dispatch(setCurrentPRice(Number(event.target.value)))
                  }
                  placeholder="Enter current cost / amount"
                />
                <span>₹</span>
              </div>
            </div>
            <div className="field-group" key="inflationRate">
              <div className="field-label-row">
                <label htmlFor="inflationRate">Annual inflation rate</label>
                <span className="field-hint">%</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="inflationRate"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Inflation_Rate)}
                  onChange={(event) =>
                    dispatch(setInflation_Rate(Number(event.target.value)))
                  }
                  placeholder="Enter annual inflation rate"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="durationYears">
              <div className="field-label-row">
                <label htmlFor="durationYears">Time period</label>
                <span className="field-hint">Years</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="durationYears"
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Time_Period)}
                  onChange={(event) =>
                    dispatch(setTime_Period(Number(event.target.value)))
                  }
                  placeholder="Enter time period"
                />
                <span>Years</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => {
                dispatch(calculate_inflaction());
              }}
            >
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetInflation())}
            >
              <RotateCcw size={15} /> Reset inputs
            </button>
          </div>
          
        </section>

        <section className="panel result-panel">
          <div className="panel-heading">
            <div>
              <h3>Calculation results</h3>
             
            </div>
           
          </div>
          <div className="result-highlight">
            <span>Future Cost</span>
            <strong>{Number(Future_Cost)}</strong>
            <small>No calculation has been run</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Price Increase</span>
              <strong>{Number(Price_Increase)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Increase Percentage</span>
              <strong>{Number(Increase_Percentage)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Current Purchasing Power</span>
              <strong>{Number(Current_Purchasing_Power)}</strong>
            </div>
          </div>
          
        </section>
      </div>

     
    </div>
  );
}
