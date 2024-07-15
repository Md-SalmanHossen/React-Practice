import React, { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0);
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return (
        <div className='text-center bg-gray-200'>
            <br /><br /> <br />
            <h1 className='text-3xl'>Your Number is {count} times </h1><br />
            <button onClick={increase} className='ml-2 p-2 rounded-lg bg-green-400'>Increase</button>
            <button onClick={reset} className='ml-2 p-2 rounded-lg bg-red-400'>Reset</button>
            <button onClick={decrease} className='ml-2 p-2 rounded-lg bg-yellow-400'>Decrease</button>
            <br /><br /><br />
        </div>
    );
};

export default Counter;