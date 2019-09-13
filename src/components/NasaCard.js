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

// import React from "react";
// import styled from "styled-components";

// const NasaDes = styled.p `
// padding: 5% 0;
// `
// const NasaImg = styled.img`
// padding-top: 3%;
// `

// const NasaCard = (props => {
// const {key, title, date, description, url} = props
// console.log(props);
//   return (
//     <div className="nasaCards" key={key}>
//      <h2>{title}</h2>
//      <h3>Date:{date}</h3>
//        <NasaImg className="nasa-image"
//         alt="NASA pic of the day" src={url}/>
//       <NasaDes className="description">{description}</NasaDes>
//     </div>
//   );
// });
// export default NasaCard;
