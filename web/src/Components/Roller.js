import React, { Component } from 'react';

import Character from './Character'

class Roller extends Component {
  constructor() {
    super();
    this.state = { character: "", img: "", roll: false};
  }

  handleOnClick = () => {
    const characters = ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Wrecking Ball", "Zarya", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", "Ana", "Brigitte", "Lúcio", "Mercy", "Moira", "Zenyatta"]
    const imageShortcut = ["dva", "orisa", "reinhardt", "roadhog", "winston", "wrecking-ball", "zarya", "bastion", "doomfist", "genji", "hanzo", "junkrat", "mccree", "mei", "pharah", "reaper", "soldier-76", "sombra", "symmetra", "torbjorn", "tracer", "widowmaker", "ana", "brigitte", "lucio", "mercy", "moira", "zenyatta"]
    const min = 0;
    const max = 28;
    const number = min + (Math.random() * (max - min))
    const rounded = Math.floor(number)
    const character = characters[rounded]
    const url = `https://d1u1mce87gyfbn.cloudfront.net/hero/${imageShortcut[rounded]}/hero-select-portrait.png`
    this.setState({character: character, img: url, roll: true});
  }

  render() {
    return (
      <div className="roller-container">
        <button onClick={this.handleOnClick}>{this.state.roll ? 'Reroll' : 'Click' }</button>
        <Character img={this.state.img} name={this.state.character} />
      </div>
    )
  }

  
}

export default Roller;

