import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/button.component";
import ContactModal from "../contact-modal/contact-modal.component";
import "./Navbar.css";

function NavbarFixed() {
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
    } else {
      setButton(true);
    }
  };

  // Function that toggles the "Let's Chat" modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // Allow button to disappear based on window size.
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div>
        <nav className="navbar active">
          <div className="navbar-container">
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
              NAIAD
              <i class="nb-logo"></i>
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <Button buttonStyle="btn--outline" onClick={openModal}>
              {" "}
              Let's Chat!{" "}
            </Button>
          </div>
        </nav>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default NavbarFixed;
