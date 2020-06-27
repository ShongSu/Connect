import React from 'react';
import { Carousel }  from 'react-bootstrap';

export default class Homepage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div style={{background:"Plum", flex:1, display:'flex', justifyContent:'flex-start', flexDirection:"column"}}>
          <Carousel style={{height:"400px", width:"100%"}}>
              <Carousel.Item>
                <div style={{backgroundColor:"blue", height:'400px', width:"100%"}}>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{backgroundColor:"blue", height:'400px', width:"100%"}}>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </div>
              </Carousel.Item>
              
              <Carousel.Item>
                <div style={{backgroundColor:"blue", height:'400px', width:"100%"}}>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          <div style={{height:"600px", width:"100%", backgroundColor:'white'}}> 
            Something Here
          </div>
          <div style={{height:"400px", width:"100%", backgroundColor:'blue'}}> 
            Build your own newwork
          </div>
          <div style={{height:"600px", width:"100%", backgroundColor:'white'}}> 
            Something Here
          </div>
          <div style={{height:"400px", width:"100%", backgroundColor:'blue'}}> 
            Build your own newwork
          </div>
        </div>)
    }
  }
  
  Homepage.propTypes = {
  };