import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Logo } from '../../../public/Assets/ssdcs-store-logo-transparent.png'

export const Navbar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header className="header">
        <div className="NavContainer">
          <div>
            <Link to="/">
            <img
              className="logo"
              src={"./Assets/ssdcs-store-logo-transparent.png"}
              alt="logo"
            />
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/fashion" className="nav-link">
                  FASHION
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gadgets" className="nav-link">
                  GADGETS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/beauty" className="nav-link">
                  BEAUTY
                </Link>
              </li>
            </ul>
          </nav>

          <div className="right-options">
          <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products"
        className="search-input"
      />
      <button type="submit" className="search-button">
      🔍
      </button>
    </form>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
