import React, { useState } from 'react';

const FormManage = () => {
    // Step 1: Initialize state object with form fields
    const [formObj, setFormObj] = useState({
        fname: "",
        lname: "",
        city: "",
        gender: ""
    });

    // Step 2: Function to handle input changes and update state
    const inputOnChange = (property, value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]: value
        }));
    }

    // Step 3: Function to handle form submission
    const formSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formObj); // Log the form data to the console
        alert(JSON.stringify(formObj)); // Show the form data in an alert
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

export default FormManage;
