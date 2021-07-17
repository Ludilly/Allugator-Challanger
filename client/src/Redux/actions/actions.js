export const SET_API_DATA = 'SET_API_DATA';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export const setApiData = (payload) => (
  {
    type: SET_API_DATA,
    payload,
  }
);

export const deleteUserSuccess = (cpf) => (
  {
    type: DELETE_EMPLOYEE,
    payload: cpf,
  }
);
