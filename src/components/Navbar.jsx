import { useState } from "react";
import "./Navbar.css";

function Navbar({ onHome, onProducts }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHome = () => {
    setMenuOpen(false);
    onHome();
  };

  const handleProducts = () => {
    setMenuOpen(false);
    onProducts();
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <button
          className="logo"
          onClick={handleHome}
        >
          My<span>Shop</span>
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <button onClick={handleHome}>
            Accueil
          </button>

          <button onClick={handleProducts}>
            Produits
          </button>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            À propos
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </nav>

        <a
          href="https://wa.me/2290151614600"
          target="_blank"
          rel="noreferrer"
          className="navbar-whatsapp"
        >
          WhatsApp
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;