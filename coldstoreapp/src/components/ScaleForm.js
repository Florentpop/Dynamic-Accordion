import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class ScaleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scowNumber: "",
      tareWeight: "",
      grossWeight: "",
      fishType: "",
      coldStore: "",
      netWeight: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    //Calculation Part

    if (e.target.name === "tareWeight") {
      this.setState({ netWeight: this.state.grossWeight - e.target.value });
    }
    if (e.target.name === "grossWeight") {
      this.setState({ netWeight: e.target.value - this.state.tareWeight });
    }
  };

  //handleSubmit(event) {
  //alert("Data was submitted: " + this.state.value);
  //  event.preventDefault();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      scowNumber: this.state.scowNumber,
      tareWeight: this.state.tareWeight,
      grossWeight: this.state.grossWeight,
      fishType: this.state.fishType,
      coldStore: this.state.coldStore,
      netWeight: this.state.netWeight,
    };
    this.props.addEntry(newEntry);
    this.setState({
      scowNumber: "",
      tareWeight: "",
      grossWeight: "",
      fishType: "",
      coldStore: "",
      netWeight: "0",
    });
  };

  render() {
    return (
      <div>
        <Form
          style={{
            boxShadow: "2px 3px 10px 1px #000",
            marginLeft: "20px",
            margin: "0 20px",
            padding: "15px ",
            //paddingRight: "-18px",
            borderRadius: "10px",
          }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group" style={{ marginTop: "15px" }}>
            <label for="scowNumber">Scow Number</label>
            <input
              type="text"
              className="form-control"
              // id="scowNumber"
              name="scowNumber"
              value={this.state.scowNumber}
              onChange={this.handleChange}
              aria-describedby="snumberHelp"
            />
          </div>
          <div className="form-group">
            <label for="tareWeight">Tare Weight</label>
            <input
              type="number"
              className="form-control"
              //id="taleWeight"
              name="tareWeight"
              value={this.state.tareWeight}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="grossWeight">Gross Weight</label>
            <input
              type="number"
              class="form-control"
              id="grossWeight"
              name="grossWeight"
              value={this.state.grossWeight}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Form.Label
              className="quotesFormLabelText"
              style={{ marginBottom: "0" }}
            >
              Fish Type
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="quotesFormsControl"
              name="fishType"
              value={this.state.fishType}
              onChange={this.handleChange}
            >
              <option> - - - Select Tuna Specie - - - </option>
              <option value="SK 1&2">SK 1.2</option>
              <option value="SK 3">SK 3</option>
              <option value="YF 1&2">YF 1.2</option>
              <option value="YF 3">YF 3</option>
              <option value="SODA">SODA</option>
              <option value="YFGG">YFGG</option>
              <option value="BEGG">BEGG</option>
              <option value="BYCATCH">BYCATCH</option>
              <option value="SW/DF">SW/DF</option>
              <option value="OGA">OGA</option>
            </Form.Select>
          </div>

          <div className="form-group">
            <Form.Label
              className="quotesFormLabelText"
              style={{ marginBottom: "0" }}
            >
              Cold Store
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="quotesFormsControl"
              name="coldStore"
              value={this.state.coldStore}
              onChange={this.handleChange}
            >
              <option>- - - Select ColdStore - - - </option>
              <option value="MOVELLE">MOVELLE</option>
              <option value="COSMO">COSMO</option>
              <option value="PFC">PFC</option>
              <option value="OVERSEAS">OVERSEAS</option>
            </Form.Select>
          </div>

          <div className="form-group" style={{ marginTop: "10px" }}>
            <h5>
              Net Weight :
              <span style={{ color: "red", marginLeft: 10 }}>
                {this.state.netWeight}
              </span>
            </h5>
          </div>
          <button type="submit" class="btn btn-primary" id="form-group">
            ADD
          </button>
        </Form>
      </div>
    );
  }
}

export default ScaleForm;
