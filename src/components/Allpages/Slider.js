import React from 'react'
import pic from '../Allpages/download.jpg'




const Slider = () => {
    return (
        <div className="slider">
            <div style={{textAlign:"left",marginLeft:"10%"}}> Home  OverView</div>
            <div className="slider-card">
              <img style={{position:"relative",width:"97%"}} src={pic} alt="banner"/>
             <div className="slider-img-text">
             <div className="overview">OverView</div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu condimentum lacus. Integer sodales suscipit ex, et posuere nulla finibus scelerisque.</div>
             </div>
            </div>
            
        </div>
    )
}

export default Slider
