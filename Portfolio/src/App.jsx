import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

function App() {
    return (
        <BrowserRouter>
            <div>
                <MainRouter />
                <p>hello world</p>
            </div>
        </BrowserRouter>
    );
}

export default App;
