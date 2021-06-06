import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'


const Recognition = () => {
    return (
        <div style={{borderLeft:"2px solid",paddingLeft:"30px"}}>
        <div >
        <div className="products-title">Recognition</div>
         <div className="products">
           <div className="products-box">Images comes here</div>
           <div>
             <div> Sales Callplanner</div>
             <div> Top CRM Sales Tool</div>
          
           </div>
         </div>
         <div className="close-div">
          
           <span className="more">
             More <AiOutlineRight className="right-arrow"/>
           </span>
           
         </div>
        </div>
       </div>
    )
}

export default Recognition
