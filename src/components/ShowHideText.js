import { useState } from "react";

function ShowHideText() {
  const [isHidden, setIsHidden] = useState(false);

    return <div>
        <button onClick={() => setIsHidden(!isHidden)}>Click Here to Show or Hide Text</button>
        <p style={{visibility: isHidden? "hidden" : "visible"}}>Helllo</p>
        <hr></hr>
    </div>
}

export default ShowHideText;
