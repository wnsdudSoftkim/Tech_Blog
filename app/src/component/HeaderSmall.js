import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderSmall.scss'
function HeaderSmall() {
    return (
        <>
            <nav className="site-nav-small">
                <ul className="nav-small">
                    <li className="nav-home-small">
                        <Link to="/" className="Link-small">
                            HOME
                        </Link>
                        
                    </li>
                    <li className="nav-home-small">
                        <Link to="/addpost"  className="Link-small">
                            POSTS
                        </Link>
                        
                    </li>
                    <li className="nav-home-small">
                        <Link to="/"  className="Link-small">
                            GUEST BOOK
                        </Link>
                        
                    </li>
                    <li className="nav-home-small">
                        <Link to="/introduce"  className="Link-small">
                            ABOUT
                        </Link>
                        
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}
export default HeaderSmall