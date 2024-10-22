import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

