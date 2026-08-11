"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import Dashboard from "@/components/Dashboard";
import AtendimentoFlow from "@/components/atendimento/AtendimentoFlow";
import RequireAuth from "@/components/RequireAuth";

export type Aba = "painel" | "atendimento";

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState<Aba>("painel");

  return (
    <RequireAuth>
      <main className="flex-1 overflow-y-auto pb-24">
        {abaAtiva === "painel" ? <Dashboard /> : <AtendimentoFlow />}
      </main>
      <BottomNav abaAtiva={abaAtiva} onChange={setAbaAtiva} />
    </RequireAuth>
  );
}
