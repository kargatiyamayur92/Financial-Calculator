import {

  RotateCcw,
  Calculator,
  
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  calculate_SWP,
  resetSwp,
  set_Expected_Return_Rate,
  set_Initial_Investment,
  set_Investment_Period,
  set_Monthly_Withdrawal,
} from "../../Redux/SWPSlice";


export default function SwpCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Initial_Investment = useSelector<RootState>(
    (state) => state.SWP.Initial_Investment,
  );
  const Monthly_Withdrawal = useSelector<RootState>(
    (state) => state.SWP.Monthly_Withdrawal,
  );
  const Expected_Return_Rate = useSelector<RootState>(
    (state) => state.SWP.Expected_Return_Rate,
  );
  const Investment_Period = useSelector<RootState>(
    (state) => state.SWP.Investment_Period,
  );
  const Total_Withdrawn = useSelector<RootState>(
    (state) => state.SWP.Total_Withdrawn,
  );
  const Remaining_Balance = useSelector<RootState>(
    (state) => state.SWP.Remaining_Balance,
  );
  const Total_Value = useSelector<RootState>((state) => state.SWP.Total_Value);

  return (
    <div className="page-content calculator-page">
      

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>SWP Calculator</h2>
          <p>Model regular withdrawals from an invested corpus.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-swp">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Withdrawal plan</h3>
              
            </div>
           
          </div>
          <div className="field-list calculator-fields-swp">
            <div className="field-group" key="initialCorpus">
              <div className="field-label-row">
                <label htmlFor="initialCorpus">Initial investment corpus</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="initialCorpus"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Initial_Investment)}
                  onChange={(event) =>
                    dispatch(set_Initial_Investment(Number(event.target.value)))
                  }
                  placeholder="Enter initial investment corpus"
                />
                <span>₹</span>
              </div>
            </div>
            <div className="field-group" key="monthlyWithdrawal">
              <div className="field-label-row">
                <label htmlFor="monthlyWithdrawal">Monthly withdrawal</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="monthlyWithdrawal"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Monthly_Withdrawal)}
                  onChange={(event) =>
                    dispatch(set_Monthly_Withdrawal(Number(event.target.value)))
                  }
                  placeholder="Enter monthly withdrawal"
                />
                <span>₹</span>
              </div>
            </div>
            <div className="field-group" key="annualReturn">
              <div className="field-label-row">
                <label htmlFor="annualReturn">Expected annual return</label>
                <span className="field-hint">%</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="annualReturn"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Expected_Return_Rate)}
                  onChange={(event) =>
                    dispatch(
                      set_Expected_Return_Rate(Number(event.target.value)),
                    )
                  }
                  placeholder="Enter expected annual return"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="durationYears">
              <div className="field-label-row">
                <label htmlFor="durationYears">Withdrawal duration</label>
                <span className="field-hint">Years</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="durationYears"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Investment_Period)}
                  onChange={(event) =>
                    dispatch(set_Investment_Period(Number(event.target.value)))
                  }
                  placeholder="Enter withdrawal duration"
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
                dispatch(calculate_SWP());
              }}
            >
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetSwp())}
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
            <span>Total Withdrawn</span>
            <strong>{Number(Total_Withdrawn)}</strong>
            <small>No calculation has been run</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Remaining Balance</span>
              <strong>{Number(Remaining_Balance)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Total Value</span>
              <strong>{Number(Total_Value)}</strong>
            </div>
          </div>
         
        </section>
      </div>
    </div>
  );
}
