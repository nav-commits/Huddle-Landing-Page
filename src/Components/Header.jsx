import React,{Fragment} from 'react';
import '../Styles/App.scss';

function Header() {
  return (
<Fragment>

    <div className="back-content">

    <button className="try-free">Try It Free</button>
    
    <div className="all-content">
  
   <img className="top-image" src="/images/logo.svg"  alt="new"/>
       
       
 <h1 className="heading">Build The Community Your Fans Will Love</h1>

     <p className="content"> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion. </p>

  <button className="get-started">Get Started For Free</button>

    </div>

    <img height="400px" className="image-side" src="/images/illustration-mockups.svg" alt="new" srcset=""/>

    </div>
   
</Fragment>
  );
}

export default Header;
