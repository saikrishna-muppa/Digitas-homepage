import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import{CgTwitter} from 'react-icons/cg'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaBlogger} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const Footer = () => {
  return (
      
    <div className="footer">
      <div className="about">
        <div className="footer-title">About</div>
        <div className="text" >Vision&Mission</div>
        <div className="text">Thought Leadership</div>
        <div className="text">Partners</div>
        <div className="text">Events</div>
        <div className="text">Press Room</div>
        <div className="text">Careers</div>
        <div className="text">Awards Recognition</div>
      </div>
      <div className="training">
        <div className="footer-title">Training</div>
        <div className="text">Talent Management</div>
        <div className="text">Training & Development</div>
        <div className="text">Coaching</div>
        <div className="text">Saleforce Enablement</div>
        <div className="text">SPS Overview</div>
        <div className="text">Readiness</div>
        <div className="text">Development</div>
        <div className="text">Sustainment</div>
      </div>
      <div className="resoucres">
        <div className="footer-title">Resoucres</div>
        <div className="text">E-store</div>
        <div className="text">Nano Sales Books</div>
        <div className="text">Tools</div>
        <div className="text">Books</div>
        <div className="text">WebCasts</div>
        <div className="text">Cyber Sales Tips</div>
        
      </div>
      <div className="global">
      <div className="footer-title">Global Reach</div>
        <div className="text"> North America</div>
        <div className="text">South America</div>
        <div className="text">Eupore,Middle-East</div>
        <div className="text">Africa Headerquaters</div>
        <div className="text">Asia Pacific</div>
      </div>
     <div className="share">
     <div className="footer-title">Share</div>
      <div>
        <RiFacebookBoxFill />
        Facebook
      </div>
      <div className="text"><CgTwitter/> Twitter</div>
      <div className="text"><AiFillLinkedin/> Linkedin</div>
      <div className="text"> <FaBlogger/> Blog</div>
      <div className="text"><MdEmail/> E-mail</div>
     </div>
    </div>
  );
};

export default Footer;
