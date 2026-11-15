import {
  RotateCcw,
  Calculator,
  
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
    Calculate_FD,
  resetFd,
  Set_Deposit_Amount,
  Set_Interest_Rate,
  Set_Investment_Period,
} from "../../Redux/FDSlice";



export default function FdCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Deposit_Amount = useSelector<RootState>(
    (state) => state.FD.Deposit_Amount,
  );
  const Interest_Rate = useSelector<RootState>(
    (state) => state.FD.Interest_Rate,
  );
  const Investment_Period = useSelector<RootState>(
    (state) => state.FD.Investment_Period,
  );
  const Maturity_Amount = useSelector<RootState>(
    (state) => state.FD.Maturity_Amount,
  );
  const Total_Interest = useSelector<RootState>(
    (state) => state.FD.Total_Interest,
  );
  const Growth_Percentage = useSelector<RootState>(
    (state) => state.FD.Growth_Percentage,
  );

  return (
    <div className="page-content calculator-page">
     

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Fixed Deposit Calculator</h2>
          <p>Estimate the maturity value of a fixed deposit.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-fd">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Deposit details</h3>
            
            </div>
          
          </div>
          <div className="field-group" key="depositAmount">
            <div className="field-label-row">
              <label htmlFor="depositAmount">Deposit amount</label>
              <span className="field-hint">₹</span>
            </div>
            <div className="input-shell calculator-input-control">
              <input
                id="depositAmount"
                type="text"
                min="0"
                step="any"
                inputMode="decimal"
                value={Number(Deposit_Amount)}
                onChange={(event) =>
                  dispatch(Set_Deposit_Amount(Number(event.target.value)))
                }
                placeholder="Enter deposit amount"
              />
              <span>₹</span>
            </div>
          </div>
          <div className="field-group" key="annualRate">
            <div className="field-label-row">
              <label htmlFor="annualRate">Annual interest rate</label>
              <span className="field-hint">%</span>
            </div>
            <div className="input-shell calculator-input-control">
              <input
                id="annualRate"
                type="text"
                min="0"
                step="any"
                inputMode="decimal"
                value={Number(Interest_Rate)}
                onChange={(event) =>
                  dispatch(Set_Interest_Rate(event.target.value))
                }
                placeholder="Enter annual interest rate"
              />
              <span>%</span>
            </div>
          </div>
          <div className="field-group" key="tenureYears">
            <div className="field-label-row">
              <label htmlFor="tenureYears">Deposit tenure</label>
              <span className="field-hint">Years</span>
            </div>
            <div className="input-shell calculator-input-control">
              <input
                id="tenureYears"
                type="text"
                min="0"
                step="any"
                inputMode="decimal"
                value={Number(Investment_Period)}
                onChange={(event) =>
                  dispatch(Set_Investment_Period(Number(event.target.value)))
                }
                placeholder="Enter deposit tenure"
              />
              <span>Years</span>
            </div>
          </div>

          <div className="form-actions">
            <button className="primary-button" type="button" onClick={()=>{
                dispatch(Calculate_FD())
            }}>
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetFd())}
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
            <span>Maturity Amount</span>
            <strong>{Number(Maturity_Amount)}</strong>
            <small>No calculation has been run</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Total Interest</span>
              <strong>{Number(Total_Interest)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Interest / growth</span>
              <strong>{Number(Growth_Percentage)}</strong>
            </div>
          </div>
          
        </section>
      </div>

      
    </div>
  );
}
