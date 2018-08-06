import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class BootNav extends React.Component {
    constructor(props) {
      super(props);    
      
      this.state = {currentClass: "clearBar"};
      this.scroll = this.scroll.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.scroll, false);
    }
  
    scroll(e){
      
      if (window.pageYOffset > 450){
        this.setState({currentClass: "colorBar"});
        
  
      } else {
        this.setState({currentClass: "clearBar"});
  
      }
    }
  
    render() {
      return (
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </ div>
      );
    }
  }
  
  export default BootNav;