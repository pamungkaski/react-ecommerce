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
      <h2>Vocher</h2>
      <br/>
      <ul>
      <li>
<h3>Voucher promo Rp. 10.000 (15 November 2019 - 3 Desember 2019)</h3>
</li>
      <li>
<h3>Voucher promo Rp. 50.000 (27 November 2019 - 1 Januari 2020)</h3>
</li>
      <li>
<h3>Voucher promo Rp. 30.000 (1 Desember 2019 - 18 Januari 2020)</h3>
</li>
</ul>
      </div>
    );
  }
}

export default Login;
