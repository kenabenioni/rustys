import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
          <Link to={"/"}>
            <h2 id="titletext">RUSTYS</h2>
          </Link>
          </div>
          <div className="leftnav">
          <Link to={"/"} className="change">
            <h3 id="navlinks">HOME</h3>
          </Link>
            <h3 id="navlinks">GALLERY</h3>
            <h3 id="navlinks">BUY</h3>

          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Nav;
