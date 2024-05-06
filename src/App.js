import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Cart } from "./Pages/CartPage/Cart";

function App() {
 
  return (
    <div >
      <Login/>
    </div>
  );
}

export default App;
