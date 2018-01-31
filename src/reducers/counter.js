import { INCREMENT, DECREMENT } from "../actionTypes";

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + action.payload.incrementBy;
  case DECREMENT:
    return state - action.payload.decrementBy;
  default:
    return state
  }
}
