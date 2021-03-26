import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  

  useEffect(() =>{
    window.addEventListener('resize', ()=>{setSize(window.innerWidth)});
    //clean up function
    return () =>{
      window.removeEventListener('resize',()=>{setSize(window.innerWidth)});
    }
  },[])

  return <>
    <h1>Window</h1>
    <h2>{size}</h2>
  </>;
};

export default UseEffectCleanup;
