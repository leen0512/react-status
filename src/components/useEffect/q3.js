import { useEffect } from "react";

function UseEffect3(props){
    useEffect(() =>{
        console.log("Rendered")
    },[]);

    return <div>
        <h1>{props.text}</h1>
        <hr></hr>
        </div>
}

export default UseEffect3;