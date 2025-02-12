import { useState } from "react";

function AddInputToList(){
    const [input, setInput] = useState("");
    const [mylist, setList] = useState([]);

    function handleInputChange(event){
        const inputVal = event.target.value;
        setInput(inputVal);
    }

    function addToList(event){
        setList([...mylist, input]);
    }
    return <div>
        <input onChange={handleInputChange}></input>
        {mylist.map(item => <h1>{item}</h1>)}
        <button onClick={addToList}>Click Here to Add Input to List</button>
        <hr></hr>
    </div>
}

export default AddInputToList;