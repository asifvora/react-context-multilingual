// src/context.js

// Import translations
import translationEN from './translations/en';
import translationCZ from './translations/cz';
import translationDE from './translations/de';
import translationFR from './translations/fr';

import React, { Component } from 'react';

// Create new context
export const MyContext = React.createContext();

// Then create a Provider Component
export class MyProvider extends Component {
    state = {
        isNavOpen: false,
        language: 'en',
        data: translationEN
    }

    changeLanguage = (e) => {
        let language = e.target.dataset.language;
        let data;
        if (language === 'en') {
            data = translationEN;
        } else if (language === 'cz') {
            data = translationCZ;
        } else if (language === 'de') {
            data = translationDE;
        } else if (language === 'fr') {
            data = translationFR;
        } else {
            data = translationEN;
        }
        this.setState({
            isNavOpen: !this.state.isNavOpen,
            language: language,
            data: data
        })
        document.body.classList.toggle('nav-is-open')
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
        document.body.classList.toggle('nav-is-open')
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                changeLanguage: this.changeLanguage,
                toggleNav: this.toggleNav
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}