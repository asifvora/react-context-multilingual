// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import service workers
import registerServiceWorker from './registerServiceWorker';

// Import context provider
import { MyProvider } from './context';

// Import Main component
import Main from './app/Main';

// Import CSS
import './app/styles/base.css';
import './app/styles/layout.css';

// Create App component
const App = () => {
    return (
        <MyProvider>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </MyProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
