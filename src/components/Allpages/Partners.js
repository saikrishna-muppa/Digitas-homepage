import React from "react";
import {AiOutlineRight} from 'react-icons/ai'
const Partners = () => {
  return (
    <div>
      <div className="events-title">Partners</div>
      <div className="partner-box-text">
        <div className="partners">Images comes here</div>
        <div className="partners-links">
          <div>
            <a href="https://www.lipsum.com/">Learning</a>
          </div>
          <div>
            <a href="https://www.lipsum.com/">Technical</a>
          </div>
          <div>
            <a href="https://www.lipsum.com/"> Business</a>
          </div>
          <div>
            <a href="https://www.lipsum.com/">Sales Resoucres</a>
          </div>
          <div className="more" > More <AiOutlineRight/> </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
