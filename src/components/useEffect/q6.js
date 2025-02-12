import { useEffect } from "react";

function UseEffect6(props){
    useEffect(() => {
        console.log(`mode is: ${props.mode}`)
    }, []);

    return <div>
        <h2>{props.mode}</h2>
        <hr></hr>
    </div>
}

export default UseEffect6;