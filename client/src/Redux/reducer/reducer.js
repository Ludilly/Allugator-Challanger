import {
  SET_API_DATA,
  DELETE_EMPLOYEE,
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
  case DELETE_EMPLOYEE:
    return {
      ...state,
      employees: state.employees.filter(
        (employee) => Number(employee.Cpf) !== Number(action.payload),
      ),
    };
  default: return state;
  }
};

export default reducer;
