import React, { useState } from 'react';

const ObjectPassing = () => {
    const[myObject,setObject]=useState({
        key1:"value1",
        key2:"Value2",
        key3:"Value3"
    });
    const change=()=>{
        setObject(
            prevObject=>({
                ...prevObject,
                key1:"new value for key 1",
                key2:"new value for key 2"
            })
        )
    }
    return (
        <div className='bg-indigo-200 text-center p-4'>
            <h1 className='text-2xl'>{myObject.key1}</h1>
            <h1 className='text-2xl'>{myObject.key2}</h1>
            <h1 className='text-2xl'>{myObject.key3}</h1>
            <button onClick={change} className='bg-pink-300 rounded-lg p-2'>click</button>
        </div>
    );
};

export default ObjectPassing;