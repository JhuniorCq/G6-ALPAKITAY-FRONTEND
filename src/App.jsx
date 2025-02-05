import "./App.css";
import { Header } from "./components/Header/Header";
import { ArtisanProvider } from "./context/ArtisanContext/ArtisanProvider";
import { ProductsProvider } from "./context/ProductsContext/ProductsProvider";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <ProductsProvider>
      <ArtisanProvider>
        <Header />
        <MyRoutes />
      </ArtisanProvider>
    </ProductsProvider>
  );
}

export default App;
