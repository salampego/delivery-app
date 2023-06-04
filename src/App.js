import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";

const Main = lazy(() => import("./pages"));
const Shop = lazy(() => import("./pages"));
const ShoppingCart = lazy(() => import("./pages"));
const History = lazy(() => import("./pages"));
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
