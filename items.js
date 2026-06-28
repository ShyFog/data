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

// Simple texture
function simpleTexture(texture) {
  return () => ({
    "file": texture
  });
}

// Grass texture that changes color depending on the biome
function grassTintedTexture(id, texture) {
  return ({ biome }) => ({
    "file": grassTint(id, texture, biome)
  });
}

// Leaves texture that changes color depending on the biome
function leavesTintedTexture(id, texture) {
  return ({ biome }) => ({
    "file": leavesTint(id, texture, biome)
  });
}

// No drop at all
const NO_DROP = () => {};

// Just drop a specific amount of a specific item
function simpleDrop(item, amount) {
  return ({ world, ws, giveItem, sendPacket, PacketType, broadcastPacket }) => {
    giveItem(world.players[ws.username], item, amount);
    sendPacket(ws, PacketType.PLAYER_METADATA, ws.username, {
      "slots": world.players[ws.username].slots
    });
  };
}

// Drop a specific item in a random range as amount
function randomizedDrop(item, minAmount, maxAmount) {
  return ({ world, ws, giveItem, sendPacket, PacketType, broadcastPacket }) => {
    giveItem(world.players[ws.username], item, minAmount + Math.floor(Math.random() *(maxAmount - minAmount + 1)));
    sendPacket(ws, PacketType.PLAYER_METADATA, ws.username, {
      "slots": world.players[ws.username].slots
    });
  };
}

