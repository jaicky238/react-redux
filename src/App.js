import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store"
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer';
import NewcakeContainer from './components/NewcakeContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
        <NewcakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
