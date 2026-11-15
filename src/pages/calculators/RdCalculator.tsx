import {
  RotateCcw,
  Calculator,
  
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  Calculate_RD,
  resetRD,
  set_Expected_Return_Rate,
  set_Investment_Period,
  set_Monthaly_Deposit,
} from "../../Redux/RDSlice";


export default function RdCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Monthly_Deposit = useSelector<RootState>(
    (state) => state.RD.Monthly_Deposit,
  );
  const Interest_Rate = useSelector<RootState>(
    (state) => state.RD.Interest_Rate,
  );
  const Investment_Period = useSelector<RootState>(
    (state) => state.RD.Investment_Period,
  );
  const Maturity_Amount = useSelector<RootState>(
    (state) => state.RD.Maturity_Amount,
  );
  const Total_Investment = useSelector<RootState>(
    (state) => state.RD.Total_Investment,
  );
  const Total_Interest = useSelector<RootState>(
    (state) => state.RD.Total_Interest,
  );

  return (
    <div className="page-content calculator-page">
      

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Recurring Deposit Calculator</h2>
          <p>Plan regular monthly deposits and estimate maturity value.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-rd">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Recurring deposit details</h3>
             
            </div>
   
          </div>
          <div className="field-list calculator-fields-rd">
            <div className="field-group" key="monthlyDeposit">
              <div className="field-label-row">
                <label htmlFor="monthlyDeposit">Monthly deposit</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="monthlyDeposit"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Monthly_Deposit)}
                  onChange={(event) =>
                    dispatch(set_Monthaly_Deposit(String(event.target.value)))
                  }
                  placeholder="Enter monthly deposit"
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
                  value={String(Interest_Rate)}
                  onChange={(event) =>
                    dispatch(
                      set_Expected_Return_Rate(String(event.target.value)),
                    )
                  }
                  placeholder="Enter annual interest rate"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="tenureMonths">
              <div className="field-label-row">
                <label htmlFor="tenureMonths">Deposit tenure</label>
                <span className="field-hint">Months</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="tenureMonths"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Investment_Period)}
                  onChange={(event) =>
                    dispatch(set_Investment_Period(event.target.value))
                  }
                  placeholder="Enter deposit tenure"
                />
                <span>Months</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => {
                dispatch(Calculate_RD());
              }}
            >
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetRD())}
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
              <span>Total Investment</span>
              <strong>{Number(Total_Investment)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Total Interest</span>
              <strong>{Number(Total_Interest)}</strong>
            </div>
          </div>
         
        </section>
      </div>

      
    </div>
  );
}
