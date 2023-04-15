import React from "react";
import CountUp, { useCountUp } from "react-countup";

// learnings: component, duration, initial value, prefix and suffix, manual control

const CountUpDemo = () => {
  const countUpRef = React.useRef(null);
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
  });
  return (
    <div>
      <h2>
        <a href="https://github.com/glennreyes/react-countup">CountUpDemo</a>
      </h2>
      <div>
        <CountUp end={2000} />
        <br />
        <CountUp end={2000} duration={5} />
        <br />
        <CountUp end={2000} start={1000} duration={5} />
        <br />
        <CountUp end={2000} start={0} duration={5} prefix="$" decimals={2} />
        <br />
        <CountUp end={2000} start={0} duration={5} suffix="USD" decimals={2} />
      </div>
      <div>
        <b>manual control</b>
        <div ref={countUpRef} />
        {/* <h6>{countUp}</h6> */}
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
    </div>
  );
};

export default CountUpDemo;
