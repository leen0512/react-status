import { useState } from "react";

function TextChanger() {
  const [isHello, setIsHello] = useState(true);

  return (
    <div>
      <h1>{isHello ? "Hello" : "Goodbye"}</h1>
      <button onClick={() => setIsHello(!isHello)}>Click to Change Text</button>
      <hr></hr>
    </div>
  );
}

export default TextChanger;
