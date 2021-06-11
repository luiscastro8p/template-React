import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchData:
      return {
        ...state,
        data: [action.payload],
      };
    default:
      break;
  }
};
