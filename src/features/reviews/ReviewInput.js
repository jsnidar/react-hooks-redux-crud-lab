import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurantId }) {
  
  const [ formData, setFormData ] = useState({
    comment: '',
    restaurantId: restaurantId
  })
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: [e.target.value]
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(reviewAdded(formData))
    setFormData({
      comment: '',
      restaurantId: restaurantId
    })
  }
  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="textArea"
      label='comment'
      name="comment"
      value={formData.comment} 
      onChange={handleChange}
    />
    <button type='submit'>Add Review</button>
  </form>
  );
}

export default ReviewInput;
