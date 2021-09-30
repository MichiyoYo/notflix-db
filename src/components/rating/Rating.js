import React from "react";

function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.value; i++) {
    stars.push(<i class="fas fa-star"></i>);
  }

  return <div className="rating mt-30">{stars}</div>;
}

export default Rating;
