import { DECREMENT } from "../actionTypes";

export default function decrement(decrementBy = 1) {
  return {
    type: DECREMENT,
    payload: {
      decrementBy
    }
  }
}
