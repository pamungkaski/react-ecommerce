import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../Header/index';
import Footer from '../Footer/index';
import './styles.sass';
import '../../styles/animation.sass';

class App extends Component {
  componentDidMount() {
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
    return (
      <div className="wrapper">
        <Header />
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
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

export default App;
