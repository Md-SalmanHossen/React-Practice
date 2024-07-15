import React, { useState } from 'react';

const Todo = () => {
    const [list,setList]=useState([])
    const [item,setItem]=useState("");

    const addToList=()=>{
        list.push(item) 
        setList([...list]);

    }

    const removeItem=(index)=>{
        list.splice(index,1)
        setList([...list])
    }

    return (
        <div className=' bg-gray-200 p-4'>

            <input onChange={(e)=>setItem(e.target.value)} className='p-2 rounded-l-lg border-0 outline-none' placeholder='item'/>
            <button onClick={addToList} className='bg-green-500 p-2 rounded-r-lg'>Add</button>         

            <table >
                <tbody >
                    {
                        list.length!==0?(
                            list.map((element,index)=>{
                                return(
                                    <tr>
                                        <td className='text-xl'>{element}</td>
                                        <td><button className='bg-red-700 text-white p-1' onClick={()=>{
                                            removeItem(index);
                                        }}>Remove</button></td>
                                    </tr>
                                )
                            })
                        ):(<tr></tr>)
                    }
                </tbody>
            </table>   

        </div>
    );
};

export default Todo;