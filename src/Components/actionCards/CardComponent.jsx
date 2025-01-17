import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import {
  faChartLine,
  faHouseCircleCheck,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import "./actioncards.css";

class CardComponent extends Component {
  render() {
    const { bgClass, icon, title, buttonLabel, imageSrc } = this.props;

    return (
      <Card
        className={`hover-effect-scale ${bgClass} text-center border-0 overflow-hidden`}
      >
        <Card.Body className="pt-sm-5 pb-3">
          <FontAwesomeIcon icon={icon} size="3x" className="my-3 mt-sm-0" />
          <Card.Title className="h5 mb-0">{title}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex flex-column align-items-center gap-4 gap-sm-5 bg-transparent border-0 p-0">
          <Button variant="dark" href="#" className="stretched-link mx-4 fs-6">
            {buttonLabel}
          </Button>
          <img src={imageSrc} alt={title} className="img-fluid" />
        </Card.Footer>
      </Card>
    );
  }
}

export default CardComponent;
