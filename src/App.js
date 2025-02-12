import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//q1
function ShowNumber(){
  const [count, setCount] = useState(1);
  function IncreaseNumber(){
    setCount(count+1);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={IncreaseNumber}>Click Here to Increase Number</button>
  </div>
}


function App() {
  return (
    <div className="App">
      <ShowNumber title="Increase Number"></ShowNumber>
      <ChgDivColor title="Change Div Color"></ChgDivColor>
      <ShowLikes title="Increase Likes"></ShowLikes>
    </div>
  );
}

export default App;
