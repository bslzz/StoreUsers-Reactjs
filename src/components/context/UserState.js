import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const initialState = {
  users: [],
};

//Create context

export const GlobalContext = createContext(initialState);

//Create Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //Create actions
  const deleteUser = (id) => {
    dispatch({
      type: 'DELETE_USER',
      payload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };
  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, deleteUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
