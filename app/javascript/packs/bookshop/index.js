import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './i18n';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>, document.getElementById('bookshop-app'),
    )
});
