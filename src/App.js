import React, { Component } from 'react';
import Particles from 'react-particles-js';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import ParticlesBg from "particles-bg";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    let config = {
      num: [30, 15],
      rps: .4,
      radius: [5, 7],
      life: [20, 30],
      v: [1, 2],
      tha: [-40, 40],
      alpha: [5, 0],
      scale: [.4, 0.4],
      position: "all",
      color: ["#ffffff"],
      cross: "bround",
      // emitter: "follow",
      random: 3
    };

    if (Math.random() > 15) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 5,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }
    return ( 
      <div className="App">
      <div className="bubbles"><ParticlesBg type="custom"  config={config} bg={true} /></div>
        <Header data={this.state.resumeData.main} /> 
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.Testimonials} />
        
        
        
       <About data={this.state.resumeData.main}/> 
       
        <Footer data={this.state.resumeData.main}/>
        
      </div>
      
      
    );
  }
}

export default App;
