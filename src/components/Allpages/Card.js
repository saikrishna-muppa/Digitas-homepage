import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card-header">
      <div><button className="primary-btn">Press Release</button>
      <button className="secondary-btn">Media Coverage</button></div>

      <div className="card">
        <div className="card-text">
          Ipsum has been the industry's standard dummy text ever
        </div>
        <p>15 June 2011</p>
        <div className="card-text">
          Ipsum has been the industry's standard dummy text ever
        </div>
        <p>14 June 2011</p>
        <div className="card-text">
          Ipsum has been the industry's standard dummy text ever
        </div>
        <p>13 June 2011</p>
        <span className="more">
          More <AiOutlineRight className="right-arrow" />
        </span>
      </div>
    </div>
  );
};

export default Card;
