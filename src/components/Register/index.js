import React, { Component } from 'react';
import './styles.sass';

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');

  }
  render() {
    return (
      <form>
        <h1>Register</h1>
        <input type="text" name="name" placeholder="name"></input>
        <input type="email" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <input type="password" name="retype" placeholder="retype"></input>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default Login;
