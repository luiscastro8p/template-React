import React, { useEffect, useReducer } from 'react';
import './style.css';
import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [state.reload]);

  const example = () => {
    dispatch({ type: actions.fetchData, payload: 'hola' });
  };

  return (
    <>
      <div className=''>
        <p className='btn' onClick={() => example} >
          Entro al componente
        </p>
      </div>
    </>
  );
};

export default Example;
