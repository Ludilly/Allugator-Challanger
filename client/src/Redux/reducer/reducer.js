import {
  SET_API_DATA,
} from '../actions/actions';

const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_API_DATA:
    return {
      ...state,
      employees: action.payload,
    };
  default: return state;
  }
};

export default reducer;
