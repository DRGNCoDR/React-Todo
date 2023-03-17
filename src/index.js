import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)
//Depricated
// ReactDOM.render(<Header />, document.querySelector('#root'));
// ReactDOM.render(<App />, document.querySelector('#root'));
