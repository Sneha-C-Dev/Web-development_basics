import React from 'react';
import './App.css';
import img1 from "../src/assets/img1.jpg";
// import Part1 from './components/Part1';
// import Part2 from './components/Part2';
import Child from './components/Child';

const greeting="Apple";
const login=true;

const message="i am your  parent";

function App() {
  return (
   
    <div className="App">
     {/* <h1>Welcome to our website!</h1>
     <img src={img1} alt='wallpaper' />
     <h2 style={{fontSize:50,color:'green'}}>{greeting}</h2> */}
    {/* {
      login  && <Part1/>
    } */}
     {/* <Part1 />
     <Part2 /> */}


     <Child msg={message}/>
    </div>
  );
}

export default App;
