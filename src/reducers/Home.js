import * as types from '../actionTypes/homeType'

const initState = {
  count: 0
};

export default function HomeState (state=initState, action) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        count: state.count + 1
      };
    case types.SUB:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state
  }
}