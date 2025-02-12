import { useEffect } from "react";

function UseEffect5(props){
    useEffect(() => {
        console.log("rendered")
    },[]);

    useEffect(() => {
        console.log("value rendered")
    },[props.value]);

    return <div>
        <h2>{props.value}</h2>
        <hr></hr>
    </div>
}

export default UseEffect5;