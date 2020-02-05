import React, { Component } from 'react';
class Header extends Component {
  render() {

    

    return (
       
      <header id="home">
      
      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll topnav" href="#home">Home</a></li>
            <li><a className="smoothscroll topnav" href="#skills">Skills</a></li>
            <li><a className="smoothscroll topnav" href="#portfolio">Projects</a></li>
            
	         
            
            <li><a className="smoothscroll topnav" href="#about">Links and Resumé</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Dylan Bozarth</h1>
            <h3 className='textwhite'>A web developer from Spokane, WA</h3>
            
            
         </div>
      </div>

      
      
   </header>
    );
  }
}

export default Header;
