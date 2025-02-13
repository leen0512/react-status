import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';
import TextChanger from './components/state/TextChanger';
import ChangeDivColor from './components/state/DivColorChanging';
import DisplayInput from './components/state/DisplayInput';
import ShowHideText from './components/state/ShowHideText';
import AddInputToList from './components/state/AddInputToList';
import Toggle from './components/state/Toggle';
import IncreaseOrDecreaseTextSize from './components/state/IncreaseOrDecreaseTextSize';
import DisplayRandomNumber from './components/state/DisplayRandomNumber';
import UseEffect1 from './components/useEffect/q1';
import UseEffect2 from './components/useEffect/q2';
import UseEffect3 from './components/useEffect/q3';
import UseEffect4 from './components/useEffect/q4';
import UseEffect5 from './components/useEffect/q5';
import UseEffect6 from './components/useEffect/q6';
import UseEffect7 from './components/useEffect/q7';
import PostList from './components/axios/example';
import UsersList from './components/axios/q1';

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
  const [count, setCount] = useState(1);
  const [triggerEffect, settriggereffect] = useState(true);
  
  const [color, setColor] = useState('blue');

  const [text,setText] = useState('hello');

  const [status, setStatus] = useState('status1');
  const [color2, setColor2] = useState('pink');

  const [value, setValue] = useState('');

  const [mode, setMode] = useState('mode 1');
  
  const [number, setNumber] = useState(10);
  function handleClick() {
    setTimeout(() => {
        setNumber(number + 10); 
        setNumber(number + 10); 
    }, 1000);
}

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

      <button onClick={() => setCount(count+1)}>Click Here to Increase Count</button>
      <h1>{count}</h1>
      <button onClick={() => settriggereffect(!triggerEffect)}>Click Here to Use Trigger Effect</button>
      <UseEffect1 triggerEffect={triggerEffect} count={count} />
    
      <button onClick={() => setColor('gray')}>Set Color to Gray</button>
      <UseEffect2  color={color}></UseEffect2>

      <button onClick={() => setText('Hello Again!')}>Change Text</button>
      <UseEffect3 text={text}></UseEffect3>

      <button onClick={() => 
        {setStatus('status2')
          setColor2('lightblue')
        }}>Click Here to Change Color and Status</button>
      <UseEffect4 status={status} color={color2}></UseEffect4>
    
      <button onClick={() => setValue("value changed")}>Click Here to Change Value</button>
      <UseEffect5 value={value}></UseEffect5>

      <button onClick={() => setMode("mode changed")}>Click Here to Change mode</button>
      <UseEffect6 mode={mode}></UseEffect6>




      <button onClick={handleClick}>Click Here to Increase number by 10 twice</button>
      <UseEffect7 number={number}></UseEffect7>
        
      {/* <PostList></PostList> */}

      <button>Click Here to Display Full Data</button>
      <UsersList></UsersList>
    </div>
  );
}

export default App;