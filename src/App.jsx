import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ArtisanShopProvider } from "./context/ArtisanShopContext/ArtisanShopProvider";
import { ProductsProvider } from "./context/ProductsContext/ProductsProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartContext/ShoppingCartProvider";
import { MyRoutes } from "./routes/MyRoutes";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <ArtisanShopProvider>
          <Header />
          <MyRoutes />
          <Footer />
        </ArtisanShopProvider>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
