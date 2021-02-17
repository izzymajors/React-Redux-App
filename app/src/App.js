import React, {useState, useEffect} from 'react';

//import the Provider
import { Provider } from "react-redux";
//import the store
import Store from "./store";


function App() {
return(
  <Provider store={Store} >
   <div className= "App">
    <header>
      <h1>Jonathan WeatherApp</h1>
      <p>Powered By React</p>
    </header>
   </div>

   <main>
     <p>the Main Content</p>
   </main>
  </Provider>
);
}

export default App;
