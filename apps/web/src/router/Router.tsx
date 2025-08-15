import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@/screens/Universe/Dashboard";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add other routes here as screens are built */}
      </Routes>
    </BrowserRouter>
  );
}
