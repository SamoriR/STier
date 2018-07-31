import React, { Component } from 'react';
import styled from 'styled-components';

const Items = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #27476E;
  font-size: 7;
  margin-bottom: .5em;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Item = styled.li`
  font-family: Aldrich;
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  font-size: 18px;
`;

const PageLogo = Item.extend`
  float: left;
  margin-left: 5%;
`;

const LinkItem = Item.extend`
  float: left;

  &:hover {
    background-color: #ECA400;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const ContactItem = Item.extend`
  float: right;
  margin-right: 5%;

  &:hover {
    background-color: #ECA400;
  }
`;


const NavComp = (
  <div>
    <Items>
      <PageLogo><em>S-Tier</em></ PageLogo>
      <LinkItem><Link href="https://www.netflix.com/browse">netflix</ Link></ LinkItem>
      <LinkItem><Link href="http://www.crunchyroll.com/">crunchyroll</ Link></ LinkItem>
      <LinkItem><Link href="https://www.hulu.com/">hulu</ Link></ LinkItem>
      <ContactItem><Link href="https://www.linkedin.com/in/samori-roberts-phy-cs/">contact</ Link></ ContactItem>
    </ Items>
  </ div>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);    
    
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll());
  }

  scroll(e){

  }
  render() {
    return NavComp;
  }
}

export default NavBar;