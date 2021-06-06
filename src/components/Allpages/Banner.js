import React from 'react'

const Banner = () => {
    return (
        <div className="bannner">
              <div >
                <div className="company-logo">Company Logo</div>
                 <span className="banner-text">
                 <span className="text">Welcome Guest</span>
                 <span className="text">Login</span>
                 <span className="text">Contact us</span>
                 <span className="text">Resource center</span>
                 <input type="text" aria-label="Search" placeholder= "Search" />
                 </span>
                 <div className="banner-navigation">
                     <div>Home</div>
                     <div className="active">Overview</div>
                     <div>Who We Are</div>
                     <div>What We Do</div>
                     <div>Why DigitasLBi</div>
                     <div>Global Reach</div>
                  
                 </div>

            </div>
            
        </div>
    )
}

export default Banner
