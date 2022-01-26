import React from "react";
import Review from "./Review";
import { useSelector } from "react-redux";

function Reviews({ restaurantId }) {
  const reviews = useSelector((state) => state.reviews.entities)
  const renderReviews = reviews.length > 0 ? reviews.map(review => <Review key={review.id} review={review}/>) : null
  return (
    <ul>
    Reviews
    {renderReviews}
    </ul>
  );
}

export default Reviews;
