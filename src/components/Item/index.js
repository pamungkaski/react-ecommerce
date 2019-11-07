import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
  	let img
  	if (this.props.nomor < 5) {
  		img = <img className="image" src={require("../../assets/images/sneakers_191107_000"+(this.props.nomor+1).toString(10)+".jpg")}/>
  	} else {
  		img = <img className="image" src={require("../../assets/images/Hat_191107_000"+(this.props.nomor-4).toString(10)+".jpg")}/>
  	}
    return(
      <div className="item" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="content" onClick={()=>{
          browserHistory.push('/item/123');
        }} >
        {img}
        </div>
      </div>
    );
  }
}

export default Item;
