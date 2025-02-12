import { useState } from "react";

const DisplayInput = () =>{
    const [input, setInput] = useState("");
    function handleInputChange(event){
        const inputVal = event.target.value;
        setInput(inputVal);
    }
    return <div>
        <input onChange={handleInputChange} placeholder="Type Something..."></input>
        <h1>{input}</h1>
    </div>
}

export default DisplayInput;