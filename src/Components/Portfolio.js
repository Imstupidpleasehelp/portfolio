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

         <div className="twelve columns collapsed">

            <h1>Actions speak louder than words</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf projects">
              <a href="www.google.com"><div class="card text-left">
                <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi3.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F001%2F051%2F604%2Fc57.jpg&f=1&nofb=1" alt="" />
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
              </a>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;