import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../css/ShipSide.css";
import { GiDoubleFish } from "react-icons/gi";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ScaleInfo from "./ScaleInfo";
import ScaleForm from "./ScaleForm";
import Table from "react-bootstrap/Table";
import ModalMenu from "./ModalMenu";

class ShipSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { scowNumber: "W345", fishType: "Tuna", netWeight: 1080 },
        { scowNumber: "AF3012", fishType: "Salmon", netWeight: 1140 },
        { scowNumber: "LF310", fishType: "Cat Fish", netWeight: 1080 },
      ],
    };
  }

  addNewEntry = (newEntry) => {
    this.setState({
      entries: [...this.state.entries, newEntry],
    });
  };

  render() {
    const data = [
      { scrow: "0008", type: "Tuna", net: 1080 },
      { scrow: "0009", type: "Salmon", net: 1140 },
      { scrow: "0010", type: "Cat Fish", net: 1080 },
    ];

    return (
      <div className="ship-side">
        <Row style={{ paddingTop: "40px" }}>
          <Col>
            <ScaleForm addEntry={this.addNewEntry} />
          </Col>

          {/* Accordion */}

          <Col className="collapsible">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    COLDSTORE 1
                    <span style={{ float: "right" }}>
                      <b style={{ color: "red", fontSize: 20 }}>
                        {" "}
                        {this.state.entries.length}
                      </b>{" "}
                      Scows
                      <GiDoubleFish
                        size={25}
                        color="red"
                        style={{ margin: "0 10px" }}
                      />
                      <b>3300 kg</b>
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <table
                    className="dwr-table"
                    width="100%"
                    border="1px"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Scow</th>
                        <th>Gross</th>
                        <th>Tare</th>
                        <th>Type</th>
                        <th>Net</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.entries.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>1</td>
                            <td>{item.scowNumber}</td>
                            <td className="text-muted">{item.grossWeight}</td>
                            <td className="text-muted">{item.tareWeight}</td>
                            <td>{item.fishType}</td>
                            <td>{item.netWeight}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/**
                
                  <Button style={{ marginLeft: 100, marginTop: 5 }}>
                  Dispatch
                  </Button>
                */}
                  <ModalMenu />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>COLDSTORE 2</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <table>
                    <tr>
                      <th>Scrow No:</th>
                      <th>Fish Type</th>
                      <th>Net Weight</th>
                    </tr>
                    {data.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.scrow}</td>
                          <td>{val.type}</td>
                          <td>{val.net}</td>
                        </tr>
                      );
                    })}
                  </table>
                  <Button style={{ marginLeft: 100, marginTop: 5 }}>
                    Dispatch
                  </Button>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>COLDSTORE 3</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <table>
                    <tr>
                      <th>Scrow No:</th>
                      <th>Fish Type</th>
                      <th>Net Weight</th>
                    </tr>
                    {data.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.scrow}</td>
                          <td>{val.type}</td>
                          <td>{val.net}</td>
                        </tr>
                      );
                    })}
                  </table>
                  <Button style={{ marginLeft: 100, marginTop: 5 }}>
                    Dispatch
                  </Button>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>COLDSTORE 4</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <table>
                    <tr>
                      <th>Scrow No:</th>
                      <th>Fish Type</th>
                      <th>Net Weight</th>
                    </tr>
                    {data.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.scrow}</td>
                          <td>{val.type}</td>
                          <td>{val.net}</td>
                        </tr>
                      );
                    })}
                  </table>
                  <Button style={{ marginLeft: 100, marginTop: 5 }}>
                    Dispatch
                  </Button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Col>

          {/* Summary Section */}
          <Col>
            <form
              style={{
                boxShadow: "2px 3px 10px 1px #000",
                height: "70vh",
                margin: "20px",
                padding: "px ",
                paddingRight: "",
              }}
            >
              <div className="form-group">
                <h5 style={{ textAlign: "center" }}>Summary</h5>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ShipSide;
