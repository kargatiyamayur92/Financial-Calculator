import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import type { CalculatorId } from "./types";
import SipCalculator from "./pages/calculators/SipCalculator";
import LumpsumCalculator from "./pages/calculators/LumpsumCalculator";
import EmiCalculator from "./pages/calculators/EmiCalculator";
import CompoundCalculator from "./pages/calculators/CompoundCalculator";
import FdCalculator from "./pages/calculators/FdCalculator";
import RdCalculator from "./pages/calculators/RdCalculator";
import InflationCalculator from "./pages/calculators/InflationCalculator";
import SwpCalculator from "./pages/calculators/SwpCalculator";
import { configureAndroidUI } from "./native/android";

const pageMeta: Partial<
  Record<CalculatorId, { title: string; subtitle: string }>
> = {
  sip: {
    title: "SIP Calculator",
    subtitle: "Estimate the potential value of regular investments.",
  },
  lumpsum: {
    title: "Lumpsum Calculator",
    subtitle: "Project growth from a one-time investment.",
  },
  emi: {
    title: "Loan EMI Calculator",
    subtitle: "Understand monthly payments and total borrowing cost.",
  },
  compound: {
    title: "Compound Interest",
    subtitle: "Explore how compounding can grow your money.",
  },
  fd: {
    title: "Fixed Deposit Calculator",
    subtitle: "Estimate the maturity value of a fixed deposit.",
  },
  rd: {
    title: "Recurring Deposit Calculator",
    subtitle: "Estimate returns on recurring monthly deposits.",
  },
  inflation: {
    title: "Inflation Calculator",
    subtitle: "Estimate the future cost of today’s money.",
  },
  swp: {
    title: "SWP Calculator",
    subtitle: "Model regular withdrawals from an investment corpus.",
  },
};

export default function App() {
  const [active, setActive] = useState<CalculatorId>("sip");
  const [mobileOpen, setMobileOpen] = useState(false);
  const meta = pageMeta[active];
  const pages: Partial<Record<CalculatorId, ReactNode>> = {
    sip: <SipCalculator />,
    lumpsum: <LumpsumCalculator />,
    emi: <EmiCalculator />,
    compound: <CompoundCalculator />,
    fd: <FdCalculator />,
    rd: <RdCalculator />,
    inflation: <InflationCalculator />,
    swp: <SwpCalculator />,
  };

  useEffect(()=>{
    configureAndroidUI()
  },[])

  return (
    <div className="app-shell">
      <Sidebar
        active={active}
        onNavigate={setActive}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <main className="main-area">
        <Header
          title={String(meta?.title)}
          subtitle={String(meta?.subtitle)}
          onMenu={() => setMobileOpen(true)}
        />

        {!!pages[active] && pages[active]}
        <footer className="app-footer">
          <span>
            © 2026 FinCalc Studio. Built for clearer financial thinking.
          </span>
          <span>
            <CircleHelp size={14} /> Educational tool · Not financial advice
          </span>
          <a href="#top">
            Back to top <ArrowUpRight size={13} />
          </a>
        </footer>
      </main>
    </div>
  );
}
