import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/ShipSide.css";
import Form from "react-bootstrap/Form";



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
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <form style={{boxShadow: "2px 3px 10px 1px #000", marginLeft: "20px", padding: "15px ", paddingRight: "-18px"}}>
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
              <Form.Label className="quotesFormLabelText" style={{marginBottom: "0"}}>
             Fish Type
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="quotesFormsControl"
            >
              <option value="Mobile Apps">Tuna</option>
              <option value="Website">Salmon</option>
              <option value="Software">Herrings</option>
              <option value="Other">Other</option>
            </Form.Select>
                
              </div>
              <div className="form-group">
              <Form.Label className="quotesFormLabelText" style={{marginBottom: "0"}}>
              Cold Store
             </Form.Label>
             <Form.Select
               aria-label="Default select example"
               className="quotesFormsControl"
             >
               <option value="Mobile Apps">Main</option>
               <option value="Website">Sub-Station</option>
               <option value="Software">West Side</option>
               <option value="Other">Market</option>
             </Form.Select>
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
