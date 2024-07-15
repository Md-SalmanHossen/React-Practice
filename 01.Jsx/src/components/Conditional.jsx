
import React from 'react';

const Conditional = () => {

    let number=80;
    return (
        <div>
            <br />
            <hr />
            <br />
            {number>=80 && number<=100?<h1>hon's mark</h1>:<h2>pass</h2>}
            <br />
            <hr />
        </div>
    );
};

export default Conditional;