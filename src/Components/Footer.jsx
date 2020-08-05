import React,{Fragment} from 'react';
import '../Styles/App.scss';
import Tab from './Tab'
import { FaFacebook } from "react-icons/fa";
import {AiFillTwitterCircle  } from"react-icons/ai";
import {GrInstagram } from "react-icons/gr";


function Footer() {

  return (
<Fragment>
<div className="content-cover">
     <Tab 
      title="Ready To Build Your Community?" 
      content=" Get Started For Free"
     />

{/* this is one part of the footer */}
<div className="footer-div">
  
<div className="section-one">
  <img className="footer-logo" src='images/logos.svg'  alt="foot"/>
     
  <div className="one">
     <img className="lorem" src="images/icon-location.svg" alt=""/>
     <p className="para-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua</p>
   </div>
     
  <div className="two">
     <img className="lorem" src="images/icon-phone.svg" alt=""/> 
     <p >+1-543-123-4567</p>  
</div>
    
  <div  className="three">
     <img className="lorem" src="images/icon-email.svg" alt=""/> 
     <p>example@huddle.com</p> 
  </div>
    
</div>


{/* this is another part */}

<div className="section-two">

<div className="part-two">
<ul className="change-one">
   <li> About Us</li>
   <li>What We Do</li>
   <li>FAQ</li>
</ul> 
</div>

</div>

{/* another part of the div */}

<div className="part-three">
<ul className="change-two">
  <li>Career</li>
  <li>Blog</li>
  <li>Contact Us</li>
</ul>
</div>

<p className="copy">  &copy;Copyright 2018 Huddle. All rights reserved.</p> 


{/* need soical icons here from font-awesome */}

<div className="icons">
  <FaFacebook className="face"/>

  <AiFillTwitterCircle className="twit"/>

  <GrInstagram className="insta"/>

</div>

</div>

</div>
</Fragment> 
  );
}

export default Footer;