var items = {
  // General terrain blocks
  "shyfog:stone": {
    "texture": simpleTexture("/block/stone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 1.5,
    "drop": simpleDrop("shyfog:cobblestone", 1)
  },
  "shyfog:cobblestone": {
    "texture": simpleTexture("/block/cobblestone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:cobblestone", 1)
  },
  "shyfog:deepslate": {
    "texture": simpleTexture("/block/deepslate.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:cobbled_deepslate", 1)
  },
  "shyfog:cobbled_deepslate": {
    "texture": simpleTexture("/block/cobbled_deepslate.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3.5,
    "drop": simpleDrop("shyfog:cobbled_deepslate", 1)
  },
  "shyfog:dirt": {
    "texture": simpleTexture("/block/dirt.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.5,
    "drop": simpleDrop("shyfog:dirt", 1)
  },
  "shyfog:grass_block": {
    "texture": simpleTexture("/block/grass_block_side.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.6,
    "drop": simpleDrop("shyfog:dirt", 1)
  },
  "shyfog:bedrock": {
    "texture": simpleTexture("/block/bedrock.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": -1,
    "drop": NO_DROP
  },
  "shyfog:sand": {
    "texture": simpleTexture("/block/sand.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.5,
    "drop": simpleDrop("shyfog:sand", 1)
  },
  "shyfog:sandstone": {
    "texture": simpleTexture("/block/sandstone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.8,
    "drop": simpleDrop("shyfog:sandstone", 1)
  },
  "shyfog:red_sandstone": {
    "texture": simpleTexture("/block/red_sandstone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.8,
    "drop": simpleDrop("shyfog:red_sandstone", 1)
  },
  "shyfog:obsidian": {
    "texture": simpleTexture("/block/obsidian.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 50,
    "drop": simpleDrop("shyfog:obsidian", 1)
  },
  // Plants
  "shyfog:short_grass": {
    "texture": grassTintedTexture("shyfog:short_grass", "/block/short_grass.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": NO_DROP
  },
  // TODO: Two tall grass blocks should be combined into one!
  "shyfog:tall_grass_top": {
    "texture": grassTintedTexture("shyfog:tall_grass_top", "/block/tall_grass_top.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:tall_grass_bottom": {
    "texture": grassTintedTexture("shyfog:tall_grass_bottom", "/block/tall_grass_bottom.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:cactus": {
    "texture": simpleTexture("/block/cactus_side.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.4,
    "drop": simpleDrop("shyfog:cactus", 1)
  },
  // Flowers
  "shyfog:dandelion": {
    "texture": simpleTexture("/block/dandelion.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:dandelion", 1)
  },
  "shyfog:poppy": {
    "texture": simpleTexture("/block/poppy.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:poppy", 1)
  },
  "shyfog:blue_orchid": {
    "texture": simpleTexture("/block/blue_orchid.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:blue_orchid", 1)
  },
  "shyfog:allium": {
    "texture": simpleTexture("/block/allium.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:allium", 1)
  },
  "shyfog:azure_bluet": {
    "texture": simpleTexture("/block/azure_bluet.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:azure_bluet", 1)
  },
  "shyfog:white_tulip": {
    "texture": simpleTexture("/block/white_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:white_tulip", 1)
  },
  "shyfog:red_tulip": {
    "texture": simpleTexture("/block/red_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:red_tulip", 1)
  },
  "shyfog:pink_tulip": {
    "texture": simpleTexture("/block/pink_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:pink_tulip", 1)
  },
  "shyfog:orange_tulip": {
    "texture": simpleTexture("/block/orange_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:orange_tulip", 1)
  },
  "shyfog:oxeye_daisy": {
    "texture": simpleTexture("/block/oxeye_daisy.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:oxeye_daisy", 1)
  },
  "shyfog:cornflower": {
    "texture": simpleTexture("/block/cornflower.png"),
    "hitboxes": SIMPLE_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0,
    "drop": simpleDrop("shyfog:cornflower", 1)
  },
  // Oak wood
  "shyfog:oak_log": {
    "texture": simpleTexture("/block/oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:oak_log", 1)
  },
  "shyfog:stripped_oak_log": {
    "texture": simpleTexture("/block/stripped_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_oak_log", 1)
  },
  "shyfog:oak_leaves": {
    "texture": leavesTintedTexture("shyfog:oak_leaves", "/block/oak_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:oak_planks": {
    "texture": simpleTexture("/block/oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:oak_planks", 1)
  },
  // Birch wood
  "shyfog:birch_log": {
    "texture": simpleTexture("/block/birch_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:birch_log", 1)
  },
  "shyfog:stripped_birch_log": {
    "texture": simpleTexture("/block/stripped_birch_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_birch_log", 1)
  },
  "shyfog:birch_leaves": {
    "texture": leavesTintedTexture("shyfog:birch_leaves", "/block/birch_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:birch_planks": {
    "texture": simpleTexture("/block/birch_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:birch_planks", 1)
  },
  // Spruce wood
  "shyfog:spruce_log": {
    "texture": simpleTexture("/block/spruce_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:spruce_log", 1)
  },
  "shyfog:stripped_spruce_log": {
    "texture": simpleTexture("/block/stripped_spruce_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_spruce_log", 1)
  },
  "shyfog:spruce_leaves": {
    "texture": leavesTintedTexture("shyfog:spruce_leaves", "/block/spruce_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:spruce_planks": {
    "texture": simpleTexture("/block/spruce_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:spruce_planks", 1)
  },
  // Dark oak wood
  "shyfog:dark_oak_log": {
    "texture": simpleTexture("/block/dark_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:dark_oak_log", 1)
  },
  "shyfog:stripped_dark_oak_log": {
    "texture": simpleTexture("/block/stripped_dark_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_dark_oak_log", 1)
  },
  "shyfog:dark_oak_leaves": {
    "texture": leavesTintedTexture("shyfog:dark_oak_leaves", "/block/dark_oak_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:dark_oak_planks": {
    "texture": simpleTexture("/block/dark_oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:dark_oak_planks", 1)
  },
  // Acacia wood
  "shyfog:acacia_log": {
    "texture": simpleTexture("/block/acacia_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:acacia_log", 1)
  },
  "shyfog:stripped_acacia_log": {
    "texture": simpleTexture("/block/stripped_acacia_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_acacia_log", 1)
  },
  "shyfog:acacia_leaves": {
    "texture": leavesTintedTexture("shyfog:acacia_leaves", "/block/acacia_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:acacia_planks": {
    "texture": simpleTexture("/block/acacia_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:acacia_planks", 1)
  },
  // Jungle wood
  "shyfog:jungle_log": {
    "texture": simpleTexture("/block/jungle_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:jungle_log", 1)
  },
  "shyfog:stripped_jungle_log": {
    "texture": simpleTexture("/block/stripped_jungle_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_jungle_log", 1)
  },
  "shyfog:jungle_leaves": {
    "texture": leavesTintedTexture("shyfog:jungle_leaves", "/block/jungle_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:jungle_planks": {
    "texture": simpleTexture("/block/jungle_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:jungle_planks", 1)
  },
  // Mangrove wood
  "shyfog:mangrove_log": {
    "texture": simpleTexture("/block/mangrove_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:mangrove_log", 1)
  },
  "shyfog:stripped_mangrove_log": {
    "texture": simpleTexture("/block/stripped_mangrove_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_mangrove_log", 1)
  },
  "shyfog:mangrove_leaves": {
    "texture": leavesTintedTexture("shyfog:mangrove_leaves", "/block/mangrove_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:mangrove_planks": {
    "texture": simpleTexture("/block/mangrove_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:mangrove_planks", 1)
  },
  // Cherry wood
  "shyfog:cherry_log": {
    "texture": simpleTexture("/block/cherry_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:cherry_log", 1)
  },
  "shyfog:stripped_cherry_log": {
    "texture": simpleTexture("/block/stripped_cherry_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_cherry_log", 1)
  },
  "shyfog:cherry_leaves": {
    "texture": leavesTintedTexture("shyfog:cherry_leaves", "/block/cherry_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:cherry_planks": {
    "texture": simpleTexture("/block/cherry_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:cherry_planks", 1)
  },
  // Pale oak wood
  "shyfog:pale_oak_log": {
    "texture": simpleTexture("/block/pale_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:pale_oak_log", 1)
  },
  "shyfog:stripped_pale_oak_log": {
    "texture": simpleTexture("/block/stripped_pale_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:stripped_pale_oak_log", 1)
  },
  "shyfog:pale_oak_leaves": {
    "texture": leavesTintedTexture("shyfog:pale_oak_leaves", "/block/pale_oak_leaves.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP
  },
  "shyfog:pale_oak_planks": {
    "texture": simpleTexture("/block/pale_oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 2,
    "drop": simpleDrop("shyfog:pale_oak_planks", 1)
  },
  // Ores
  "shyfog:coal_ore": {
    "texture": simpleTexture("/block/coal_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:coal", 1)
  },
  "shyfog:deepslate_coal_ore": {
    "texture": simpleTexture("/block/deepslate_coal_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": simpleDrop("shyfog:coal", 1)
  },
  "shyfog:copper_ore": {
    "texture": simpleTexture("/block/copper_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": randomizedDrop("shyfog:raw_copper", 2, 5)
  },
  "shyfog:deepslate_copper_ore": {
    "texture": simpleTexture("/block/deepslate_copper_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": randomizedDrop("shyfog:raw_copper", 2, 5)
  },
  "shyfog:iron_ore": {
    "texture": simpleTexture("/block/iron_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:raw_iron", 1)
  },
  "shyfog:deepslate_iron_ore": {
    "texture": simpleTexture("/block/deepslate_iron_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": simpleDrop("shyfog:raw_iron", 1)
  },
  "shyfog:lapis_ore": {
    "texture": simpleTexture("/block/lapis_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": randomizedDrop("shyfog:lapis_lazuli", 4, 9)
  },
  "shyfog:deepslate_lapis_ore": {
    "texture": simpleTexture("/block/deepslate_lapis_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": randomizedDrop("shyfog:lapis_lazuli", 4, 9)
  },
  "shyfog:redstone_ore": {
    "texture": simpleTexture("/block/redstone_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": randomizedDrop("shyfog:redstone", 4, 5)
  },
  "shyfog:deepslate_redstone_ore": {
    "texture": simpleTexture("/block/deepslate_redstone_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": randomizedDrop("shyfog:redstone", 4, 5)
  },
  "shyfog:gold_ore": {
    "texture": simpleTexture("/block/gold_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:raw_gold", 1)
  },
  "shyfog:deepslate_gold_ore": {
    "texture": simpleTexture("/block/deepslate_gold_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": simpleDrop("shyfog:raw_gold", 1)
  },
  "shyfog:diamond_ore": {
    "texture": simpleTexture("/block/diamond_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:diamond", 1)
  },
  "shyfog:deepslate_diamond_ore": {
    "texture": simpleTexture("/block/deepslate_diamond_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": simpleDrop("shyfog:diamond", 1)
  },
  "shyfog:emerald_ore": {
    "texture": simpleTexture("/block/emerald_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 3,
    "drop": simpleDrop("shyfog:emerald", 1)
  },
  "shyfog:deepslate_emerald_ore": {
    "texture": simpleTexture("/block/deepslate_emerald_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "stackSize": 64,
    "placeable": true,
    "hardness": 4.5,
    "drop": simpleDrop("shyfog:emerald", 1)
  },
  // Materials
  "shyfog:coal": {
    "texture": simpleTexture("/item/coal.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:raw_copper": {
    "texture": simpleTexture("/item/raw_copper.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:copper_ingot": {
    "texture": simpleTexture("/item/copper_ingot.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:raw_iron": {
    "texture": simpleTexture("/item/raw_iron.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:iron_ingot": {
    "texture": simpleTexture("/item/iron_ingot.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:lapis_lazuli": {
    "texture": simpleTexture("/item/lapis_lazuli.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:redstone": {
    "texture": simpleTexture("/item/redstone.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:raw_gold": {
    "texture": simpleTexture("/item/raw_gold.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:gold_ingot": {
    "texture": simpleTexture("/item/gold_ingot.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:diamond": {
    "texture": simpleTexture("/item/diamond.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:emerald": {
    "texture": simpleTexture("/item/emerald.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  // Other
  "shyfog:charcoal": {
    "texture": simpleTexture("/item/charcoal.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  },
  "shyfog:apple": {
    "texture": simpleTexture("/item/apple.png"),
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "drop": NO_DROP
  }
};

if (typeof game !== "undefined") {
  game.items = items;
}
if (typeof module !== "undefined") {
  module.exports = items;
}