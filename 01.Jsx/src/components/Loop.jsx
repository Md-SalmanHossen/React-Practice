import React from 'react';

const Loop = () => {
    const city=["a","b","c","d"];
    return (
        <div>
            <ul>
                {
                    city.map((item,index)=>{
                        return <li key={index.toString()}>{item}</li>
                    })
                }
            </ul>

            
            <br />
            <hr />
            <br />
        </div>
    );
};

export default Loop;