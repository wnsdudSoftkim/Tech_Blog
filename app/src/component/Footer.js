import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="site-footer-content">
                    <section className="copyright">
                        <Link to="/">
                            JunYoung Kim &nbsp;|&nbsp; Student ©
                    2021
                        </Link>
                    </section>
                    <nav className="site-footer-nav">
                        <Link to="/">Blog</Link>
                        <a href="https://github.com/wnsdudSoftkim">GitHub</a>
                        <a href="https://www.instagram.com/cm_jun0/">Instagram</a>

                    </nav>
                </div>
            </footer>
        </>
    )
}
export default Footer