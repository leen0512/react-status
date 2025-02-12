import { useEffect } from "react";

function UseEffect2(props){
    useEffect(() => {
        console.log('rendering')
    }, []);

    useEffect(() => {
        console.log('color updated')
    }, [props.color]);

    return <div>
        <h1 style={{color:props.color}}>hello world</h1>
        <hr></hr>
        </div>
}

export default UseEffect2;