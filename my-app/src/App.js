import { useState } from 'react';
import './App.css';

function ListItems({ ints, addValue }) {
  const increment = 3;

  return (
    <>
      <button onClick={() => addValue(increment)}>Add Item</button>
      {
        ints?.map(id => {
          return (
            <li key={id}>{id}</li>
          );
        })
      }
    </>
  );
}

function App() {
  const [ints, setInts] = useState([1, 2, 3]);

  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  );
}

export default App;
