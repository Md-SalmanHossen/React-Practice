import React, { useState } from 'react';

const UserProfile = () => {
  const [state, setState] = useState({
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  });

  const updateName = (newName) => {
    setState((prevState) => ({
      ...prevState,
      name: newName
    }));
  };

  const updateCity = (newCity) => {
    setState((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        city: newCity
      }
    }));
  };

  return (
    <div>
      <h1>{state.name}</h1>
      <p>Age: {state.age}</p>
      <p>City: {state.address.city}</p>
      <p>Country: {state.address.country}</p>
      <button onClick={() => updateName("Jane")}>Update Name</button>
      <button onClick={() => updateCity("Los Angeles")}>Update City</button>
    </div>
  );
};

export default UserProfile;
