import {
  RotateCcw,
  Calculator,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import { set_duration, set_Intial_Investment,set_Expected_Return_Rate, calculate_Lumpsum, resetLumpsum } from "../../Redux/LumpsumSclice";


export default function LumpsumCalculator() {

    const dispatch = useDispatch<AppDispatch>()

    const Intial_Investment = useSelector<RootState>((state)=>state.lumpsum.Intial_Investment)
    const Expected_Return_Rate = useSelector<RootState>((state)=>state.lumpsum.Expected_Return_Rate)
    const duration =  useSelector<RootState>((state)=>state.lumpsum.duration)
    const Lumpsum_Amount =  useSelector<RootState>((state)=>state.lumpsum.Lumpsum_Amount)
    const Growth_Amount =  useSelector<RootState>((state)=>state.lumpsum.Growth)
    
 

  return (
    <div className="page-content calculator-page">
      

      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>Lumpsum Calculator</h2>
          <p>Project the growth of a one-time investment.</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          Print report
        </button>
      </div>

      <div className="calculator-workspace calculator-workspace-lumpsum">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>One-time investment</h3>
             
            </div>
         
          </div>
          <div className="field-list calculator-fields-lumpsum">
            <div className="field-group" key="principal">
              <div className="field-label-row">
                <label htmlFor="principal">Initial investment</label>
                <span className="field-hint">₹</span>
              </div>
              <div className="input-shell calculator-input-control">
                <input
                  id="principal"
                  type="text"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={String(Intial_Investment)}
                  onChange={(event) =>
                    dispatch(
                      set_Intial_Investment(String(event.target.value))
                    )
                  }
                  placeholder="Enter initial investment"
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
                      set_Expected_Return_Rate(String(event.target.value))
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
                  value={String(duration)}
                  onChange={(event) =>
                    dispatch(
                      set_duration(String(event.target.value))
                    )
                  }
                  placeholder="Enter investment duration"
                />
                <span>Years</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button onClick={()=>dispatch(calculate_Lumpsum())} className="primary-button" type="button">
              <Calculator size={16} /> Calculate Lumpsum
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={() => dispatch(resetLumpsum())}
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
            <strong>{Number(Lumpsum_Amount)}</strong>
            <small>No calculation has been run</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Principal / invested amount</span>
              <strong>{Number(Number(Intial_Investment)*Number(duration))}</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Interest / growth</span>
              <strong>{Number(Growth_Amount)}</strong>
            </div>
          </div>
         
        </section>
      </div>

     
    </div>
  );
}
