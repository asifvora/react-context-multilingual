// src/app/pages/Portfolio.js

import React from 'react';

// Import context and provider
import { MyContext } from '../../context';

const Portfolio = () => {
    return (
        <div className="page page-portfolio page-static">
            <div className="container">
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <h1 className="page-heading-h2">{context.state.data.portfolio.h1}</h1>

                            <h2 className="page-text">{context.state.data.portfolio.h2}</h2>
                        </div>
                    )}
                </MyContext.Consumer>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/HKhdAsLYiQc/800x800"
                                alt="img"
                            />
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/jTCLppdwSEc/800x800"
                                alt="img"
                            />
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/fYO1T495QCM/800x800"
                                alt="img"
                            />
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/w7YCquMkv2c/800x800"
                                alt="img"
                            />
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/mQiZnKwGXW0/800x800"
                                alt="img"
                            />
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <a>
                            <img
                                src="https://source.unsplash.com/s_JSq-i4m8A/800x800"
                                alt="img"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;