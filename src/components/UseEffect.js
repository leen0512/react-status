import { useEffect } from "react";

function UseEffect(props){
    useEffect(() => {
        console.log('rendering')
    }, []);

    useEffect(() => {
        console.log('trigger use effect prop was changed')
    }, [props.triggerEffect]);

    return <div><h1>hello world</h1></div>
}

export default UseEffect;