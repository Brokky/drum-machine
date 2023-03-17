import React, { useEffect } from 'react'

import firstAudio from './audio/Cev_H2.mp3'
import secondAudio from './audio/Dsc_Oh.mp3'
import thirdAudio from './audio/Heater-1.mp3'
import fourthAudio from './audio/Heater-2.mp3'
import fifthAudio from './audio/Heater-3.mp3'
import sixthAudio from './audio/Heater-4_1.mp3'
import seventhAudio from './audio/Heater-6.mp3'
import eighthAudio from './audio/Kick_n_Hat.mp3'
import ninethAudio from './audio/RP4_KICK_1.mp3'


function App() {

  const music = {
    'q': {
      name: 'Closed HH',
      src: firstAudio,
    },

    'w': {
      name: 'Open HH',
      src: secondAudio,
    },

    'e': {
      name: 'Heater 1',
      src: thirdAudio,
    },

    'a': {
      name: 'Heater 2',
      src: fourthAudio,
    },

    's': {
      name: 'Heater 3',
      src: fifthAudio,
    },

    'd': {
      name: 'Heater 4',
      src: sixthAudio,
    },

    'z': {
      name: 'Clap',
      src: seventhAudio,
    },

    'x': {
      name: 'Kick-n\'-Hat',
      src: eighthAudio,
    },

    'c': {
      name: 'Kick',
      src: ninethAudio,
    },

  }

  const handleClick = (e) => {
    e.target.children[0].play();
    document.querySelector('#display').innerText = music[e.target.id].name;
  }

  const handleKeyDown = (e) => {

    switch (e.key) {
      case 'q':
      case 'w':
      case 'e':
      case 'a':
      case 's':
      case 'd':
      case 'z':
      case 'x':
      case 'c':
        document.getElementById(e.key).children[0].play();
        document.querySelector('#display').innerText = music[e.key].name;
        document.getElementById(e.key).animate([
          {
            transform: 'scale(1.1)',
            background: 'rgb(93, 0, 19)',
            color: 'lightgray',
          }, 
          {
            transform: 'scale(1)',
            background: 'darkred',
            color: 'black',
          }
        ],
          {
            duration: 500,
          }
        );
        break;
        default:
          console.log('wrong input');
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="drum-machine">
      <p id="display"></p>
      <div className="buttons">
        <div className="drum-pad" id='q' onClick={handleClick}>
          <audio src={firstAudio}></audio>
          Q
        </div>
        <div className="drum-pad" id='w' onClick={handleClick}>
          <audio src={secondAudio}></audio>
          W
        </div>
        <div className="drum-pad" id='e' onClick={handleClick}>
          <audio src={thirdAudio}></audio>
          E
        </div>
        <div className="drum-pad" id='a' onClick={handleClick}>
          <audio src={fourthAudio}></audio>
          A
        </div>
        <div className="drum-pad" id='s' onClick={handleClick}>
          <audio src={fifthAudio}></audio>
          S
        </div>
        <div className="drum-pad" id='d' onClick={handleClick}>
          <audio src={sixthAudio}></audio>
          D
        </div>
        <div className="drum-pad" id='z' onClick={handleClick}>
          <audio src={seventhAudio}></audio>
          Z
        </div>
        <div className="drum-pad" id='x' onClick={handleClick}>
          <audio src={eighthAudio}></audio>
          X
        </div>
        <div className="drum-pad" id='c' onClick={handleClick}>
          <audio src={ninethAudio}></audio>
          C
        </div>
      </div>
    </div>
  );
}

export default App;
