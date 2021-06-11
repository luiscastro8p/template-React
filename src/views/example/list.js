import React, { useEffect, useReducer } from "react";
import "./style.css";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

const ListGreeting = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [state.reload]);

  const example = () => {
    dispatch({ type: actions.fetchData, payload: "hola" });
  };

  return (
    <>
      <button className="btn" onClick={() => example()} style={{margin:'auto'}}>
        HOla
      </button>
    </>
  );
};

export default ListGreeting;
