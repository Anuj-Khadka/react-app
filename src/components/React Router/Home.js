import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div>
        {/* replace key-value is used to replace the history stack, when true, the location will be skipped and jump to the next or previous from it. */}
        <button onClick={() => navigate("order-summary", { replace: false })}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
