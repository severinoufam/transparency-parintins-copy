import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Licitacoes from "./pages/Licitacoes";
import Contratos from "./pages/Contratos";
import Despesas from "./pages/Despesas";
import Receitas from "./pages/Receitas";
import RecursosHumanos from "./pages/RecursosHumanos";
import NotFound from "./pages/NotFound";
import LicitacaoDetalhes from "./pages/LicitacaoDetalhes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/licitacoes" element={<Licitacoes />} />
          <Route path="/licitacoes/:id" element={<LicitacaoDetalhes />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/recursos-humanos" element={<RecursosHumanos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
