import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class ShipSide extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Data was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ship-side">
        <Row style={{ textAlign: "center", paddingTop: "50px" }}>
          <Col>
            <form onSubmit={this.handleSubmit}>
              <label id="snumber">
                Scrow Number 
                </label><br/>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              
              <input type="submit" value="Submit" />
            </form>
          </Col>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
      </div>
    );
  }
}
export default ShipSide;
