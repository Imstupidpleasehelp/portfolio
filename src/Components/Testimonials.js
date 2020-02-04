import React, { Component } from 'react';

class Testimonials extends Component {
  render() {


    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns ">
               <h1><span>Links</span></h1>
            </div>

            <div className="twelve columns flex-container links">
                     <a href="www.google.com">
                      <div className="card left">
                        <img className="card-img-top" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fdvmjnjyyg6iz.jpg&f=1&nofb=1' alt="" />
                        <div className="card-body">
                          <h4 className="card-title">Title</h4>
                          <p className="card-text">Body</p>
                        </div>
                      </div>
                      </a>
                      <div className="card right">
                        <img className="card-img-top" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fdvmjnjyyg6iz.jpg&f=1&nofb=1' alt="" />
                        <div className="card-body">
                          <h4 className="card-title">Title</h4>
                          <p className="card-text">Body</p>
                        </div>
                      </div>
                      <div className="card right2">
                        <img className="card-img-top" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fdvmjnjyyg6iz.jpg&f=1&nofb=1' alt="" />
                        <div className="card-body">
                          <h4 className="card-title">Title</h4>
                          <p className="card-text">Body</p>
                        </div>
                      </div>
                  
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
