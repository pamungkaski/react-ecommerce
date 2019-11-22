import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class ItemPage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    console.log(this.props.location.state)
    // console.log(this.props.location.state.rec2.num)
    let naom = Math.floor(parseInt(this.props.location.state.rec1.num) / 5 )+1
    let img1 = <img style={{display: 'block', width: '100%'}} src={"../sneakers_191107_000"+(naom).toString(10)+".jpg"} />
    naom = Math.floor(parseInt(this.props.location.state.rec2.num) / 5 )+1
    let img2 = <img style={{display: 'block', width: '100%'}} src={"../Watch_191107_000"+(naom).toString(10)+".jpg"} />
    naom = Math.floor(parseInt(this.props.location.state.rec3.num) / 5 )+1
    let img3 = <img style={{display: 'block', width: '100%'}} src={"../Hat_191107_000"+(naom).toString(10)+".jpg"} />

    let butt = <img style={{width: '60px'}} src={require("../../assets/images/cart.png")}/>
    return (
      <div>
      <div className="itemPageWrapper">
        <div className="itemImgWrapper">
          <img className="image" src={"../"+this.props.location.state.uri}/>
        </div>
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
          </Link>
          <h3 className="itemName">{this.props.location.state.titles}</h3>
          <p className="itemCost frm">{this.props.location.state.harga}</p>
          <p className="description">
            {this.props.location.state.desc}
          </p>
          <p className="seller frm">By <span>Arshad Khan</span></p>
          <a href="http://localhost:8080/cart" style={{width: '60px'}} className=" normalBtn">{butt}</a>
        </div>
        
      </div>
      <div>
          <h3>Recommended For You</h3>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{flex: '1'}}>
            {img1}
            <h2>{this.props.location.state.rec1.titl}</h2>
            <div>{this.props.location.state.rec1.harg}</div>
            </div>
            <div style={{flex: '1'}}>
            {img2}
            <h2>{this.props.location.state.rec2.titl}</h2>
            <div>{this.props.location.state.rec1.harg}</div>
            </div>
            <div style={{flex: '1'}}>
            {img3}
            <h2>{this.props.location.state.rec3.titl}</h2>
            <div>{this.props.location.state.rec1.harg}</div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ItemPage;
