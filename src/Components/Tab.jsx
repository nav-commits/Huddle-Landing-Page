import React,{Fragment} from 'react';
import '../Styles/App.scss';

function Tab(props) {
  return (
<Fragment>
    <div className="cover">
    <div className="tab-content">
    <h2>{props.title}</h2>
    <button className="button-three">{props.content}</button> 
    </div>
    </div>
</Fragment> 
  );
}

export default Tab;