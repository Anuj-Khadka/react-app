import React, {forwardRef} from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// learnings: Tippy component, custom html element inside, specify react component, specify children component to tippy component, arrow prop, delay prop, placement prop

const ToolTips = () => {
  return (
    <div>
      <h2>
        <a href="https://github.com/atomiks/tippyjs-react">ToolTips</a>
      </h2>
      normal
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy arrow={false} delay={1000} placement="right" content="Hover the button">
          <button>Hover</button>
        </Tippy>
      </div>
      html element
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy
          content={
            <span style={{ color: "orange" }}>Colored HTML Element</span>
          }
        >
          <button>Hover</button>
        </Tippy>
      </div>
      component
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy content={<ColoredToolTip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      tippy with children
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy placement="top-start" content={<ColoredToolTip />}>
          <CustomChildrenTip />
        </Tippy>
      </div>
    </div>
  );
};

const ColoredToolTip = () => {
  return <span style={{ color: "green" }}>Colored Component</span>;
};


const CustomChildrenTip = forwardRef((props, ref)=>{
    return(
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

export default ToolTips;
