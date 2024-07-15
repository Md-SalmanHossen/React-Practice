import React from 'react';
const loginStatusButton=(status)=>{
    if(status){
        return <button>logout Btn</button>
    }else{
        return <button>login btn</button>
    }
}
const IfElse = () => {
    return (
        <div>
            <h1>login Status</h1>
            {loginStatusButton(true)}
             <br />
             <br />
             <hr />
             <br/>
        </div>
    );
};
export default IfElse;