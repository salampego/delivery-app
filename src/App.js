import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";

const History = lazy(() => import("./pages/History/History"));
const Main = lazy(() => import("./pages/Main/Main"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));

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
