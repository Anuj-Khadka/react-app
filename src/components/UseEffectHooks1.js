import React, { useState, useEffect } from "react";

function UseEffectHooks() {
  return (
    <div>
      basic useEffect
      <UseEffectCounter />
      <br />
      <br />
      conditionally run effect
    <UseEffectConditional />
    </div>
  );
}

// basic useEffect
const UseEffectCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={()=>setCount((count) => count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
};


// conditionally run effect
const UseEffectConditional = ()=>{
  return(
    <div>

    </div>
  )
}


export default UseEffectHooks;
export { UseEffectCounter, UseEffectConditional };


