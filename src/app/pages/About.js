// src/app/pages/About.js

import React from 'react';

// Import context and provider
import { MyContext } from '../../context';

// Import translations
import * as translationCZ from '../../translations/cz';
import * as translationDE from '../../translations/de';
import * as translationEN from '../../translations/en';
import * as translationFR from '../../translations/fr';

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
                        {
                            (() => {
                                if (context.state.language === 'cz') {
                                    return <div>
                                        <h1 className="page-heading-h2">{translationCZ.about.h1}</h1>

                                        <p className="page-text">{translationCZ.about.p}</p>
                                    </div>
                                } else if (context.state.language === 'de') {
                                    return <div>
                                        <h1 className="page-heading-h2">{translationDE.about.h1}</h1>

                                        <p className="page-text">{translationDE.about.p}</p>
                                    </div>
                                } else if (context.state.language === 'fr') {
                                    return <div>
                                        <h1 className="page-heading-h2">{translationFR.about.h1}</h1>

                                        <p className="page-text">{translationFR.about.p}</p>
                                    </div>
                                } else {
                                    return <div>
                                        <h1 className="page-heading-h2">{translationEN.about.h1}</h1>

                                        <p className="page-text">{translationEN.about.p}</p>
                                    </div>
                                }
                            })()
                        }

                        <div className="about__contact">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>E-mail:</span>
                                        <br />
                                        <a className="link" href="mailto:asifvora0@gmail.com">asifvora0@gmail.com</a>
                                    </h2>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Github:</span>
                                        <br />
                                        <a className="link" href="https://github.com/asifvora">@asifvora</a>
                                    </h2>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Twitter:</span>
                                        <br />
                                        <a className="link" href="https://twitter.com/007_dark_shadow">@007_dark_shadow</a>
                                    </h2>
                                </div>                                

                                <div className="col-md-6 col-lg-4">
                                    <h2 className="page-heading-h4">
                                        <span>Instagram:</span>
                                        <br />
                                        <a className="link" href="https://www.instagram.com/007_dark_shadow/">@007_dark_shadow</a>
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