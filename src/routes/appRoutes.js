import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import MedicinePage from "../views/MedicinePage";
import DiseasePage from "../views/DiseasePage";
import DetailMedicine from "../views/DetailMedicine";
import DetailDisease from "../views/DetailDisease";
import ShoppingCart from "../views/CartPage";
import Payment from "../views/PayPage";
import Dashboard from "../views/admin/Dashboard";
import LoginAdmin from "../views/admin/Login";
import DiseaseManager from "../views/admin/DiseaseManager";
import OrderHasBuy from "../views/CartPage copy";

function appRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medicine" element={<MedicinePage />} />
      <Route path="/disease" element={<DiseasePage />} />
      <Route path="/medicine/:id" element={<DetailMedicine />} />
      <Route path="/disease/:id" element={<DetailDisease />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/disease" element={<DiseaseManager />} />
      <Route path="/order/:id" element={<OrderHasBuy />} />
    </Routes>
  );
}

export default appRoutes;
