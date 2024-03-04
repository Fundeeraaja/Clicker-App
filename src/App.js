import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';



function App() {
  const [count, setCount] = useState(0);

/* function themeSwitch() {
    document.getElementById("theme").style.backgroundColor = "red";
  }
**/
  
return (

<body class="theme" id="theme">
    <div class="grid-container">
      <div class="item1">
          <h1 class="logo">Click the Λlice</h1>
          <p class="subtitle">the super amazing interactive game</p>
      </div>
      
      <div class="item2">
          
          <button class="cute" id="cute" onClick={() => setCount(count + 1) }>
            </button>
          <h2 class="txt" >Don't worry, she'll be fine</h2>
          <p class="clickCounter">Clicks: {count} </p>
      </div>  

      <div class="item3">
          <h1>OPTIONS</h1>
          <button class="menuButton" id="reset" onClick={() => setCount(0)}>RESET</button> <br/>
          <button class="menuButton" id="double" onClick={() => setCount(count * 2)}>DOUBLE<br/>SCORE</button> <br/>
          <button class="menuButton" id="slash" onClick={() => setCount(count / 2)}>SLASH<br/>SCORE</button> <br/>
          
          
      </div>  
    </div>
</body>
  );
}







    




export default App;
