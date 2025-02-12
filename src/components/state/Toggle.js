import { useState } from "react";

function Toggle(){
    const [isOn, setIsOn] = useState(true);

    return <div>
        <p>{isOn? 'On':'Off'}</p>
        <button onClick={(() => setIsOn(!isOn))}>Click Here to Toggle</button>
        <hr></hr>
    </div>
}

export default Toggle;