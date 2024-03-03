import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  const starsTotal = 5;
  const filledStars = Math.floor(rating / 2); // rating을 2로 나눈 몫을 채워진 별로 간주
  const emptyStars = starsTotal - filledStars; // 남은 별은 비어있는 별로 간주
  const getStarRating = () => {
    let stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={fasStar} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={filledStars + i} icon={farStar} />);
    }

    return (
      <div className="star-rating">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return <div>{getStarRating()}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
