import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  this.state = {
portfolio: []


  };
  }
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
   

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns projects">

            <h1>Actions speak louder than words</h1>

            
              {projects} 
            </div>

            
          </div>
    
   </section>
    );
  }
}

export default Portfolio;