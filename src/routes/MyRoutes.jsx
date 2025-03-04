import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ViewProducts } from "../pages/ViewProducts/ViewProducts";
import { ArtisanShopProfiles } from "../pages/ArtisanShopProfiles/ArtisanShopProfiles";
import { ArtisanShop } from "../pages/ArtisanShop/ArtisanShop";
import { ViewProduct } from "../pages/ViewProduct/ViewProduct";
import { PaymentForm } from "../pages/PaymentForm/PaymentForm";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ViewProducts />}>
        <Route path="/products/:category" element={<ViewProducts />} />
      </Route>
      <Route path="/products/:category/:id" element={<ViewProduct />} />
      <Route path="/payment-form" element={<PaymentForm />} />
      <Route path="/artisans-shops" element={<ArtisanShopProfiles />} />
      <Route path="/artisans/:id" element={<ArtisanShop />}></Route>
    </Routes>
  );
};
