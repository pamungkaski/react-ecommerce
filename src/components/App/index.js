import React, { Component, PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Header from "../Header/index";
import Footer from "../Footer/index";
import "./styles.sass";
import "../../styles/animation.sass";

import { connect } from "react-redux";

import store from "../../store/configureStore";
import { addNote, removeNote, changeStatus } from "../../actions/actions";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {show: false}

    this.handleNot = this.handleNot.bind(this);
  }

  handleNot(e) {
    e.preventDefault();
    console.log(this.state.show)
    let st = this.state.show
    this.setState({show: !st});
  }

  componentDidMount() {
    this.setState({show: false});
    //       const script = document.createElement("script");
    // script.src = "https://apis.google.com/js/platform.js";
    // script.async = true;
    // script.defer = true;
    // script.onload = () => this.scriptLoaded();
    // document.body.appendChild(script);
    // const meta = document.createElement("meta");
    // meta.name = "google-signin-client_id";
    // meta.content = "YOUR_CLIENT_ID.apps.googleusercontent.com";
    // meta.onload = () => this.metaLoaded();
    // document.body.appendChild(meta);
  }

  render() {
    console.log(this.props.notes);
    // this.props.addNote("00", "content");
    let noti 
    if (this.state.show) {
      noti = <div id="notif" style={{position:"fixed",top: "50px", right: "0", height: "400px", width: "400px", background: "#ff0", display: "block" }}>no new notification</div>
    } else {
      noti = <div id="notif" style={{position:"fixed",top: "50px", right: "0", height: "400px", width: "400px", background: "#ff0", display: "none" }}>no new notification</div>
    }
    return (
      <div className="wrapper">
        <div style={{position: 'fixed',top: '0', left: '0',padding: '15px', backgroundColor: '#f00', color: '#fff', fontSize: '25px', fontFamily: 'arial, sans-serif'}} >
          {this.props.status}
        </div>
        <a onClick={this.handleNot} style={{display:"block",position: 'fixed', top: '10px', right: '10px', width: "30px", height: "30px",backgroundSize: "100%",backgroundImage: "url('https://image.flaticon.com/icons/svg/54/54810.svg')"}} >
          {noti}
          
        </a>
        <Header />
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div key={this.props.location.pathname}>
            {this.props.children}
            <Footer />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  "location.pathname": PropTypes.string
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    status: state.status
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
  addNote: addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
