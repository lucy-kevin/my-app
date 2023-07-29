
import { useState } from 'react';
import './App.css';
function ListItems({ints, addValues}){
 const increment = 3;
  return(
    <>
    <button onClick={()=> addValues(increment)}>add item</button>
    {

      ints.map(id => {
        return (
          <li key={id}>{id}</li>
        )
      })
    }
  
    </>
  )
  }
function App() {
 // const ints = [1,2,3];
 const[ints, setInts] = useState([1,2,3]);
  function addValues(incrementValue){
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints,newVal]);

  }
  return (
    <ul>
      <ListItems ints={ints} addValues = {addValues}/>
    </ul>
  );
}

export default App;
