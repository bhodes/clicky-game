//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/jumbotron";
import FriendCard from "./components/friendCard";
import player from "./players.json";
import "./App.css";

class App extends Component {
  state = {
    player,
    clickedPlayer: [],
    score: 0
  };

  imageClick = event => {
    const currentPlayer = event.target.alt;
    const PlayerAlreadyClicked =
      this.state.clickedPlayer.indexOf(currentPlayer) > -1;


    if (PlayerAlreadyClicked) {
      this.setState({
        player: this.state.player.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
        alert("You lose. Play again?");


    } else {
      this.setState(
        {
          player: this.state.player.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayer: this.state.clickedPlayer.concat(
            currentPlayer
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 9) {
            alert("Yay! You Win!");
            this.setState({
              player: this.state.player.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPlayer: [],
              score: 0
            });
          }
        }
      );
    }
  };


  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.player.map(player => (
            <FriendCard
              imageClick={this.imageClick}
              id={player.id}
              key={player.id}
              image={player.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;