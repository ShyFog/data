// This file defines every single item and block in the game
// And their properties like hitbox, drops


// Simple full-block solid hitbox
const SIMPLE_SOLID_HITBOX = [{
  "type": "solid",
  "x": 0,
  "y": 0,
  "width": 1,
  "height": 1,
  "rotation": 0
}];
// Simple full-block hitbox, but with no collision
const SIMPLE_HITBOX = [{
  "type": "none",
  "x": 0,
  "y": 0,
  "width": 1,
  "height": 1,
  "rotation": 0
}];

var items = [];

// Drop functions
function simpleDrop(item, amount) {
  return ({ world, ws, giveItem, sendPlayerData, broadcastPacket }) => {
    giveItem(world.players[ws.username], item, amount);
    broadcastPacket(client => sendPlayerData(client, ws.username));
  };
}

function randomizedDrop(item, minAmount, maxAmount) {
  return ({ world, ws, giveItem, sendPlayerData, broadcastPacket }) => {
    giveItem(world.players[ws.username], item, minAmount + Math.floor(Math.random() *(maxAmount - minAmount + 1)));
    broadcastPacket(client => sendPlayerData(client, ws.username));
  };
}

// Utilities for registering common types of blocks
function registerBlock(id, overrides) {
  items[id] = Object.assign({
    "texture": () => ({
      "file": `/block/${id.split(":")[1]}.png`
    }),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "drop": simpleDrop(id, 1),
    "placeable": true
  }, overrides || {});
  return items[id];
}

function registerItem(id, overrides) {
  items[id] = Object.assign({
    "texture": () => ({
      "file": `/item/${id.split(":")[1]}.png`
    }),
    "hitboxes": [],
    "stackSize": 64,
    "drop": () => {},
    "placeable": false
  }, overrides || {});
  return items[id];
}

// Grass are blocks without a solid hitbox, have a special tint depending on the biome, drop nothing
function registerGrass(id, overrides) {
  return registerBlock(id, Object.assign({
    "texture": ({ biome }) => ({
      "file": grassTint(id, `/block/${id.split(":")[1]}.png`, biome)
    }),
    "hitboxes": SIMPLE_HITBOX,
    "drop": () => {}
  }, overrides || {}));
}

// Flowers are just blocks without a solid hitbox
function registerFlower(id, overrides) {
  return registerBlock(id, Object.assign({
    "hitboxes": SIMPLE_HITBOX
  }, overrides || {}));
}

// Leaves are solid blocks with a special tint depending on the biome
function registerLeaves(id, overrides) {
  return registerBlock(id, Object.assign({
    "texture": ({ biome }) => ({
      "file": leavesTint(id, `/block/${id.split(":")[1]}.png`, biome)
    })
  }, overrides || {}));
}

// Registering overworld ore means registering both stone and deepslate variants at once
function registerOverworldOre(id, overrides) {
  return [
    registerBlock(id, overrides),
    registerBlock(`${id.split(":")[0]}:deepslate_${id.split(":")[1]}`, overrides)
  ];
}

// Registering trees means registering log, stripped log, leaves, planks and other blocks made from a tree type
function registerTree(id, overrides) {
  return [
    registerBlock(id + "_log", overrides),
    registerBlock(`${id.split(":")[0]}:stripped_${id.split(":")[1]}_log`, overrides),
    registerLeaves(id + "_leaves", Object.assign({
      "drop": () => {}
    }, overrides)),
    registerBlock(id + "_planks", overrides)
  ];
}

// General terrain blocks
registerBlock("shyfog:stone", {
  "drop": simpleDrop("shyfog:cobblestone", 1)
});
registerBlock("shyfog:cobblestone");
registerBlock("shyfog:deepslate", {
  "drop": simpleDrop("shyfog:cobbled_deepslate", 1)
});
registerBlock("shyfog:cobbled_deepslate");
registerBlock("shyfog:dirt");
registerBlock("shyfog:grass_block", {
  "texture": () => ({
    "file": "/block/grass_block_side.png"
  }),
  "drop": simpleDrop("shyfog:dirt", 1)
});
registerBlock("shyfog:bedrock", {
  "drop": () => {}
});
registerBlock("shyfog:sand");
registerBlock("shyfog:sandstone");
registerBlock("shyfog:red_sandstone");
registerBlock("shyfog:obsidian");

// Plants
registerGrass("shyfog:short_grass");
registerGrass("shyfog:tall_grass_top");
registerGrass("shyfog:tall_grass_bottom");
registerBlock("shyfog:cactus", {
  "texture": () => ({
    "file": "/block/cactus_side.png"
  })
});

// Flowers
registerFlower("shyfog:dandelion");
registerFlower("shyfog:poppy");
registerFlower("shyfog:blue_orchid");
registerFlower("shyfog:allium");
registerFlower("shyfog:azure_bluet");
registerFlower("shyfog:white_tulip");
registerFlower("shyfog:red_tulip");
registerFlower("shyfog:pink_tulip");
registerFlower("shyfog:orange_tulip");
registerFlower("shyfog:oxeye_daisy");
registerFlower("shyfog:cornflower");

// Trees
registerTree("shyfog:oak");
registerTree("shyfog:birch");
registerTree("shyfog:spruce");
registerTree("shyfog:dark_oak");
registerTree("shyfog:acacia");
registerTree("shyfog:jungle");
registerTree("shyfog:mangrove");
registerTree("shyfog:cherry");
registerTree("shyfog:pale_oak");

// Ores
registerOverworldOre("shyfog:coal_ore", {
  "drop": simpleDrop("shyfog:coal", 1)
});
registerOverworldOre("shyfog:copper_ore", {
  "drop": randomizedDrop("shyfog:raw_copper", 2, 5)
});
registerOverworldOre("shyfog:iron_ore", {
  "drop": simpleDrop("shyfog:raw_iron", 1)
});
registerOverworldOre("shyfog:lapis_ore", {
  "drop": randomizedDrop("shyfog:lapis_lazuli", 4, 9)
});
registerOverworldOre("shyfog:redstone_ore", {
  "drop": randomizedDrop("shyfog:redstone", 4, 5)
});
registerOverworldOre("shyfog:gold_ore", {
  "drop": simpleDrop("shyfog:raw_gold", 1)
});
registerOverworldOre("shyfog:diamond_ore", {
  "drop": simpleDrop("shyfog:diamond", 1)
});
registerOverworldOre("shyfog:emerald_ore", {
  "drop": simpleDrop("shyfog:emerald", 1)
});

// Materials
registerItem("shyfog:coal");
registerItem("shyfog:raw_copper");
registerItem("shyfog:copper_ingot");
registerItem("shyfog:raw_iron");
registerItem("shyfog:iron_ingot");
registerItem("shyfog:lapis_lazuli");
registerItem("shyfog:redstone");
registerItem("shyfog:raw_gold");
registerItem("shyfog:gold_ingot");
registerItem("shyfog:diamond");
registerItem("shyfog:emerald");

// Other
registerItem("shyfog:charcoal");
registerItem("shyfog:apple");

if (typeof game !== "undefined") {
  game.items = items;
}
if (typeof module !== "undefined") {
  module.exports = items;
}