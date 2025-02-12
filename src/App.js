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


//q2
function ChgDivColor(){
  const [IsRosybrown, setIsRosybrown] = useState(false);

  return (
    <div>
  <div style={{backgroundColor:IsRosybrown? 'rosybrown' : 'lightblue',width:'100px', height:'100px'}}></div>
  <button onClick={setIsRosybrown}>Click Here to Change Div Color</button>
  </div>
);
}


//q3
function ShowLikes(){
  const [likes, setLikes] = useState(0);
  function IncreaseLikes(){
    setLikes(likes+1);
  }
  return <div>
    <h1>{likes}</h1>
    <button onClick={IncreaseLikes}>Click Here to Increase Likes</button>
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
