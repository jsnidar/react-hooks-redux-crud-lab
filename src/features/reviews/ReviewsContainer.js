import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({restaurant}) {
  return (
    <div>
      <ReviewInput restaurantId={restaurant.id} />
      <Reviews />
    </div>
  );
}

export default ReviewsContainer;
