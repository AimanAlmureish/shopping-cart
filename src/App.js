import { useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
