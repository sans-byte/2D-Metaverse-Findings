import "./App.css";

function App() {
  const speedDown = 300;
  const config = {
    type: Phaser.WEBGL,
    width: 500,
    height: 500,
    canvas: gameCanvas,
    physics: {
      default: "arcade",
      arcade: {
        gravity: {
          y: speedDown,
        },
      },
    },
    scene: [GameScene],
  };

  const game = Phaser.Game(config);

  return <></>;
}

export default App;
