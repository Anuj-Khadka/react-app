import { BUY_CAKE } from "./cake-types";

const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export default buyCake;
