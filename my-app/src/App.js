import {signInWithGoogle} from "./firebase-config"
import "./index.css"
function App() {
  return (
    <div className="app">
     <div style={{
       padding: "1em",
       borderRadius: '10px',
       backgroundColor: 'lightyellow',
       border: "3px solid grey"
     }}>
     <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign  in with google</button>
      <h1>Welcome, {localStorage.getItem('displayName')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('photoURL')}/>
     </div>
    </div>
  ) 
}

export default App;