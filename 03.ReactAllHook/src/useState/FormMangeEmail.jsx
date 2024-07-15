import React, { useState } from 'react';

const FormManageEmail = () => {
    const [formObj, setFormObj] = useState({
        fname: "",
        lname: "",
        city: "",
        gender: "",
        email: ""
    });

    const inputOnChange = (property, value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]: value
        }));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (!formObj.email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        console.log(formObj);
    }

    return (
        <div className='bg-indigo-200 p-4 text-justify'>
            <form onSubmit={formSubmit}>
                <input
                    onChange={(e) => { inputOnChange("fname", e.target.value) }}
                    value={formObj.fname}
                    className='border-0 outline-none mb-2'
                    placeholder='First Name'
                /><br />
                <input
                    onChange={(e) => { inputOnChange("lname", e.target.value) }}
                    value={formObj.lname}
                    className='border-0 outline-none mb-2'
                    placeholder='Last Name'
                /><br />
                <input
                    onChange={(e) => { inputOnChange("email", e.target.value) }}
                    value={formObj.email}
                    className='border-0 outline-none mb-2'
                    placeholder='Email'
                /><br />
                <select
                    onChange={(e) => { inputOnChange("city", e.target.value) }}
                    value={formObj.city}
                    className='outline-none'
                >
                    <option value="">Choose city</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                </select><br />
                <input
                    onChange={() => { inputOnChange("gender", 'Male') }}
                    checked={formObj.gender === "Male"}
                    type="radio"
                    name='gender'
                />Male
                <input
                    onChange={() => { inputOnChange("gender", 'Female') }}
                    checked={formObj.gender === "Female"}
                    type="radio"
                    name='gender'
                />Female<br />
                <button
                    type='submit'
                    className='bg-green-500 p-1 rounded-lg'
                >Submit</button>
            </form>
        </div>
    );
};

export default FormManageEmail;
