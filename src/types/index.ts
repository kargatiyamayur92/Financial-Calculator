export type CalculatorId =
  | "overview"
  | "sip" | "lumpsum" | "emi" | "compound" | "fd" | "rd"
  | "inflation" | "cagr" | "retirement" | "swp" | "goalPlanner" | "comparison";

export interface CalculatorItem {
  id: Exclude<CalculatorId, "overview">;
  title: string;
  description: string;
  category: "Investing" | "Loans" | "Planning";
  icon: string;
}

export interface CalculatorField {
  key: string; label: string; suffix?: string;
}
export type CalculatorValues = string;
