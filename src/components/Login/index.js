import React, { Component } from 'react';
import './styles.sass';

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');

  }
  render() {
    return (
      <div className="loginWrapper">
      <h1>Login</h1>
        
        <form>
	        

	        <input type="email" name="email" placeholder="email"></input>
	        <input type="password" name="password" placeholder="password"></input>
	        <input type="submit" class='loginBtn googleBtn' value="submit"></input>
	      </form>
	      <h3 className="loginHeading text-center">or Login with your social account</h3>
        <div className="btnWrapper">
          <button className="loginBtn fbBtn">Facebook Login</button>
          <button className="loginBtn googleBtn">Google Login</button>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <button className="loginBtn twitterBtn">Twitter Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
