import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
function Header() {
    return(
        <>
            <header className="header">
                
                <div className="inner-header">
                    <div className="site-header-content">
                        <h1 className="site-title">
                            기술 블로그
                        </h1>
                    </div>
                </div>
                <nav className="site-nav">
                    <ul className="nav">
                        <li className="nav-home">
                            <Link to="/" className="Link">
                                HOME
                            </Link>
                            
                        </li>
                        <li className="nav-home">
                            <Link to="/guestbook"  className="Link">
                                GUEST BOOK
                            </Link>
                           
                        </li>
                        
                        <li className="nav-home">
                            <Link to="/introduce"  className="Link">
                                ABOUT
                            </Link>
                            
                        </li>
                       
                    </ul>
                </nav>

            </header>
            
            
        </>

    )
}
export default Header