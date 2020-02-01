import React from 'react'
import Particles from 'react-particles-js';



export const Background = ()  => (

<Particles className="spacebackground"
    params={{
	    "particles": {
	        "number": {
	            "value": 800,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 2,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": false,
	            "speed": .2,
	            "direction": "random",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 8,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 600,
	                "duration": 3
	            }
          }
	    }
}} /> );