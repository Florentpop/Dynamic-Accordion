import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/ShipSide.css";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

class ShipSide extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.fishData = ["Tuna", "Tilapia", "Herrings", "Salmon "];
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
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <form>
              <div className="form-group">
                <label for="snumber">Scow Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="snumber"
                  aria-describedby="snumberHelp"
                />
              </div>
              <div className="form-group">
                <label for="taleweight">Tale Weight</label>
                <input type="number" class="form-control" id="taleweight" />
              </div>
              <div className="form-group">
                <label for="grossweight">Gross Weight</label>
                <input type="number" class="form-control" id="grossweight" />
              </div>
              <div className="form-group" >
                <label for="taleweight">Fish Type</label><br/>
                <DropDownListComponent id="ddlelement" dataSource={this.fishData} popupHeight="300px" popupWidth="300px" placeholder="Select a fish">
                
                </DropDownListComponent>
              </div>
              <div className="form-group">
                <label for="coldstore">Cold Store</label>
                <input type="text" class="form-control" id="coldstore" />
              </div>
                 <div className="form-group">
                 <h4>Net Weight    0000</h4>
                 </div>
              <button type="submit" class="btn btn-primary" id="form-group">
                ADD
              </button>
            </form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
export default ShipSide;
