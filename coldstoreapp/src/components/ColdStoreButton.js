import React from "react";
import "../css/ColdStoreButton.css";
import fish from "../images/tunaa.avif";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";
import { GiForklift } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";
import Reefer from '../images/reefer.png';
import {AiOutlineStock} from 'react-icons/ai';
import {TbReport} from 'react-icons/tb';

function ColdStoreButton() {
  return (
    <div className="mainContainer">
      <div className="imageSection">
        <img src={fish} alt="fish" width="100%" height="450" />
      </div>

      <div className="buttonSection">
        <Row className="mx-0">
          <Col>
            <Button
              style={{
                backgroundColor: "#E05096",
                height: "90px",
                width: "120px",
              }}
            >
              <FaTruck style={{ width: "55" }} /> <br />
              Receive
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                backgroundColor: "#483B59",
                height: "90px",
                width: "120px",
              }}
            >
              <GiForklift style={{ width: "55" }} /> <br />
              Transfer
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                backgroundColor: "#615BA5",
                height: "90px",
                width: "120px",
              }}
            >
              <FcSalesPerformance style={{ width: "55" }} /> <br />
              Sales
            </Button>
          </Col>
        </Row>

        <Row className="mx-0" style={{marginTop: "50px"}}>
          <Col>
            <Button
              style={{
                backgroundColor: "#219E72",
                height: "90px",
                width: "120px",
              }}
            >
              <img src={Reefer} alt="Reefer" height="20"/> <br />
              Reefer
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                backgroundColor: "#FFC822",
                height: "90px",
                width: "120px",
              }}
            >
              <AiOutlineStock style={{ width: "55" }} /> <br />
              Stock
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                backgroundColor: "#DF6135",
                height: "90px",
                width: "120px",
              }}
            >
              <TbReport style={{ width: "55" }} /> <br />
              Report
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ColdStoreButton;
