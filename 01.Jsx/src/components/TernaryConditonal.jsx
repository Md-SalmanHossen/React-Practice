import React from 'react';
const TernaryConditional = () => {
    let status=true;
    return (
        <div>
            <br />
            <hr />
            <br />
            {status?<button>logout btn</button>:<button>login btn</button>}
            <br />
            <hr />
            <br />
            <br />
        </div>
    );
};
export default TernaryConditional;