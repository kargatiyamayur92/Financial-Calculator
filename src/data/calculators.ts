import type { CalculatorItem } from "../types";

export const calculators: CalculatorItem[] = [
  { id: "sip", title: "SIP Calculator", description: "Estimate the potential value of regular investments.", category: "Investing", icon: "calculator" },
  { id: "lumpsum", title: "Lumpsum Calculator", description: "Project growth from a one-time investment.", category: "Investing", icon: "calculator" },
  { id: "emi", title: "Loan EMI Calculator", description: "Understand monthly payments and total borrowing cost.", category: "Loans", icon: "calculator" },
  { id: "compound", title: "Compound Interest", description: "Explore how compounding can grow your money.", category: "Investing", icon: "calculator" },
  { id: "fd", title: "Fixed Deposit Calculator", description: "Estimate the maturity value of a fixed deposit.", category: "Investing", icon: "calculator" },
  { id: "rd", title: "Recurring Deposit Calculator", description: "Estimate returns on recurring monthly deposits.", category: "Investing", icon: "calculator" },
  { id: "inflation", title: "Inflation Calculator", description: "Estimate the future cost of today’s money.", category: "Planning", icon: "calculator" },
  { id: "swp", title: "SWP Calculator", description: "Model regular withdrawals from an investment corpus.", category: "Planning", icon: "calculator" },

];
