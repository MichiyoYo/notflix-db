import React from "react";

/**
 * Rating component, displays a number of stars based on the rating value passed by props
 * @param {*} props
 * @returns a div containing the stars
 */
function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.value; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }

  return <div className="rating mt-30">{stars}</div>;
}

export default Rating;
