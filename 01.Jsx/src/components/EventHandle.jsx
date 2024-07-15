import React from 'react';

const EventHandle = () => {
    function demo(){
        alert("hello!")
    }
    return (
        <div>
            <button onClick={demo}>submit</button>
            
            <br />
            <br />
            <hr />
        </div>
    );
};

export default EventHandle;