// import logo from './logo.svg';
// import Chatbot from 'react-chatbot-kit'
// import 'react-chatbot-kit/build/main.css';

// import './App.css';
// import ActionProvider from './properties/ActionProvider';
// import MessageParser from './properties/MessageParser';
// import config from './properties/config';
// import { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import MasterComponent from './components/MasterComponent';
// import {useMediaQuery} from 'react-responsive';


function App() {

  // const [showBot, toggleBot] = useState(false);

  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { isAuthenticated } = useAuth0();

  // const saveMessages = (messages, HTMLString) => {

  //   localStorage.setItem('chat_messages', JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem('chat_messages'));
  //   return messages;
  // };


  // <script >

  // </script>


  // let plantArry = document.getElementsByClassName("f")  
  // console.log(f[0].value) ;
  // console.log(f[0])

  // const showmessage = () => {
  //   let f = document.getElementsByClassName('react-chatbot-kit-chat-input')
  //   console.log(f[0].value)
  // }

  // function showmessage() {
  //   let f = document.getElementsByClassName('react-chatbot-kit-chat-input');
  //   // console.log("hello world!")
  //   console.log(f[0].value)
  // }


  // var formsp = document.getElementsByClassName('react-chatbot-kit-chat-btn-send')
  // formsp.setAttribute('id','read_form_button')
  // formsp.onClick()

  // formsp.addEventListener("click",showmessage )
  // formsp.addEventListener('click',showmessage)
  // formsp.Chatbot.addEventListener('click',showmessage)

  // console.log(formsp.id)

  
  return (
    <div className='App1' id='my_chatbot1'>
      <MasterComponent />
    </div>
    // <div className="App" id='my_chatbot'>
    //   <header className="App-header">
    //     {showBot && (
    //       <Chatbot headerText='StellaBot!'
    //         config={config}
    //         actionProvider={ActionProvider}
    //         messageHistory={loadMessages()}
    //         messageParser={MessageParser}
    //         saveMessages={saveMessages}
    //         disableScrollToBottom
    //       />
    //     )}

    //     {/* <button onClick={() => toggleBot((prev) => !prev) }>Bot</button> */}

    //     {
    //       <button id="chatbot_toggle" onClick={() => toggleBot((prev) => !prev)} >
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" /></svg>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'none' }}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    //       </button>
    //     }
    //     {isAuthenticated ? (<button style={{ marginTop: '10px', position: 'absolute', left: '71%', top: '87%', backgroundColor: '#f44336', color: 'white', margin: '8px 0', border: 'none', cursor: 'pointer', width: 'auto', padding: '10px 18px', borderRadius: '9px' }}
    //       onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) : (<button style={{ marginTop: '10px', position: 'absolute', left: '71%', top: '87%', width: 'auto', padding: '10px 18px', backgroundColor: '#04AA6D', color: 'white', border: 'none', borderRadius: '9px' }} onClick={() => loginWithRedirect()}>Log In</button>)}

    //     <button id='test-app-button' className='test-button' onClick={showmessage}>Click ME!</button>
    //   </header>
    // </div>


  );
}

export default App;

// function App() {
//   const [showBot, toggleBot] = useState(false);

//   const saveMessages = (messages, HTMLString) => {
//     // localStorage.setItem("chat_messages", JSON.stringify(messages , HTMLString));

//     const obj = {mess:messages , HTMLstr: HTMLString} ; 
//     sessionStorage.setItem("chat_messages", JSON.stringify(obj))
//   };

//   const loadMessages = () => {
//     const messages = JSON.parse(localStorage.getItem("chat_messages"));
//     console.log(localStorage.getItem('chat_messages'))
//     return messages;
//   };

//   return (
//     <div className='App'>
//       {showBot && (
//         <Chatbot
//           config={config}
//           actionProvider={ActionProvider}
//           messageHistory={loadMessages()}
//           messageParser={MessageParser}
//           saveMessages={saveMessages}
//         />
//       )}
//       <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
//     </div>
//   );
// }

// export default App;