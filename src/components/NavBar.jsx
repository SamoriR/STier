import React, { Component } from 'react';
import styled from 'styled-components';

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

const LogoDrop = Item.extend`
  float: left;
  margin-left: 5%;

  &:hover {
    background-color: #ECA400;
  }
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

const ContentDiv = styled.div`
  margin-top: 48px;
  display: block;
  position: absolute;
  background-color: #A31621;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Content = styled.a`
  font-family: Aldrich;
  display: none;
  background-color: #A31621;
  min-width: 160px;
  z-index: 1;
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;

  &:hover {
    background-color: #ECA400;
  }
`;




class NavBar extends React.Component {
  constructor(props) {
    super(props);    
    
    this.state = {currentClass: "clearBar", currentNav: <div></div>, showDrop: false};
    this.scroll = this.scroll.bind(this);
    this.update = this.update.bind(this);
    this.makeFullNav = this.makeFullNav.bind(this);
    this.makeMobileNav = this.makeMobileNav.bind(this);
    this.drop = this.drop.bind(this);
  }

  componentDidMount() {
    this.update();
    window.addEventListener('scroll', this.scroll, false);
    window.addEventListener('resize', this.update, false);
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.scroll, false);
    window.removeEventListener('resize', this.update, false);
  }

  makeFullNav(){
    return(
      <div>
        <PageLogo><em>S-Tier</em></ PageLogo>
        <LinkItem><Link href="https://www.netflix.com/browse">netflix</ Link></ LinkItem>
        <LinkItem><Link href="http://www.crunchyroll.com/">crunchyroll</ Link></ LinkItem>
        <LinkItem><Link href="https://www.hulu.com/">hulu</ Link></ LinkItem>
        <ContactItem><Link href="https://www.linkedin.com/in/samori-roberts-phy-cs/">contact</ Link></ ContactItem>
      </ div>
    );
  }

  makeMobileNav(){
    var contents = <div></div>;

    if (this.state.showDrop == true){
      contents = (
        <div>
          <Content href="https://www.netflix.com/browse">netflix</Content>
          <Content href="http://www.crunchyroll.com/">crunchyroll</Content>
          <Content href="https://www.hulu.com/">hulu</Content>
          <Content href="https://www.linkedin.com/in/samori-roberts-phy-cs/">contact</Content>
        </ div>
      );
    }

    return(
      <div>
        <LogoDrop onClick={this.drop}><em>S-Tier   <i className="fa fa-caret-down"></i></em></ LogoDrop>
        <ContentDiv>
          {contents}
        </ ContentDiv>
      </ div>
    );
  }

  drop(){
    console.log(this.state.showDrop);
    if (this.state.showDrop == false){
      this.setState({showDrop: true});

    } else {
      this.setState({showDrop: false});

    }

    this.setState({currentNav: this.makeMobileNav()});
  }

  scroll(e){
    if (window.pageYOffset > 450){
      this.setState({currentClass: "colorBar"});

    } else {
      this.setState({currentClass: "clearBar"});

    }
  }

  update(e){
    if (window.innerWidth < 1002) {
      this.setState({currentNav: this.makeMobileNav()});

    } else {
      this.setState({currentNav: this.makeFullNav()});

    }
  }

  render() {
    return (
      <div>
        <ul className={this.state.currentClass}>
          {this.state.currentNav}
        </ ul>
      </ div>
    );
  }
}

export default NavBar;