import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign up to hear more about me.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <form>
                    <input type="email" name='email' className="footer-input" placeholder='Your Email'/>
                </form>
                <Button buttonStyle='btn--outline'>Submit</Button>
            </section> */}
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                           {/* <h2>About</h2>  */}
                           <Link to='/about'>About</Link>
                        </div>
                        <div className="footer-link-items">
                           {/* <h2>Contact</h2>  */}
                           <Link to='/sign-up'>Contact</Link>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                           <a href='https://www.linkedin.com/in/naiad-baksh-91963aa0/' target='_blank' rel='noopener noreferrer'> 
                           <div className="footer-button">
                               <i className='fab fa-linkedin'></i>
                           </div> 
                           <span>LinkedIn</span>
                           </a>
                        </div>
                        <div className="footer-link-items">
                           <a href='https://www.twitter.com/naiadcodes ' target='_blank' rel='noopener noreferrer'>
                           <div className="footer-button">
                               <i className='fab fa-twitter'></i>
                           </div> 
                           <span>Twitter</span>
                           </a>
                        </div>
                        <div className="footer-link-items">
                           <a href='https://www.instagram.com/naiadcodes' target='_blank' rel='noopener noreferrer'>
                           <div className="footer-button">
                               <i className='fab fa-instagram'></i>
                           </div> 
                           <span>Instagram</span>
                           </a>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <Link className="social-logo">
                            NAIAD <i class="nb-logo"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Naiad Baksh © 2021</small>
                </section>
        </div>
    )
}

export default Footer
