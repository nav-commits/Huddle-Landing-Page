import React,{Fragment} from 'react';
import '../Styles/App.scss';

function Cards(props) {
  return (

<Fragment>

<div className="all-Content-two">
<div id={props.id} className="card">
  <div className="fix">
  <h2>{props.title}</h2>
  <p>{props.content}</p>
  </div>
  <img className="flowing-convo" src={props.image} alt=""/>
</div>
</div>

</Fragment> 
  );
}

export default Cards;