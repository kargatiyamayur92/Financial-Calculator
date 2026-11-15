import { RotateCcw, Calculator } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  Calculate_compounding,
  resetCompound,
  Set_Interest_Rate,
  Set_Investment_Period,
  Set_Principal_Amount,
} from "../../Redux/Compounding";

export default function CompoundCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Principal_Amount = useSelector<RootState>(
    (state) => state.compound.Principal_Amount,
  );
  const Interest_Rate = useSelector<RootState>(
    (state) => state.compound.Interest_Rate,
  );
  const Investment_Period = useSelector<RootState>(
    (state) => state.compound.Investment_Period,
  );

  const Maturity_Amount = useSelector<RootState>(
    (state) => state.compound.Maturity_Amount,
  );
  const Compound_Interest = useSelector<RootState>(
    (state) => state.compound.Compound_Interest,
  );
  const Growth_Percentage = useSelector<RootState>(
    (state) => state.compound.Growth_Percentage,
  );

  return (
    <div className="page-content calculator-page">
      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Compound Interest Calculator</h2>
          <p>See how principal and compounding frequency affect growth.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-compound">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Compounding setup</h3>
            </div>
          </div>
          <div className="field-list calculator-fields-compound">
            <div className="field-group" key="principal">
              <div className="field-label-row">
                <label htmlFor="principal">Principal amount</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="principal"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={Number(Principal_Amount)}
                  onChange={(event) =>
                    dispatch(Set_Principal_Amount(Number(event.target.value)))
                  }
                  placeholder="Enter principal amount"
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
                    dispatch(Set_Interest_Rate(Number(event.target.value)))
                  }
                  placeholder="Enter annual interest rate"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="durationYears">
              <div className="field-label-row">
                <label htmlFor="durationYears">Investment period</label>
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
                    dispatch(Set_Investment_Period(Number(event.target.value)))
                  }
                  placeholder="Enter investment period"
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
                dispatch(Calculate_compounding());
              }}
            >
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetCompound())}
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
              <span>Compound Interast</span>
              <strong>{Number(Compound_Interest)}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Interest / growth</span>
              <strong>{Number(Growth_Percentage)} %</strong>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}
