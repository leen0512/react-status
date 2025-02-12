import { useEffect } from "react";

function UseEffect4(props){
    useEffect(() => {
        console.log(`Status Changed: ${props.status}`)
    }, [props.status]);

    return <div>
        <h1 style={{color:props.color}}>{props.status}</h1>
        <hr></hr>
    </div>
}

export default UseEffect4;