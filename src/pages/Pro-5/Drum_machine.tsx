import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css"

export default function Drum_machine() {
    const codesnippet = `
    <div id="root"></div>
    `;

    const codesnippet1 = `
    $padWidth: 100px;
$padHeight: 80px;
@import url('https://fonts.googleapis.com/css?family=Russo+One');

body {
  font-family: Russo One;
}

body {
  user-select: none;
  background-color: lighten(grey, 5%);
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.inner-container {
  outline: 5px solid orange;
  position: relative;
  width: 660px;
  text-align: center;
  background-color: lighten(grey, 20%);
  .pad-bank {
    width: $padWidth * 3 + 32;
    height: $padHeight * 3 + 32;
    display: inline-block;
    margin: 20px;
    .drum-pad {
      position: relative;
      float: left;
      width: $padWidth;
      height: $padHeight;
      margin-right: 10px;
      border-radius: 5px;
      padding-top: 35px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  .logo {
    position: absolute;
    top: 5px;
    right: 10px;
    .inner-logo {
      display: inline-block;
      font-style: italic;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .controls-container {
    width: 240px;
    height: $padHeight * 3 + 32;
    display: inline-block;
    margin: 40px 20px 0 10px;
    vertical-align: top;
    .control {
      width: 100px;
      margin: auto;
      p {
        margin-bottom: 0;
      }
      .select {
        @extend .outer-select;
        .inner {
          @extend .inner-select;
        }
      }
    }
    #display {
      width: 200px;
      background-color: gray;
      margin: 15px auto;
      padding: 15px;
      box-sizing: border-box;
    }
  }
}

.outer-select {
  margin: auto;
  border: 1px solid black;
  width: 50px;
  height: 20px;
  padding: 1px;
  background-color: black;
}

.inner-select {
  width: 23px;
  height: 19px;
  background: blue;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  .inner-container {
    transform: scale(0.7);
  }
}
// CUSTOM RANGE INPUT : Credit : https://github.com/darlanrod/input-range-scss/blob/master/_inputrange.scss

$track-color: #424242 !default;
$thumb-color: blue !default;

$thumb-radius: 0 !default;
$thumb-height: 25px !default;
$thumb-width: 8px !default;
$thumb-shadow-size: 1px !default;
$thumb-shadow-blur: 1px !default;
$thumb-shadow-color: #111 !default;
$thumb-border-width: 0 !default;
$thumb-border-color: #fff !default;

$track-width: 100% !default;
$track-height: 5px !default;
$track-shadow-size: 2px !default;
$track-shadow-blur: 2px !default;
$track-shadow-color: #222 !default;
$track-border-width: 1px !default;
$track-border-color: #000 !default;

$track-radius: 0 !default;
$contrast: 5% !default;

@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {
  box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color,
    0 0 $shadow-size lighten($shadow-color, 5%);
}

@mixin track() {
  width: $track-width;
  height: $track-height;
  cursor: pointer;
  transition: all 0.2s ease;
}

@mixin thumb() {
  @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);
  border: $thumb-border-width solid $thumb-border-color;
  height: $thumb-height;
  width: $thumb-width;
  border-radius: $thumb-radius;
  background: $thumb-color;
  cursor: pointer;
}

[type='range'] {
  -webkit-appearance: none;
  margin: $thumb-height / 2 0;
  width: $track-width;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    @include track();
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-webkit-slider-thumb {
    @include thumb();
    -webkit-appearance: none;
    margin-top: ((-$track-border-width * 2 + $track-height) / 2) -
      ($thumb-height / 2);
  }

  &:focus::-webkit-slider-runnable-track {
    background: lighten($track-color, $contrast);
  }

  &::-moz-range-track {
    @include track();
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-moz-range-thumb {
    @include thumb();
  }

  &::-ms-track {
    @include track();
    background: transparent;
    border-color: transparent;
    border-width: $thumb-width 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: darken($track-color, $contrast);
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-fill-upper {
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-thumb {
    @include thumb();
  }

  &:focus::-ms-fill-lower {
    background: $track-color;
  }

  &:focus::-ms-fill-upper {
    background: lighten($track-color, $contrast);
  }
}

    `;

    const codesnippet2 = `
    /* global React, ReactDOM */
/* eslint-disable react/prop-types, react/no-multi-comp */

// eslint-disable-next-line no-unused-vars
const projectName = 'drum-machine';

// coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (codepen)

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  height: 77,
  marginTop: 13
};

const inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: '3px 3px 5px black'
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad() {
    if (this.props.power) {
      if (this.state.padStyle.backgroundColor === 'orange') {
        this.setState({
          padStyle: inactiveStyle
        });
      } else {
        this.setState({
          padStyle: activeStyle
        });
      }
    } else if (this.state.padStyle.marginTop === 13) {
      this.setState({
        padStyle: inactiveStyle
      });
    } else {
      this.setState({
        padStyle: {
          height: 77,
          marginTop: 13,
          backgroundColor: 'grey',
          boxShadow: '0 3px grey'
        }
      });
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <div
        className='drum-pad'
        id={this.props.clipId}
        onClick={this.playSound}
        style={this.state.padStyle}
        >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    if (this.props.power) {
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={this.props.power}
            updateDisplay={this.props.updateDisplay}
          />
        );
      });
    } else {
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clip='#'
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={this.props.power}
            updateDisplay={this.props.updateDisplay}
          />
        );
      });
    }
    return <div className='pad-bank'>{padBank}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    };
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }
  selectBank() {
    if (this.state.power) {
      if (this.state.currentPadBankId === 'Heater Kit') {
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit'
        });
      } else {
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit'
        });
      }
    }
  }
  displayClipName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }
  adjustVolume(e) {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    const powerSlider = this.state.power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const bankSlider =
      this.state.currentPadBank === bankOne
        ? {
            float: 'left'
          }
        : {
            float: 'right'
          };
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal;
      });
    }
    return (
      <div className='inner-container' id='drum-machine'>
        <PadBank
          clipVolume={this.state.sliderVal}
          currentPadBank={this.state.currentPadBank}
          power={this.state.power}
          updateDisplay={this.displayClipName}
        />

        <div className='logo'>
          <div className='inner-logo '>{'FCC' + String.fromCharCode(160)}</div>
          <i className='inner-logo fa fa-free-code-camp' />
        </div>

        <div className='controls-container'>
          <div className='control'>
            <p>Power</p>
            <div className='select' onClick={this.powerControl}>
              <div className='inner' style={powerSlider} />
            </div>
          </div>
          <p id='display'>{this.state.display}</p>
          <div className='volume-slider'>
            <input
              max='1'
              min='0'
              onChange={this.adjustVolume}
              step='0.01'
              type='range'
              value={this.state.sliderVal}
            />
          </div>
          <div className='control'>
            <p>Bank</p>
            <div className='select' onClick={this.selectBank}>
              <div className='inner' style={bankSlider} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

    `;
  return (
    <div>
        <DesignTypeScript />

        <h1>
            Drum machine
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>

        <h1>
            CSS
        </h1>

        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>


        <h1>
            Javascript
        </h1>

        <pre>
            <code>
                {codesnippet2}
            </code>
        </pre>
    </div>
  )
}
