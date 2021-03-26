import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('OKOFKS');
  const handleClick = () => {
    if (text === 'random title'){
      setText('Hello world')
    }else
      setText('random title')
  }

  return <>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      Change title
    </button>
  </>;
};

export default UseStateBasics;
