import React from 'react';
import Contents from './Contents.jsx';
import { Navbar, Nav,Button,Container,Row,Col,Breadcrumb,Form,FormControl}  from 'react-bootstrap';

function NavBar() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Maimai</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/feed_list">Contacts</Nav.Link>
          <Nav.Link href="/feed_explore">Explore</Nav.Link>
          <Nav.Link href="/headline">News</Nav.Link>
          <Nav.Link href="/gossip_list">Discussion</Nav.Link>
          <Nav.Link href="/page1">Jobs</Nav.Link>
          <Nav.Link href="/page3">Recruitment</Nav.Link>
          <Nav.Link href="/page3">Chart</Nav.Link>
        </Nav>
          <Button variant="outline-primary">Log In / Sign Up</Button>
      </Navbar>)
}

function Footer() {
    return (
        <div style={{background:'', color:'blue', height:'200px'}}>
          <Container>
            <Row>
              <Col>Contact</Col>
              <Col>About</Col>
              <Col>Join Us</Col>
            </Row>
            <Row>
              <Col>
                Copyright © maimai.cn. All rights reserved. 京ICP备12005786号-1 | 京公网安备11010802020015号 | 证照中心
              </Col>
            </Row>
          </Container>
        </div>)
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
            <Footer />
        </div>
    );
}