import React from 'react';
const LogicalAnd= () => {
    let isLoggedIn=false;
    return (
        <div>
            <h1>login Status</h1>
            {
            isLoggedIn&&<button>logout</button>
            }
            <hr />
            <br />
            <br />
        </div>
    );
};
export default LogicalAnd;