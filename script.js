
"use strict";

const restartButton = document.querySelector("#restart-button");
const boardHTML = document.querySelector("gameboard").innerHTML

// Player object - using factory

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };
};


// Gameboard object (including gameboard array)

const Gameboard = () => {
    let gameboard = [];
    let

    const render )= () =>
}



const Game = (() => {
    let currentPlayerIndex = 0;
    let gameOver = false;
})();




// Restart game

restartButton.addEventListener("click", () => {
    restart();
}

function restart () {

}


// Define players & kick-off the game

const player_x = Player("X");
const player_o = Player("O");
player_x.play();




