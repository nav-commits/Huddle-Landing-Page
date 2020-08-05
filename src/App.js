import React,{Fragment} from 'react';
import './Styles/App.scss';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </Fragment>
  );
}

export default App;
