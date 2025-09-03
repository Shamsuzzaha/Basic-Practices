import React from 'react';
import CounterPage from "./pages/counterPage.jsx";
import TodoPage from "./pages/todoPage.jsx";

const App = () => {
    return (
        <div>
            <TodoPage/>
            <CounterPage/>

        </div>
    );
};

export default App;