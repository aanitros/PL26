import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRouter } from "@/router/Router";

function App() {
  return (
    <TooltipProvider>
      <AppRouter />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
