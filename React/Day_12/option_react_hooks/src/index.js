import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContextprovider from './context/auth-context';

ReactDOM.render(<AuthContextprovider><App /></AuthContextprovider>, document.getElementById('root'));
