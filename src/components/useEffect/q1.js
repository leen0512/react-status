import { useEffect } from "react";

function UseEffect1(props){
    useEffect(() => {
        console.log('rendering')
    }, []);

    useEffect(() => {
        console.log('trigger use effect prop was changed')
    }, [props.triggerEffect]);

    return <div><h1>hello world</h1>
    <hr></hr></div>
}

export default UseEffect1;