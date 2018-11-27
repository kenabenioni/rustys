import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div className="about">
          <h3>MOTORCYCLE SALES & REPAIRS</h3>
          <p>
            At Rustys Motorcycle Sales & Repair, we offer and provide quality
            service repairs and custom designs for the novice to the hard core
            biker. Finding an honest and knowledgeable mechanic should not be a
            dreadful task; here at Rustys we make repairing or servicing your
            motorbike and ATV/UTV as enjoyable and pain free as possible. It
            doesn’t matter what make of machine you have or what work needs to
            be done, here at Rustys we are committed to completing each job with
            100% satisfaction. We’re dedicated to helping you spend more time
            enjoying the ride.
          </p>
        <img src="http://www.rustylinc.com/ASSETS/R%20Carousel%20images/R5.jpg"/>
        </div>
        <div className="home-right">
        <div className="hours">
          <h3>BUSINESS HOURS</h3>
          <h5>TUES-FRI: 9:00 AM TO 6:00 PM</h5>
          <h5>SAT: 10:00 AM T0 3:00 PM</h5>
          <h5>SUN-MON: CLOSED</h5>
          <h3>CONTACT</h3>
          <h5>(801) 709 6511</h5>
          <h5>RUSTYSLINC@GMAIL.COM</h5>
          <h3>LOCATION</h3>
          <h5>575 E 600 S</h5>
          <h5>Provo, UT 84606</h5>
        </div>
        <div className="distribute">
        <h3>WE DISTRIBUTE</h3>
        <p>
        We partner with the best brands on the market in order to ensure that your bike leaves our shop in perfect condition. Below are several of the brands we distribute at Rustys :
        </p>
        <img src="http://www.rustylinc.com/ASSETS/rustys_logos.png"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
