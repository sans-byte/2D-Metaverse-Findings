import Phaser from "phaser";
import Map from "./assets/First.json";
import Tiles from "./assets/Terrain (32x32).png";
class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }
  preload() {
    // Load the tileset image
    this.load.image("tiles", Tiles);

    // Load the map JSON
    this.load.tilemapTiledJSON("map", Map);
  }
  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("Terrain (32x32)", "tiles");

    // Create a layer from the map
    map.createLayer("Tile Layer 1", tileset, 0, 0);

    // Optionally set collision properties
    map.setCollisionByProperty({ collides: true });
  }
  update() {
    // Handle game logic like player movement, interactions, etc.
  }
}

export default GameScene;
