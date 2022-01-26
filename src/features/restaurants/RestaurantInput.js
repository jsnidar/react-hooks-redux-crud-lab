import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from './restaurantsSlice';

function RestaurantInput() {
  
  const [ name, setName ] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => setName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        label='name' 
        value={name} 
        onChange={handleChange}
      />
      <button type='submit'>Add Restaurant</button>
    </form>
  );
}

export default RestaurantInput;
