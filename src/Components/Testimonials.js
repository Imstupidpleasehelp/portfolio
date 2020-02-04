import React, { Component } from 'react';

class Testimonials extends Component {
  render() {


    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns ">
               <h1><span className='textwhite'>Links</span></h1>
            </div>

            <div className="twelve columns flex-container links">
                     <a href="https://github.com/Imstupidpleasehelp">
                      <div className="card left">
                        <img className="card-img-top cardimg"  src='https://i.postimg.cc/HsshD8k7/github.png' alt="" />
                        <div className="card-body">
                          <h4 className="card-title textwhite">My github</h4>
                          <p className="card-text textwhite">Where I put large projects</p>
                        </div>
                      </div>
                      </a>
                      <div className="card right"> <a href="https://codepen.io/Dylanbozarth">
                        <img className="card-img-top cardimg" src='https://i.postimg.cc/kGwYRqf4/codepen.png' alt="" />
                        <div className="card-body">
                          <h4 className="card-title textwhite">Codepen</h4>
                          <p className="card-text textwhite">Where small projects are stored</p>
                        </div></a>
                      </div>
                      <div className="card right2"><a href="https://www.freecodecamp.org/dylanbozarth">
                        <img className="card-img-top cardimg" src='https://i.postimg.cc/05CBB0Ps/fcc.png' alt="" />
                        <div className="card-body">
                          <h4 className="card-title textwhite">Free code camp</h4>
                          <p className="card-text textwhite">Where I learned HTML, CSS, and JS</p>
                        </div></a>
                      </div>
                  
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
