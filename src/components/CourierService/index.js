import React, { Component } from 'react';
import './styles.sass';

class CourierService extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');

  }
  render() {
    return (
      <div className="courierServiceWrapper">
      <h2>Courier Service</h2>
      <br/>
        <div style={{display: 'flex'}}>
        <img style={{width: "200px", maxWidth: "100%", flex: '1'}} src="https://pluginongkoskirim.com/wp-content/uploads/2019/08/JNE-1000x500.jpg"/>
        <img style={{width: "200px", maxWidth: "100%", flex: '1'}} src="https://www.ninjavan.co/cover.png"/>
        <img style={{width: "200px", maxWidth: "100%", flex: '1'}} src="https://www.posindonesia.co.id/photos/7/Logo%20Pos%20Indonesia%20hires.jpg"/>
        <img style={{width: "200px", maxWidth: "100%", flex: '1'}} src="https://pluginongkoskirim.com/wp-content/uploads/2019/05/Info-Daftar-Alamat-Dan-Nomor-Telepon-TIKI-Di-Makssar.jpg"/>
        </div>
      </div>
    );
  }
}

export default CourierService;
