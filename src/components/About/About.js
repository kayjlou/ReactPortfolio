import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'
import './About.css'
class About extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs='6'>One
            <Card>
                <CardImg top width='100%' src='data:image/jpeg;base64,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' />
                <CardBody>
                  <CardTitle>About Me</CardTitle>
                  <CardText>loremasdsakjdkasjdakhdkajhdkajhdkah ajdkashd asdhadh asdjkad
                  </CardText>
                </CardBody>
              </Card>
            </Col>


            <Col xs={{ size: 3, offset: 3 }}>
              <Card>
                <CardTitle>Social Links</CardTitle>
                <CardText>
                  <a className='social' href='#'>Linked In</a><br />
                  <a className='social' href='#'>Twitter</a><br />
                  <a className='social' href='#'>Github</a><br />
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default About
