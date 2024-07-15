
import React from 'react';

const IIF = () => {
    let marks=90;
    return (
        <div>

            {
                (()=>{
                    if(marks>80 && marks<=100){
                        return <h3>got a+</h3>
                    }else{
                        return <h3>not get a+</h3>
                    }
                })()
            }
            <br />
            <hr />
            <br />
            
        </div>
    );
};

export default IIF;