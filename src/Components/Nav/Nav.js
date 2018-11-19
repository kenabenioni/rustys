import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div className="navwrapper">
    
      <div className="Nav">
        <div className="titlenav">
          <h2 id="titletext">RUSTYS</h2>
        </div>
        <div className="leftnav">
            <h3 id="navlinks">GALLERY</h3>
            <h3 id="navlinks">BUY</h3>
            <h3 id="navlinks">CONTACT</h3>
        </div>
      </div>
        <hr/>
    </div>
    );
  }
}
export default Nav;
