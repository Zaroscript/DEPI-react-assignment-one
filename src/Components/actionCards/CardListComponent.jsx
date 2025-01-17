import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";
import {
  faChartLine,
  faHouseCircleCheck,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import card1Img from "../../assets/img/01.png"
import card2Img from "../../assets/img/02.png"
import card3Img from "../../assets/img/03.png"

// Array of card data
const cardData = [
  {
    bgClass: "bg-primary-subtle",
    icon: faHandHoldingDollar,
    title: "Buy a property",
    buttonLabel: "Find a home",
    imageSrc: card1Img,
  },
  {
    bgClass: "bg-info",
    icon: faHouseCircleCheck,
    title: "Sell a property",
    buttonLabel: "Place an ad",
    imageSrc: card2Img,
  },
  {
    bgClass: "bg-warning-subtle",
    icon: faChartLine,
    title: "Rent a property",
    buttonLabel: "Find a rental",
    imageSrc: card3Img,
  },
];

class CardListComponent extends Component {
  render() {
    return (
      <Container>
        <Row className="g-4">
          {cardData.map((card, index) => (
            <Col key={index} md={6} lg={4}>
              <CardComponent
                title={card.title}
                bgClass={card.bgClass}
                icon={card.icon}
                buttonLabel={card.buttonLabel}
                imageSrc={card.imageSrc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CardListComponent;
