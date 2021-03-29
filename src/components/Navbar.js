import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    
    // Menu
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
         }
    };

    // Allow button to disappear based on window size.
    useEffect(() => {
        showButton();   
    }, []);

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        window.scrollY > 600 ? setNavbar(true) : setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);
     
    return (
    <>
       <nav className={navbar ? 'navbar active' : 'navbar'}>
           <div className="navbar-container">
             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                 NAIAD 
                 <i class="nb-logo"></i>
             </Link>
             <div className="menu-icon" onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                         Home
                     </Link> 
                 </li> 
                 <li className='nav-item'>
                     <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                         About
                     </Link> 
                 </li>  
                 <li className='nav-item'>
                     <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                         Contact
                     </Link> 
                 </li> 
                 <li className='nav-item'>
                     <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                         Sign Up
                     </Link> 
                 </li> 
             </ul>
             {button && <Button buttonStyle='btn--outline'> Sign Up </Button>}
           </div>
       </nav>
    </>
    );
}

export default Navbar;
