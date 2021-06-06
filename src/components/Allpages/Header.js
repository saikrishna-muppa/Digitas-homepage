import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";
import Banner from "./Banner";
import Slider from "./Slider";
import Events from "./Events";
import Partners from "./Partners";
import Products from "./Products";
import Speeches from "./Speeches";
import Careers from "./Careers";
import Recognition from "./Recognition";
import Card from "./Card";
import Footer from "./Footer";
const Header = () => {
  return (
    <div>
      <div className="header-icons">
        <div className="twitter">
          <TiSocialTwitter /> Twitter
        </div>
        <div className="one">1</div>
        <div className="facebook">
          <RiFacebookBoxFill /> Like
        </div>
        <div className="eight">8</div>
        <div className="one">+1</div>
        <div className="one">1</div>
      </div>
      {/* here the icons part is closed */}

      {/* bannner section started */}
    <div style={{background:"rgb(107 124 139 / 65%)"}}>
   <div style={{background:"white",width:"90%",marginLeft:"auto",marginRight:"auto"}}>
   <Banner />
      <Slider />
      <div className="events-partners">
        <Events />
        <Partners />
        <Products />
      </div>
      <div className="events-partners">
        <Speeches />
        <Careers />
        <Recognition />
      </div>

      <Card />
      <Footer/>
      <div className="footer-down">
       <div className="footer-down-text">Terms of use </div>
       <div className="footer-down-text"> Privacy  Policy</div>
       <div className="footer-down-text">Legal Notice</div>
       <div className="footer-down-text">Sitemap</div>
      </div>
   </div>
    </div>
    </div>
  );
};

export default Header;
