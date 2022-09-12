import { useState } from "react";
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

const data = [
  {
    coldStore: "MOVELLE",
    scowNumber: "W345",
    fishType: "Tuna",
    netWeight: 1080,
  },
  {
    coldStore: "COSMO",
    scowNumber: "AF3012",
    fishType: "Salmon",
    netWeight: 1140,
  },
  {
    coldStore: "MOVELLE",
    scowNumber: "LF310",
    fishType: "Cat Fish",
    netWeight: 1080,
  },
];

const shipSideData = () => {
  const [entrie, setEntrie] = useState(data);

  const addNewEntry = (newEntry) => {
    setEntrie({
      data: [...entrie, newEntry],
    });
  };

  const categories = {};
  for (const item of entrie) {
    if (item.coldStore in categories) {
      categories[item.coldStore].push(item);
    } else {
      categories[item.coldStore] = [item];
    }
  }

  return (
    <div>
      <Row style={{ paddingTop: "40px" }}>
        <Col>
          <ScaleForm addEntry={addNewEntry} />
        </Col>

        {/* Accordion */}

        <Col className="collapsible">
          <Accordion>
            {Object.entries(categories).map((entry) => {
              const category = entry[0];
              const itemList = entry[1];

              return (
                <Accordion.Item eventKey={category} key={category}>
                  <Accordion.Header>{category}</Accordion.Header>
                  <Accordion.Body>
                    {itemList.map((item) => (
                      <span key={item.id}>{item.scowNumber} </span>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
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
};

export default shipSideData;
