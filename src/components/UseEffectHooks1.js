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
      <br />
      <br />
      run effect only once
      <UseEffectOnce />
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
      <button onClick={() => setCount((count) => count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
};

// conditionally run effect
const UseEffectConditional = () => {
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState('')

  useEffect(()=>{
    console.log("changes detected")
    document.title = `clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type="text" value={update} onChange={(e)=>setUpdate(e.target.value)} />
      <button onClick={() => setCount((count) => count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
};


const UseEffectOnce = ()=>{
  return(
    <div>

    </div>
  )
}


export default UseEffectHooks;
export { UseEffectCounter, UseEffectConditional, UseEffectOnce };
