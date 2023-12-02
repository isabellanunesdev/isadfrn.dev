import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Maintenance } from "../pages/Maintenance";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
}
