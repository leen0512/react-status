import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextChanger from './components/TextChanger';
import ChangeDivColor from './components/DivColorChanging';
import DisplayInput from './components/DisplayInput';
import ShowHideText from './components/ShowHideText';
import AddInputToList from './components/AddInputToList';
import Toggle from './components/Toggle';
import IncreaseOrDecreaseTextSize from './components/IncreaseOrDecreaseTextSize';
import DisplayRandomNumber from './components/DisplayRandomNumber';

//q1
function ShowNumber(){
  const [count, setCount] = useState(1);
  function IncreaseNumber(){
    setCount(count+1);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={IncreaseNumber}>Click Here to Increase Number</button>
    <hr></hr>
  </div>
}


//q2
function ChgDivColor(){
  const [isRosybrown, setisRosybrown] = useState(false);

  return (
    <div>
  <div style={{backgroundColor:isRosybrown? 'rosybrown' : 'lightblue',width:'100px', height:'100px'}}></div>
  <button onClick={() => setisRosybrown(!isRosybrown)}>Click Here to Change Div Color</button>
  <hr></hr>
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
    <hr></hr>
  </div>
}

function App() {
  return (
    <div className="App">
      <ShowNumber title="Increase Number"></ShowNumber>
      <ChgDivColor title="Change Div Color"></ChgDivColor>
      <ShowLikes title="Increase Likes"></ShowLikes>
      <TextChanger/>
      <ChangeDivColor/>
      <DisplayInput/>
      <ShowHideText/>
      <AddInputToList/>
      <Toggle/>
      <IncreaseOrDecreaseTextSize/>
      <DisplayRandomNumber/>
    </div>
  );
}

export default App;
