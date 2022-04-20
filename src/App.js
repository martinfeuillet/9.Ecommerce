import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppinCart";

function App() {
  return (
    <div>
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductShowcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>

    </div>
  );
}

export default App;
