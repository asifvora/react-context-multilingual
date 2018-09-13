// src/app/pages/Home.js

import React from 'react';

// Import context and provider
import { MyContext } from '../../context';

const Home = () => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <div className="page page-absolute page-home">
                    <div className="page-header">
                        <h1 className="page-heading-h1">{context.state.data.home.h1}</h1>

                        <h2 className="page-heading-h2">{context.state.data.home.h2}</h2>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Home;