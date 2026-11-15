import { RotateCcw, Calculator } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  CalculateSIP,
  resetSip,
  set_Expected_Return_Rate,
  set_Investment_Period,
  set_Monthaly_Investment,
} from "../../Redux/SIPSlice";

export default function SipCalculator() {
  const dispatch = useDispatch<AppDispatch>();
  const Monthaly_Investment = useSelector<RootState>(
    (state) => state.sip.Monthaly_Investment,
  );
  const Expected_Return_Rate = useSelector<RootState>(
    (state) => state.sip.Expected_Return_Rate,
  );
  const Investment_Period = useSelector<RootState>(
    (state) => state.sip.Investment_Period,
  );
  const Maturity_Amount = useSelector<RootState>(
    (state) => state.sip.Maturity_Amount,
  );
  const Growth = useSelector<RootState>((state) => state.sip.Growth);

  return (
    <div className="page-content calculator-page">
      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>SIP Calculator</h2>
          <p>Estimate the future value of recurring monthly investments.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-sip">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Monthly contributions</h3>
            </div>
          </div>
          <div className="field-list calculator-fields-sip">
            <div className="field-group" key="monthlyInvestment">
              <div className="field-label-row">
                <label htmlFor="monthlyInvestment">Monthly investment</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="monthlyInvestment"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Monthaly_Investment)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(set_Monthaly_Investment(e.target.value));
                    console.dir(e.target.value);
                  }}
                  placeholder="Enter monthly investment"
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
                  value={String(Expected_Return_Rate)}
                  onChange={(event) =>
                    dispatch(
                      set_Expected_Return_Rate(String(event.target.value)),
                    )
                  }
                  placeholder="Enter expected annual return"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="durationYears">
              <div className="field-label-row">
                <label htmlFor="durationYears">Investment duration</label>
                <span className="field-hint">Years</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="durationYears"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Investment_Period)}
                  onChange={(event) =>
                    dispatch(set_Investment_Period(String(event.target.value)))
                  }
                  placeholder="Enter investment duration"
                />
                <span>Years</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button
              onClick={() => {
                dispatch(CalculateSIP());
              }}
              className="primary-button"
              type="button"
            >
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetSip())}
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
            <span>Estimated result</span>
            <strong>{Number(Maturity_Amount)}</strong>
            <small>No calculation has been run</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Principal / invested amount</span>
              <strong>{Number(Expected_Return_Rate)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Interest / growth</span>
              <strong>{Number(Growth)}</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
