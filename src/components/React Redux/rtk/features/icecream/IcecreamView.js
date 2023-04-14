import React, {useState} from "react";
import { ordered, restocked } from "./iceCreamSlice";
import { useDispatch, useSelector } from "react-redux";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIcecreams}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <button onClick={() => dispatch(restocked(value))}>Restock Ice Cream</button>
    </div>
  );
};

export default IcecreamView;
