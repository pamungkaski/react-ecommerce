import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
  	let img, uri
    // let desc = this.props.desc
    // let titles = this.props.titles
	// let harga = this.props.harga
	const {desc, titles, harga, rec1, rec2, rec3} = this.props
    // console.log(titles)
  	// console.log(Math.floor(parseInt(this.props.nomor) / 5 )+1)
  	let naom = Math.floor(parseInt(this.props.nomor) / 5 )+1
  	if (parseInt(this.props.nomor) % 5 == 1) {
  		if (naom < 10) {
        img = <img className="image" src={require("../../assets/images/sneakers_191107_000"+(naom).toString(10)+".jpg")}/>
  			uri = "sneakers_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={require("../../assets/images/sneakers_191107_00"+(naom).toString(10)+".jpg")}/>
  			uri = "sneakers_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 2) {
  		if (naom < 10) {
        img = <img className="image" src={require("../../assets/images/Bag_191107_000"+(naom).toString(10)+".jpg")}/>
  			uri = "Bag_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={require("../../assets/images/Bag_191107_00"+(naom).toString(10)+".jpg")}/>
  			uri = "Bag_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 3) {
  		if (naom < 10) {
        img = <img className="image" src={require("../../assets/images/Hat_191107_000"+(naom).toString(10)+".jpg")}/>
  			uri = "Hat_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={require("../../assets/images/Hat_191107_00"+(naom).toString(10)+".jpg")}/>
  			uri = "Hat_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 4) {
  		if (naom < 10) {
        img = <img className="image" src={require("../../assets/images/Watch_191107_000"+(naom).toString(10)+".jpg")}/>
  			uri = "Watch_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {

        img = <img className="image" src={require("../../assets/images/Watch_191107_00"+(naom).toString(10)+".jpg")}/>
  			uri = "Watch_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(this.props.nomor) % 5 == 0) {
  		if (naom < 10) {
        img = <img className="image" src={require("../../assets/images/Belt_191107_000"+(naom).toString(10)+".jpg")}/>
  			uri = "Belt_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={require("../../assets/images/Belt_191107_00"+(naom).toString(10)+".jpg")}/>
  			uri = "Belt_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
    let test = 'ssss'
    return(
      <div className="item" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="content" onClick={()=>{
          browserHistory.push({
  pathname: '/item/123',
  search: '?the=search',
  state: { uri: uri, desc: desc, titles: titles, harga: harga, rec1: rec1, rec2: rec2, rec3: rec3  }
}
            );
        }} >
        {img}
        </div>
      </div>
    );
  }
}

export default Item;
