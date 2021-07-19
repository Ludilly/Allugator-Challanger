/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import App from '../App';
import reduxStore from '../Redux/store/store';
// import reducer from './Redux/reducer';
import mockData from '../mockData';
import Table from '../components/Table';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

afterEach(() => jest.clearAllMocks());

const reducer = (state = { employees: mockData }) => state;
const rootReducer = combineReducers({ reducer });

export const getStore = (initialState) => {
  if (!initialState) return createStore(rootReducer);
  return createStore(rootReducer, initialState);
};

const renderWithRedux = (
  component,
  { initialState, store = getStore(initialState) } = {},
) => ({
  ...render(
    <Provider store={ store }>{component}</Provider>,
  ),
  reduxStore,
});

describe('Verifica se o componente Table renderiza os dados do funcionário', () => {
  it('faz a verificação se a requisição da API retornam o Nome', () => {
    const { getByText } = renderWithRedux(<Table />);
    const name = getByText(mockData[0].Nome);
    expect(name).toBeInTheDocument();
  });
  it('faz a verificação se a requisição da API retornam o Cpf', () => {
    const { getByText } = renderWithRedux(<Table />);
    const cpf = getByText(mockData[0].Cpf);
    expect(cpf).toBeInTheDocument();
  });
});
