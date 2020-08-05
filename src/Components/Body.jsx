import React,{Fragment} from 'react';
import '../Styles/App.scss';
import Cards from '../Components/Cards';

function Body() {
  return (
<Fragment>
   <Cards 
   title="Grow Together" 
   content="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form."
  image="./images/illustration-grow-together.svg"
   id="image-right"
  />

   <Cards 
   title="Flowing Conversation" 
   content="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow."
  image="./images/illustration-flowing-conversation.svg"
  id="image-left"
  />

   <Cards 
   title="Your Users" 
   content="
  It takes no time at all to integrate Huddle with your app's authentication solution. 
  This means, once signed in to your app, your users can start chatting immediately.
"
image="./images/illustration-your-users.svg"
id="image-right"
/>

</Fragment>
  );
}

export default Body;
