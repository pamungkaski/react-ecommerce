import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
  	let img 
  	console.log(Math.floor(parseInt(this.props.nomor) / 5 )+1)
  	let naom = Math.floor(parseInt(this.props.nomor) / 5 )+1
  	if (parseInt(this.props.nomor) % 5 == 1) {
  		if (naom < 10) {
  			img = <img className="image" src={require("../../assets/images/sneakers_191107_000"+(naom).toString(10)+".jpg")}/>
  	
  		}
  		
  		if (naom >= 10) {
  			img = <img className="image" src={require("../../assets/images/sneakers_191107_00"+(naom).toString(10)+".jpg")}/>
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 2) {
  		if (naom < 10) {
  			img = <img className="image" src={require("../../assets/images/Bag_191107_000"+(naom).toString(10)+".jpg")}/>
  	
  		}
  		
  		if (naom >= 10) {
  			img = <img className="image" src={require("../../assets/images/Bag_191107_00"+(naom).toString(10)+".jpg")}/>
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 3) {
  		if (naom < 10) {
  			img = <img className="image" src={require("../../assets/images/Hat_191107_000"+(naom).toString(10)+".jpg")}/>
  	
  		}
  		
  		if (naom >= 10) {
  			img = <img className="image" src={require("../../assets/images/Hat_191107_00"+(naom).toString(10)+".jpg")}/>
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 4) {
  		if (naom < 10) {
  			img = <img className="image" src={require("../../assets/images/Watch_191107_000"+(naom).toString(10)+".jpg")}/>
  	
  		}
  		
  		if (naom >= 10) {

  			img = <img className="image" src={require("../../assets/images/Watch_191107_00"+(naom).toString(10)+".jpg")}/>
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 0) {
  		if (naom < 10) {
  			img = <img className="image" src={require("../../assets/images/Belt_191107_000"+(naom).toString(10)+".jpg")}/>
  	
  		}
  		
  		if (naom >= 10) {
  			img = <img className="image" src={require("../../assets/images/Belt_191107_00"+(naom).toString(10)+".jpg")}/>
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
