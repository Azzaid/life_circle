import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import RootRouter from './routing/RootRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootRouter/>, document.getElementById('root'));
registerServiceWorker();
