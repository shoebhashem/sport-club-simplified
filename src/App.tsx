import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isSupported, DEFAULT_LANGUAGE } from "@/i18n/config";
import LanguageLayout from "@/components/LanguageLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalTerms from "./pages/LegalTerms";
import Tutorials from "./pages/Tutorials";

const queryClient = new QueryClient();

/** Detects browser language and redirects to the best matching language route */
function LanguageRedirect() {
  const browserLang = navigator.language?.split("-")[0] || "";
  const targetLang = isSupported(browserLang) ? browserLang : DEFAULT_LANGUAGE;
  return <Navigate to={`/${targetLang}`} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root: detect browser language and redirect */}
          <Route path="/" element={<LanguageRedirect />} />

          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            <Route path="legal/privacy" element={<LegalPrivacy />} />
            <Route path="legal/terms" element={<LegalTerms />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Legacy redirects */}
          <Route path="/legal/privacy" element={<Navigate to={`/${DEFAULT_LANGUAGE}/legal/privacy`} replace />} />
          <Route path="/legal/terms" element={<Navigate to={`/${DEFAULT_LANGUAGE}/legal/terms`} replace />} />
          <Route path="/privacy" element={<Navigate to={`/${DEFAULT_LANGUAGE}/legal/privacy`} replace />} />
          <Route path="/terms" element={<Navigate to={`/${DEFAULT_LANGUAGE}/legal/terms`} replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
