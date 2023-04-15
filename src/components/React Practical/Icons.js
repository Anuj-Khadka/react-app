import React from "react";
import { IconContext } from "react-icons";
import { FaApple } from "react-icons/fa";
import { MdEco, MdLaptopMac } from "react-icons/md";

const Icons = () => {
  return (
    <div>
      <h2>
        <a href="https://github.com/react-icons/react-icons">Icons</a>
      </h2>
      <IconContext.Provider value={{ color: "#252525", size: "10rem" }}>
        <div>
          <FaApple color="#252525" size="10rem" />
          <MdLaptopMac color="#fead" size="10rem" />
          <MdEco />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Icons;
