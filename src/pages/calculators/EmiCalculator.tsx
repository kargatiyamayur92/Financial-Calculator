import {
  RotateCcw,
  Calculator,
  
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
    CalculateEMI,
  resetEmi,
  set_Interest_Rate,
  set_Loan_Amount,
  set_Loan_Tenure,
} from "../../Redux/LoanEMISlice";



export default function EmiCalculator() {
  const dispatch = useDispatch<AppDispatch>();

  const Loan_Amount = useSelector<RootState>((state) => state.EMI.Loan_Amount);
  const Interest_Rate = useSelector<RootState>(
    (state) => state.EMI.Interest_Rate,
  );
  const Loan_Tenure = useSelector<RootState>((state) => state.EMI.Loan_Tenure);
  const Monthly_EMI = useSelector<RootState>((state) => state.EMI.Monthly_EMI);
  const Total_Interest = useSelector<RootState>(
    (state) => state.EMI.Total_Interest,
  );
  const Total_Payment = useSelector<RootState>(
    (state) => state.EMI.Total_Payment,
  );

  return (
    <div className="page-content calculator-page">
     

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Loan EMI Calculator</h2>
        
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-emi">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Loan details</h3>
              
            </div>
     
          </div>
          <div className="field-list calculator-fields-emi">
            <div className="field-group" key="loanAmount">
              <div className="field-label-row">
                <label htmlFor="loanAmount">Loan amount</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="loanAmount"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Loan_Amount)}
                  onChange={(event) =>
                    dispatch(dispatch(set_Loan_Amount(String(event.target.value))))
                  }
                  placeholder="Enter loan amount"
                />
                <span>₹</span>
              </div>
            </div>
            <div className="field-group" key="annualInterest">
              <div className="field-label-row">
                <label htmlFor="annualInterest">Annual interest rate</label>
                <span className="field-hint">%</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="annualInterest"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Interest_Rate)}
                  onChange={(event) =>
                    dispatch(set_Interest_Rate(String(event.target.value)))
                  }
                  placeholder="Enter annual interest rate"
                />
                <span>%</span>
              </div>
            </div>
            <div className="field-group" key="tenureYears">
              <div className="field-label-row">
                <label htmlFor="tenureYears">Loan tenure</label>
                <span className="field-hint">Years</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="tenureYears"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Loan_Tenure)}
                  onChange={(event) =>
                    dispatch(set_Loan_Tenure(String(event.target.value) ))
                  }
                  placeholder="Enter loan tenure"
                />
                <span>Years</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button onClick={()=>{
                dispatch(CalculateEMI())
            }} className="primary-button" type="button">
              <Calculator size={16} /> Add calculation logic
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetEmi())}
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
            <span>Total Payment</span>
            <strong>{Number(Total_Payment)}</strong>
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
              <span>Monthly EMI</span>
              <strong>{Number(Monthly_EMI)}</strong>
            </div>
          </div>
        
        </section>
      </div>


    </div>
  );
}
