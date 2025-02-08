import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ArtisanProvider } from "./context/ArtisanContext/ArtisanProvider";
import { ProductsProvider } from "./context/ProductsContext/ProductsProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartContext/ShoppingCartProvider";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <ArtisanProvider>
          <Header />
          <MyRoutes />
          <Footer />
        </ArtisanProvider>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
