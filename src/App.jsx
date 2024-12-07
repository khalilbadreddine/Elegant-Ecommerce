// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/Layout/ProtectedRoute";
import LoadingWrapper from "./Components/Common/LoadingWrapper";
import { useEffect } from "react";
import { fetchProducts } from "./redux/actions/productActions";
import { fetchCart } from "./redux/actions/cartActions";
import { fetchWishlist } from "./redux/actions/wishlistActions";

function AppInner() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  // Initial data fetch
  useEffect(() => {
    dispatch(fetchProducts());
    if (userInfo) {
      dispatch(fetchCart());
      dispatch(fetchWishlist());
    }
  }, [dispatch, userInfo]);

  return (
    <LoadingWrapper>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </LoadingWrapper>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppInner />
      </Router>
    </Provider>
  );
}

export default App;
