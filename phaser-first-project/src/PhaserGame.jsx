import React, { useEffect } from "react";
import Phaser from "phaser";
import GameScene from "./GameScene";

function PhaserGame() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 800,
      parent: "game-container",
      scene: [GameScene],
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  });
  return <div id="game-container"></div>;
}

export default PhaserGame;
