import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import data from './data/data';

//The app is now passing the data as a property
ReactDOM.render(<App data={data} />, document.getElementById('root'));
