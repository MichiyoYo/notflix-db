import React from "react";
import PropTypes from "prop-types";

function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.value; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }

  return <div className="rating mt-30">{stars}</div>;
}

export default Rating;

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};
