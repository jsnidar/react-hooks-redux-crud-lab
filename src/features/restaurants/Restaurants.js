import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";

function Restaurants() {
  const restaurants = useSelector(state => state.restaurants.entities)

  return (
  <ul>
    Restaurants
    {restaurants.map( rest => <Restaurant key={rest.id} restaurant={rest} />)}
  </ul>
  );
}

export default Restaurants;
