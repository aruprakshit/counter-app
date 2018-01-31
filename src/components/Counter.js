import React from 'react';

const Counter = props => {
  return (
    <div className='Btns'>
      <button className="Btn" onClick={() => props.onIncrement(1)}>
        {props.value}
        <span className="symbol">&#43;</span>
      </button>
      <button className="Btn" onClick={() => props.onDecrement(2)}>
        {props.value}
        <span className="symbol">&#8722;</span>
      </button>
    </div>
  );
}

export default Counter;
