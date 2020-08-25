import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {username} from "./redux/counter-reducer";
import Navigation from "./components/Navigation";


function App() {


    const store = createStore(username,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


    return (
        <Provider store={store}>
            <div className="App">
                <Navigation/>
            </div>
        </Provider>
    );
}

export default App;
