import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'

// import routes
import * as ROUTES from '../constants/routes';
// import components
import { Button } from '../components/Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
           <div className='navbar'>
               <div className='navbar-container container'>
                   <Link to={ROUTES.HOME} className='navbar-logo'
                   onClick={closeMobileMenu}>
                       <MdFingerprint className='navbar-icon'/>
                        OASIS OF LOVE
                   </Link>
                   <div className='menu-icon' onClick={handleClick}>
                    {
                        click ? <FaTimes/> : <FaBars/>
                    }
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to={ROUTES.HOME}className='nav-links'
                           onClick={closeMobileMenu}>HOME</Link>
                       </li>
                       <li className='nav-item'>
                           <Link to={ROUTES.SERVICES}className='nav-links'
                           onClick={closeMobileMenu}>SERVICES</Link>
                       </li>
                       <li className='nav-item'>
                           <Link to={ROUTES.ABOUT}className='nav-links'
                           onClick={closeMobileMenu}>ABOUT</Link>
                       </li>
                       <li className='nav-item'>
                           <Link to={ROUTES.CONTACT_US}className='nav-links'
                           onClick={closeMobileMenu}>CONTACT US</Link>
                       </li>
                       <li className='nav-btn'>
                           {
                               button ? (
                                   <Link to={ROUTES.SIGN_UP} >
                                       <Button buttonStyle='btn==primary'>
                                           SIGN UP
                                       </Button>
                                   </Link>
                               )
                               : (
                                <Link to={ROUTES.SIGN_UP} 
                                onClick={closeMobileMenu}>
                                <Button buttonStyle='btn==primary' buttonSize='btn--mobile'>
                                    SIGN UP
                                </Button>
                            </Link>
                               )
                           }
                       </li>
                   </ul>
               </div>
            </div> 
        </>
    )
}

export default Navbar
