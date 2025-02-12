import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ViewProducts } from "../pages/ViewProducts/ViewProducts";
import { ArtisanProfiles } from "../pages/ArtisanProfiles/ArtisanProfiles";
import { ViewProduct } from "../pages/ViewProduct/ViewProduct";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ViewProducts />}>
        <Route path="/products/:category" element={<ViewProducts />} />
      </Route>
      <Route path="/products/:category/:id" element={<ViewProduct />} />
      <Route path="/artisans" element={<ArtisanProfiles />} />
    </Routes>
  );
};
