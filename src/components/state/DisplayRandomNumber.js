import { useState } from "react";

function DisplayRandomNumber(){
    const [number, setNumber] = useState(0);
    
    return <div>
        <p>{number}</p>
        <button onClick={() => setNumber(Math.floor(Math.random() * 1000))}>Click Here to Display Random Number</button>
        <hr></hr>
    </div>
}

export default DisplayRandomNumber;