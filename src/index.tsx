import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import APP from './App';

ReactDOM.render(
    <Router>
        <APP />
    </Router>,
    document.getElementById('root'));
