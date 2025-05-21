import React, { useState } from "react";
import "./SmartRating.css";
import { SmartRatingProps } from "./SmartRating.types";

const SmartRating: React.FC<SmartRatingProps> = (props) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);

  return (
    <div className={`star-rating rating-${props.theme}`}>
      <h1>{props.title}</h1>
      <div className="star-container">
        {stars.map((star, index) => {
          const starCss = star <= rating ? "starActive" : "starInactive";
          console.log(starCss);
          return (
            <button
              disabled={props.disabled}
              data-testId={`${props.testIdPrefix}-${index}`}
              key={star}
              className={`${starCss}`}
              onClick={() => setRating(star)}
            >
              <span className="star"> ★ </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SmartRating;
