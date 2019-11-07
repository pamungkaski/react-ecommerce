import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item">
        <div className="content" onClick={()=>{
          browserHistory.push('/item/123');
        }} >
        <img className="image" src={require("../../assets/images/sneakers_191107_000"+(this.props.nomor+1).toString(10)+".jpg")}/>
        </div>
      </div>
    );
  }
}

export default Item;
