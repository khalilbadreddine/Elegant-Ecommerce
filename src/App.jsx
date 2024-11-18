// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Default route */}
          <Route index element={<Home />} />
          {/* Other pages */}
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
