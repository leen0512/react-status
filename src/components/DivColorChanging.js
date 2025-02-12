import { useState } from "react";

function ChangeDivColor(){
  const [isRed, setIsRed] = useState(false);

  return <div>
    <div style={{width:'100px', height:'100px', backgroundColor: isRed? 'red': 'blue'}}></div>
    <button onClick={() => setIsRed(!isRed)}>Click Here to Change Div Color</button>
    <hr></hr>
  </div>
}

export default ChangeDivColor;