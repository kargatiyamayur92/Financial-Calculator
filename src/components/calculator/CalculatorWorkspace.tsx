import {
  ArrowLeft,
  Download,
  Info,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import type { CalculatorField, CalculatorValues } from "../../types";

interface Props {
  title: string;
  description: string;
  fields: CalculatorField[];
  values: CalculatorValues;
  onChange: (field: string, value: string) => void;
  onReset: () => void;
  onBack: () => void;
}
export default function CalculatorWorkspace({
  title,
  description,
  fields,
  values,
  onChange,
  onReset,
  onBack,
}: Props) {
  return (
    <div className="page-content calculator-page">
      <button className="back-link" onClick={onBack}>
        <ArrowLeft size={16} /> All calculators
      </button>
      <div className="calculator-intro">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FINANCIAL CALCULATOR
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button
          className="outline-button"
          type="button"
          onClick={() => window.print()}
        >
          <Download size={16} /> Print report
        </button>
      </div>
      <div className="calculator-workspace">
        <section className="panel input-panel">
          <div className="panel-heading">
            <div>
              <h3>Enter your details</h3>
              <p>Change values — they are stored in the Redux store.</p>
            </div>
            <span className="step-count">01 / INPUTS</span>
          </div>
          <div className="field-list">
            {fields.map((field) => (
              <div className="field-group" key={field.key}>
                <div className="field-label-row">
                  <label htmlFor={`${field.key}-input`}>{field.label}</label>
                  <span className="field-hint">Required</span>
                </div>
                <div className="input-shell">
                  <input
                    id={`${field.key}-input`}
                    inputMode="decimal"
                    value={values}
                    onChange={(event) =>
                      onChange(field.key, event.target.value)
                    }
                  />
                  <span>{field.suffix}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="form-actions">
            <button className="primary-button" type="button" disabled>
              <SlidersHorizontal size={16} /> Calculation logic not added
            </button>
            <button className="reset-button" type="button" onClick={onReset}>
              <RotateCcw size={15} /> Reset inputs
            </button>
          </div>
          <div className="input-disclaimer">
            <Info size={15} /> Your inputs update Redux immediately. Add the
            financial formula separately in this calculator’s calculation
            module.
          </div>
        </section>
        <section className="panel result-panel">
          <div className="panel-heading">
            <div>
              <h3>Results panel</h3>
              <p>Connect your calculation function here.</p>
            </div>
            <span className="sample-label">READY FOR LOGIC</span>
          </div>
          <div className="result-highlight">
            <span>Calculated result</span>
            <strong>—</strong>
            <small>No formula connected yet</small>
          </div>
          <div className="result-breakdown">
            <div>
              <span className="breakdown-dot dot-invested" />
              <span>Principal / invested amount</span>
              <strong>—</strong>
            </div>
            <div>
              <span className="breakdown-dot dot-returns" />
              <span>Interest / returns</span>
              <strong>—</strong>
            </div>
          </div>
          <div className="result-footnote">
            This page is connected to its own Redux slice. Result calculations
            are intentionally left for you to implement.
          </div>
        </section>
      </div>
      <section className="panel schedule-panel">
        <div className="panel-heading">
          <div>
            <h3>Breakdown table</h3>
            <p>
              Add yearly or monthly schedule output after implementing the
              formula.
            </p>
          </div>
          <span className="sample-label">NOT CONNECTED</span>
        </div>
        <div className="table-placeholder">No calculation schedule yet</div>
      </section>
    </div>
  );
}
