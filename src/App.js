import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
            <Route path="/about" exact element={<About />} />
            <Route path="/products" exact element={<Products />} />
            <Route
              path="products/details/:productId"
              exact
              element={<Details />}
            />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="*" exact element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
