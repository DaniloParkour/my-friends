import React, { useState } from 'react'; //Imports if you'll use JSX. On React Native have to import too

import Header from './components/Header';

import Routes from './routes';

import Logon from './pages/logon';

import './global.css';

function App() {

  //let counter = useState(0); //Not use Let Becouse the state can't be changed (it for improve the performance)
  const [counter, setCounter] = useState(0); //Counter starts with 0

  /*
  useState() returns a array with 2 positions [variable_value, function_to_update_value] 
  
  */

  function increment() {
    //counter += 1; //To improve the performance of React, the state can't be changed directly.
    //To change the counter value, have to use se function returned by useState "function_to_update_value" the second position
    setCounter(counter + 1);
    console.log(counter);
  }

  return (

    <div>

      <Routes />

      
      

      {/*
      <Header title='Protetores de Animais de Teresina' style={{fontSize: 12}}>
        Por um mundo melhor para todos os animais!
      </Header>

      <Header>Contator: 0</Header>
      <button onClick={increment}>Incrementar</button>
      */}

    </div>

  );
}

export default App;
