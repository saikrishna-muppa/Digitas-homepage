import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Products = () => {
  return (
    <div style={{borderLeft:"2px solid",paddingLeft:"30px"}}>
     <div style={{borderBottom:"2px solid",paddingLeft:"30px",paddingBottom:"80px"}}>
     <div className="products-title">Our Products</div>
      <div className="products">
        <div className="products-box">Images comes here</div>
        <div>
          <div> Closing Time-</div>
          <div> Closing in Any</div>
          <div>Price:$XX.XX</div>
        </div>
      </div>
      <div className="close-div">
        <span className="closing-arrow">
        <AiOutlineLeft className="left" />
          <AiOutlineRight className="right" />
        </span>
        <span className="more">
          More <AiOutlineRight className="right-arrow" />
        </span>
        
      </div>
     </div>
    </div>
  );
};

export default Products;
