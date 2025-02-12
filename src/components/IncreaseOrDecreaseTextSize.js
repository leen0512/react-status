import { useState } from "react";

function IncreaseOrDecreaseTextSize(){
    const [size, setSize] = useState(10);

    function increaseSize(){
        setSize(size+1);
    }


    return <div>
        <div style={{backgroundColor:'lavender', height:'100px', width:'100px'}}>
            <p style={{fontSize:size}}>disneyland</p>
        </div>
        <button onClick={increaseSize}>Click Here to Increase Text Size</button>
        <button onClick={() => setSize(size-1)}>Click Here to Decrease Text Size</button>
        <hr></hr>
    </div>
}

export default IncreaseOrDecreaseTextSize;