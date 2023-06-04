import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { History, Main, Shop } from "./pages";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
