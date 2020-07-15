import React from 'react'
import { ListGroup, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const ApartmentList = (props) => {
const { apartments } = props
  return (
    <React.Fragment>
      { apartments.map((apartment, index) => {
        return (
          <div key={index}>
          <Card className="card" body inverse style={{ backgroundColor: '#fff', borderColor: '#333' }}>
              <ListGroup key={index}>
                  <CardImg top width="100%" margin="0" padding="0" src={ apartment.image } alt="Card image cap" />
                  <CardBody>
                  <CardTitle>{apartment.address}</CardTitle>
                  <CardSubtitle>{apartment.city}, {apartment.state}</CardSubtitle>
                  <CardText>{apartment.manager_id}</CardText>
                  <Button href="/" color="info">More Info</Button>
                  </CardBody>
              </ListGroup>
          </Card>
          </div>
        );
      })}
    </React.Fragment>
  );
}
export default ApartmentList
