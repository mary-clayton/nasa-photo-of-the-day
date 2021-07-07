import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

const NasaCard = props => {
  return (
    <div className="nasaCards" key={props.key}>
      <Card className="cards">
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardImg bottom width="100%" src={props.url} alt="Card image cap" />
          <CardText className="cardtext">{props.description}</CardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>)
    }
    
export default NasaCard;

