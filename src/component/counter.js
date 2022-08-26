import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/index";
import { getCount } from "../redux/actions/selector";

export const Counter = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const counter = getCount(selector);
  const [a, setA] = useState(0);
  const statement= false;
  const heading=<h1>write only number</h1>

  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };
  const custom = () => {
    if (!isNaN(a)) {
      dispatch(increment(parseInt(a)));
    }
    else{
        statement=true;
    }
   
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btnStyle" onClick={() => handleDecrement()}>
       -
      </button>

  
      <input onChange={(e) => setA(e.target.value)} />
      <button className="btnStyle" onClick={() => handleIncrement()}>
        +
      </button>
      
      <button onClick={custom}>Add</button>
    </div>
  );
};
