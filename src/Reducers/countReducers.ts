export function countReducer(state : {count: number}, action : {type: string}) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
         count: state.count + 1};
      case "DECREMENT":
        return {
          ...state,
         count: state.count - 1};;
      default:
        return state;
    }
  };