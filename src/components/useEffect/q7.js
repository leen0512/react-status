import { useEffect } from "react";

function UseEffect7(props){
    useEffect(() => {
        console.log(`Number is: ${props.number}`)
    }, [props.number]);

    return <div>
        <h2>{props.number}</h2>
        <hr></hr>
    </div>
}

export default UseEffect7;