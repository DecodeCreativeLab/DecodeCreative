const config ={
    "background": {
      "color": {
        "value": "#ffffff"
      },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "fullScreen": {
      "zIndex": 1
    },
    "detectRetina": false,
    "fpsLimit": 30,
    "interactivity": {
      "events": {
        "onClick": {
          "mode": "push"
        },
        "onDiv": {
          "selectors": "#repulse-div",
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "bubble": {
          "distance": 40,
          "duration": 2,
          "opacity": 8,
          "size": 6
        },
        "grab": {
          "distance": 400
        },
        "slow": {
          "factor": 1,
          "radius": 0
        }
      }
    },
    "particles": {
      "color": {
        "value": "#000000"
      },
      "links": {
        "color": {
          "value": "#000000"
        },
        "distance": 30,
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "default": "bounce",
          "bottom": "bounce",
          "left": "bounce",
          "right": "bounce",
          "top": "bounce"
        },
        "speed": 1
      },
      "number": {
        "density": {
          "area": 2000
        },
        "value": 200
      },
      "opacity": {
        "value": {
          "min": 0.05,
          "max": 0.4
        },
        "animation": {
          "enable": true,
          "minimumValue": 0.05
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": 1,
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      }
    },
    "polygon": {
      "draw": {
        "enable": true,
        "stroke": {
          "color": {
            "value": "rgba(0,0,0,0.2)"
          },
          "width": 0.5,
          "opacity": 0.2
        }
      },
      "enable": true,
      "inline": {
        "arrangement": "equidistant"
      },
      "move": {
        "radius": 10,
        "type": "path"
      },
      "scale": 0.5,
      "type": "inline",
      "url": "../images/logo/logo.svg"
    }
  };

tsParticles.load("tsparticles", config);