import { INCREMENT } from "../actionTypes";

export default function increment(incrementBy = 1) {
  return {
    type: INCREMENT,
    payload: {
      incrementBy
    }
  }
}
