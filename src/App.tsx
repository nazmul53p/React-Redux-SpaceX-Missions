import React from 'react';

interface appPropsType {
    children: JSX.Element;
}

function App({ children }: appPropsType) {
    return <div className="App">{children}</div>;
}

export default App;
