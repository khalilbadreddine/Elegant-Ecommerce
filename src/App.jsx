// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import Profile from "./Components/Pages/Profile"; // Profile page
import ProtectedRoute from "./Components/Sm-Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Standalone routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
