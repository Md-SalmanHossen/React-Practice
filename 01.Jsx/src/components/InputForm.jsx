import React from 'react';

const InputForm = () => {
    const postFormData=(event)=>{
        event.preventDefault();
        alert("form submitted");
    }
    return (
        <div>
            <br />
            <form action="" onSubmit={postFormData}>
               <input type="text" placeholder='name'/> 
               <button type='submit'>submit</button>
            </form>
            <br />
            <br />
            <hr />
        </div>
    );
};

export default InputForm;