import React from "react";

function UseEffectHooks() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `clicked ${count} times`
  })

  return (
    <div>
      <button onClick={setCount((count) => count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
}


export default UseEffectHooks;
