import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
function Index() {
    return (
        <>
            <App />
        </>
    );
}

ReactDOM.render(<Index />, document.getElementById("app"));