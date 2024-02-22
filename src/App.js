import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';



function App() {
  const [count, setCount] = useState(0);
return (
  
    <div class="grid-container">
      <div class="item1">
          <h1>Click the Λlice</h1>
          <p class="subtitle">the super amazing interactive game</p>
      </div>
      
      <div class="item2">
          <button class="cute"  onClick={() => setCount(count + 1)}>
            </button>
          <h2 class="txt" >Don't worry, she'll be fine</h2>
          <p class="clickCounter">Clicks: {count} </p>
      </div>
      
      
    </div>
  );
}



export default App;
