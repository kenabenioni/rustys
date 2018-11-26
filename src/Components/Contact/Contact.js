import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Contact">
        <h3>BUSINESS HOURS</h3>
        <h5>
          TUES-FRI: 9:00 AM TO 6:00 PM
        </h5>
        <h5>
        SAT: 10:00 AM T0 3:00 PM
        </h5>
        <h5>
        SUN-MON: CLOSED
        </h5>
      </div>
    );
  }
}

export default Contact;
