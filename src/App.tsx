import React from 'react';
import { toolkitSlice } from './toolkit/toolkitSlice'
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';

function App() {

  const {increment} = toolkitSlice.actions
  const {decrement} = toolkitSlice.actions
  const count = useAppSelector((state) => state.toolkitSlice.count)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className = 'btn' onClick={()=>dispatch(increment(1))}>increment</button>
      <button className = 'btn' onClick={()=>dispatch(decrement(1))}>decrement</button>
    </div>
  );
}

export default App;
