import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <h1>This is react app</h1>
    )
}

const reactElement = document.getElementById('root');
const root = ReactDOM.createRoot(reactElement);

root.render(<App />);