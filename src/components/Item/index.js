import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
  	let img = <img className="image" src={require("../../assets/images/sneakers_191107_000"+(this.props.nomor+1).toString(10)+".jpg")}/>
  	
  	let naom = Math.floor(this.props.nomor / 4 )
  	
  	if (this.props.numor % 4 == 1) {
  		img = <img className="image" src={require("../../assets/images/sneakers_191107_000"+(naom+1).toString(10)+".jpg")}/>
  	
  		if naom >= 10 {
  			img = <img className="image" src={require("../../assets/images/sneakers_191107_00"+(+1).toString(10)+".jpg")}/>
  		}
  	}
  	if (this.props.numor % 4 == 2) {
  		img = <img className="image" src={require("../../assets/images/Bag_191107_000"+(naom+1).toString(10)+".jpg")}/>
  	
  		if naom >= 10 {
  			img = <img className="image" src={require("../../assets/images/Bag_191107_00"+(naom+1).toString(10)+".jpg")}/>
  		}
  	}
  	if (this.props.numor % 4 == 3) {
  		img = <img className="image" src={require("../../assets/images/sHat_191107_000"+(naom+1).toString(10)+".jpg")}/>
  	
  		if naom >= 10 {
  			img = <img className="image" src={require("../../assets/images/Hat_191107_00"+(naom+1).toString(10)+".jpg")}/>
  		}
  	}
  	if (this.props.numor % 4 == 0) {
  		img = <img className="image" src={require("../../assets/images/Belt_191107_000"+(naom+1).toString(10)+".jpg")}/>
  	
  		if naom >= 10 {
  			img = <img className="image" src={require("../../assets/images/Belt_191107_00"+(naom+1).toString(10)+".jpg")}/>
  		}
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
