import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Cart } from "./Pages/CartPage/Cart";
import Wishlist from "./Pages/WishlistPage/Wishlist";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
