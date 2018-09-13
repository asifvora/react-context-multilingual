// src/app/pages/About.js

import React from 'react';

// Import context and provider
import { MyContext } from '../../context';

// Import CSS
import '../styles/grid.css'
import '../styles/components/links.css'
import '../styles/pages/about.css'

const About = () => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <div className="page page-absolute page-about">
                    <div className="container">
                        <div>
                            <h1 className="page-heading-h2">{context.state.data.about.h1}</h1>

                            <p className="page-text">{context.state.data.about.p}</p>
                        </div>
                        <div className="about__contact">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>E-mail:</span>
                                        <br />
                                        <a className="link" href="mailto:asifvora0@gmail.com" target="_blank" rel="noopener noreferrer">asifvora0@gmail.com</a>
                                    </h2>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Github:</span>
                                        <br />
                                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/asifvora">@asifvora</a>
                                    </h2>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Twitter:</span>
                                        <br />
                                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/007_dark_shadow">@007_dark_shadow</a>
                                    </h2>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Instagram:</span>
                                        <br />
                                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/007_dark_shadow/">@007_dark_shadow</a>
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default About;