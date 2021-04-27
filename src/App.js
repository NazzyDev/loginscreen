import './App.css';
import desenho from './assets/image.svg';
import logo from './assets/logo.png';

function App() {
  return (
  <div className="principalmesmo">
    <p> Use artificial intelligence to your advantage </p>
    <div className="principal"> 
      <img id="texxia" src={logo} />
      <img id="desenho" src={desenho} width={700} />
      
      <div className="box">
        <h1 id="text-login"> Login </h1>
        <input id="input1" placeholder="Email" type="text"/>
        <input id="input2" placeholder="Senha" type="text"/>
        <button type="button" id="buttonlogin">
          Login
        </button>
        <h1 id="text">  Don't have an account?  <span> Register  </span> </h1>
        <h1 id="text2">  Forgot password </h1>
      </div>
    </div>
  </div>
  
  );
}

export default App;
