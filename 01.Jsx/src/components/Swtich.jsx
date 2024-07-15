import React from 'react';
const Swtich = () => {
    const status=true;
    switch(status){
        case true:
            return<button>logout btn</button>
        case false :
            return <button>login btn</button>
        default:
            return null;

    }
};

export default Swtich;