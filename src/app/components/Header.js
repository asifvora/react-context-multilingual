// src/app/components/Header.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import CSS
import '../styles/components/header.css'
import '../styles/components/links.css'

class Header extends Component {

    render() {
        let { context } = this.props;
        return (
            <header className="header">
                <div className="container-fluid">
                    <nav className="nav-wrapper">
                        {context.state.isNavOpen && <div className="js-nav nav">
                            <ul className="nav-list">
                                <li>
                                    <Link className='link' to="/" onClick={context.toggleNav}>
                                        {context.state.data.nav.home}
                                    </Link>
                                </li>

                                <li>
                                    <Link className='link' to="/portfolio" onClick={context.toggleNav}>
                                        {context.state.data.nav.portfolio}
                                    </Link>
                                </li>

                                <li>
                                    <Link className='link' to="/about" onClick={context.toggleNav}>
                                        {context.state.data.nav.about}
                                    </Link>
                                </li>

                                <li className="nav-languages">
                                    <a
                                        className={context.state.language === 'en' ? 'link-active' : 'link'}
                                        onClick={context.changeLanguage}
                                        data-language="en"
                                    >
                                        EN
                                </a>

                                    <span className="nav-divider">/</span>

                                    <a
                                        className={context.state.language === 'cz' ? 'link-active' : 'link'}
                                        onClick={context.changeLanguage}
                                        data-language="cz"
                                    >
                                        CZ
                  </a>

                                    <span className="nav-divider">/</span>

                                    <a
                                        className={context.state.language === 'de' ? 'link-active' : 'link'}
                                        onClick={context.changeLanguage}
                                        data-language="de"
                                    >
                                        DE
                  </a>

                                    <span className="nav-divider">/</span>

                                    <a
                                        className={context.state.language === 'fr' ? 'link-active' : 'link'}
                                        onClick={context.changeLanguage}
                                        data-language="fr"
                                    >
                                        FR
                  </a>
                                </li>
                            </ul>
                        </div>}

                        {<button className={context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={context.toggleNav}>
                            <span />
                            <span />
                            <span />
                        </button>}
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;