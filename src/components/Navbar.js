import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.remove("responsive_nav");
    }
  };

  return (
    <header>
      <h3>Sky Properties</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Client</a>
        <a href="/#">Favorite</a>
        <a href="/#">Sign In</a>
        <a href="/#">Sign Up</a>
        <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
          <FaTimes />
        </button>
      </nav>
      
      <FaBars />
      
    </header>
  );
}

export default Navbar;
