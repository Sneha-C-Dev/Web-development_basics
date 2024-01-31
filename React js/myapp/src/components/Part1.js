import React,{useState} from 'react'

const countries=[
    {id:1,title:"India"},
    {id:2,title:"USA"},
]

export default function Part1() {
 function handleOnClick(){
    alert("this is clicked");
 }
 

 const[count,setCount]=useState(0);
 const [title,setTitle]=useState('Count');

 function handleOnClick(){
    setCount(count + 1);
    setTitle('Add');
 }


  return (
    <div>Part1
    <h1>this is the first child </h1>
    <ul>
        {countries.map(country=>(
            <li key={country.id} >{country.title} </li>
        ))}
    
    </ul>
    
    <button onClick={handleOnClick}>click me</button>

    <div>
        <h1>{title}:{count}</h1>
        <button onClick={handleOnClick}>Increment</button>
    </div>
    </div>
  )
}
