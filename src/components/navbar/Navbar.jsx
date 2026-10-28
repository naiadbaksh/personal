import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/button.component";
import ContactModal from "../contact-modal/contact-modal.component";
import "./Navbar.css";

function Navbar() {
  // Menu
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      console.log(window.innerWidth);
    } else {
      setButton(true);
    }
  };

  // Function that toggles the "Let's Chat" modal
  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log("openModal triggered.");
  };

  // Allow button to disappear based on window size.
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    window.scrollY > 600 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div>
        <nav
          className={navbar ? "navbar active" : "navbar"}
          aria-label="Primary"
        >
          <div className="navbar-container">
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
              NAIAD
              <i class="nb-logo"></i>
            </NavLink>
            <button
              type="button"
              className="menu-icon"
              onClick={handleClick}
              aria-label={
                click ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={click}
              aria-controls="primary-nav-menu"
            >
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </button>
            <ul
              id="primary-nav-menu"
              className={click ? "nav-menu active" : "nav-menu"}
            >
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-links"
                  activeClassName={"selected"}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  className="nav-links"
                  activeClassName={"selected"}
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              {/* <li className='nav-item'>
                     <NavLink exact to='/contact' className='nav-links' activeClassName={'selected'} onClick={closeMobileMenu}>
                         Contact
                     </NavLink> 
                 </li>  */}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-links-mobile"
                  onClick={(closeMobileMenu, openModal)}
                >
                  Let's Chat!
                </NavLink>
              </li>
            </ul>
            <Button
              buttonStyle="btn--outline"
              onClick={openModal}
              className={button ? "" : "button-hidden"}
            >
              Let's Chat!
            </Button>
          </div>
        </nav>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Navbar;
