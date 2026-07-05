// This file defines every single item and block in the game
// And their properties like hitbox, drops

// Default data for every block/item, if not specified
function defaulted(data) {
  return Object.assign({
    "texture": [],
    "hitboxes": [],
    "stackSize": 64,
    "placeable": false,
    "hardness": 0,
    "correctTool": null,
    "minMiningLevel": 0,
    "drop": NO_DROP,
    "name": "",
    "tags": [],
    "miningLevel": 0,
    "miningSpeed": 1
  }, data);
}

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

// Simple full-block single texture
function simpleTexture(texture) {
  return [{
    "x": 0,
    "y": 0,
    "width": 1,
    "height": 1,
    "file": texture
  }];
}

// Grass texture that changes color depending on the biome
function grassTintedTexture(id, texture, biome) {
  if (typeof grassTint === "undefined") {
    return [];
  }
  return [{
    "x": 0,
    "y": 0,
    "width": 1,
    "height": 1,
    "file": grassTint(id, texture, biome)
  }];
}

// Leaves texture that changes color depending on the biome
function leavesTintedTexture(id, texture, biome) {
  if (typeof leavesTint === "undefined") {
    return [];
  }
  return [{
    "x": 0,
    "y": 0,
    "width": 1,
    "height": 1,
    "file": leavesTint(id, texture, biome)
  }];
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

// TODO: Different languages
function translatedName(names) {
  return names.en_US;
}

var items = {
  // General terrain blocks
  "shyfog:stone": () => defaulted({
    "texture": simpleTexture("/block/stone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 1.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:cobblestone", 1),
    "name": translatedName({
      "en_US": "Stone"
    })
  }),
  "shyfog:cobblestone": () => defaulted({
    "texture": simpleTexture("/block/cobblestone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:cobblestone", 1),
    "name": translatedName({
      "en_US": "Cobblestone"
    })
  }),
  "shyfog:deepslate": () => defaulted({
    "texture": simpleTexture("/block/deepslate.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:cobbled_deepslate", 1),
    "name": translatedName({
      "en_US": "Deepslate"
    })
  }),
  "shyfog:cobbled_deepslate": () => defaulted({
    "texture": simpleTexture("/block/cobbled_deepslate.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:cobbled_deepslate", 1),
    "name": translatedName({
      "en_US": "Cobbled Deepslate"
    })
  }),
  "shyfog:dirt": () => defaulted({
    "texture": simpleTexture("/block/dirt.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.5,
    "correctTool": "#shyfog:shovel",
    "drop": simpleDrop("shyfog:dirt", 1),
    "name": translatedName({
      "en_US": "Dirt"
    })
  }),
  "shyfog:grass_block": () => defaulted({
    "texture": simpleTexture("/block/grass_block_side.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.6,
    "correctTool": "#shyfog:shovel",
    "drop": simpleDrop("shyfog:dirt", 1),
    "name": translatedName({
      "en_US": "Grass Block"
    })
  }),
  "shyfog:bedrock": () => defaulted({
    "texture": simpleTexture("/block/bedrock.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": -1,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Bedrock"
    })
  }),
  "shyfog:sand": () => defaulted({
    "texture": simpleTexture("/block/sand.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.5,
    "correctTool": "#shyfog:shovel",
    "drop": simpleDrop("shyfog:sand", 1),
    "name": translatedName({
      "en_US": "Sand"
    })
  }),
  "shyfog:sandstone": () => defaulted({
    "texture": simpleTexture("/block/sandstone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.8,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:sandstone", 1),
    "name": translatedName({
      "en_US": "Sandstone"
    })
  }),
  "shyfog:red_sandstone": () => defaulted({
    "texture": simpleTexture("/block/red_sandstone.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.8,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:red_sandstone", 1),
    "name": translatedName({
      "en_US": "Red Sandstone"
    })
  }),
  "shyfog:obsidian": () => defaulted({
    "texture": simpleTexture("/block/obsidian.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 50,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 4,
    "drop": simpleDrop("shyfog:obsidian", 1),
    "name": translatedName({
      "en_US": "Obsidian"
    })
  }),
  // Plants
  "shyfog:short_grass": ({ biome }) => defaulted({
    "texture": grassTintedTexture("shyfog:short_grass", "/block/short_grass.png", biome),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Short Grass"
    })
  }),
  "shyfog:tall_grass": ({ biome }) => defaulted({
    "texture": (typeof grassTint === "undefined") ? [] : [{
      "x": 0,
      "y": 1,
      "width": 1,
      "height": 1,
      "file": grassTint("shyfog:tall_grass_top", "/block/tall_grass_top.png", biome)
    }, {
      "x": 0,
      "y": 0,
      "width": 1,
      "height": 1,
      "file": grassTint("shyfog:tall_grass_bottom", "/block/tall_grass_bottom.png", biome)
    }],
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Tall Grass"
    })
  }),
  "shyfog:cactus": () => defaulted({
    "texture": simpleTexture("/block/cactus_side.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "hardness": 0.4,
    "drop": simpleDrop("shyfog:cactus", 1),
    "name": translatedName({
      "en_US": "Cactus"
    })
  }),
  // Flowers
  "shyfog:dandelion": () => defaulted({
    "texture": simpleTexture("/block/dandelion.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:dandelion", 1),
    "name": translatedName({
      "en_US": "Dandelion"
    })
  }),
  "shyfog:poppy": () => defaulted({
    "texture": simpleTexture("/block/poppy.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:poppy", 1),
    "name": translatedName({
      "en_US": "Poppy"
    })
  }),
  "shyfog:blue_orchid": () => defaulted({
    "texture": simpleTexture("/block/blue_orchid.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:blue_orchid", 1),
    "name": translatedName({
      "en_US": "Blue Orchid"
    })
  }),
  "shyfog:allium": () => defaulted({
    "texture": simpleTexture("/block/allium.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:allium", 1),
    "name": translatedName({
      "en_US": "Allium"
    })
  }),
  "shyfog:azure_bluet": () => defaulted({
    "texture": simpleTexture("/block/azure_bluet.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:azure_bluet", 1),
    "name": translatedName({
      "en_US": "Azure Bluet"
    })
  }),
  "shyfog:white_tulip": () => defaulted({
    "texture": simpleTexture("/block/white_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:white_tulip", 1),
    "name": translatedName({
      "en_US": "White Tulip"
    })
  }),
  "shyfog:red_tulip": () => defaulted({
    "texture": simpleTexture("/block/red_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:red_tulip", 1),
    "name": translatedName({
      "en_US": "Red Tulip"
    })
  }),
  "shyfog:pink_tulip": () => defaulted({
    "texture": simpleTexture("/block/pink_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:pink_tulip", 1),
    "name": translatedName({
      "en_US": "Pink Tulip"
    })
  }),
  "shyfog:orange_tulip": () => defaulted({
    "texture": simpleTexture("/block/orange_tulip.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:orange_tulip", 1),
    "name": translatedName({
      "en_US": "Orange Tulip"
    })
  }),
  "shyfog:oxeye_daisy": () => defaulted({
    "texture": simpleTexture("/block/oxeye_daisy.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:oxeye_daisy", 1),
    "name": translatedName({
      "en_US": "Oxeye Daisy"
    })
  }),
  "shyfog:cornflower": () => defaulted({
    "texture": simpleTexture("/block/cornflower.png"),
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:cornflower", 1),
    "name": translatedName({
      "en_US": "Cornflower"
    })
  }),
  "shyfog:sunflower": () => defaulted({
    "texture": [{
      "x": 0,
      "y": 1,
      "width": 1,
      "height": 1,
      "file": "/block/sunflower_top.png"
    }, {
      "x": 0,
      "y": 0,
      "width": 1,
      "height": 1,
      "file": "/block/sunflower_bottom.png"
    }, {
      "x": 0,
      "y": 1,
      "width": 1,
      "height": 1,
      "file": "/block/sunflower_front.png"
    }],
    "hitboxes": SIMPLE_HITBOX,
    "placeable": true,
    "drop": simpleDrop("shyfog:sunflower", 1),
    "name": translatedName({
      "en_US": "Sunflower"
    })
  }),
  // Oak wood
  "shyfog:oak_log": () => defaulted({
    "texture": simpleTexture("/block/oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:oak_log", 1),
    "name": translatedName({
      "en_US": "Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:oak_logs"]
  }),
  "shyfog:stripped_oak_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_oak_log", 1),
    "name": translatedName({
      "en_US": "Stripped Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:oak_logs"]
  }),
  "shyfog:oak_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:oak_leaves", "/block/oak_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Oak Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:oak_planks": () => defaulted({
    "texture": simpleTexture("/block/oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:oak_planks", 1),
    "name": translatedName({
      "en_US": "Oak Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Birch wood
  "shyfog:birch_log": () => defaulted({
    "texture": simpleTexture("/block/birch_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:birch_log", 1),
    "name": translatedName({
      "en_US": "Birch Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:birch_logs"]
  }),
  "shyfog:stripped_birch_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_birch_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_birch_log", 1),
    "name": translatedName({
      "en_US": "Stripped Birch Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:birch_logs"]
  }),
  "shyfog:birch_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:birch_leaves", "/block/birch_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Birch Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:birch_planks": () => defaulted({
    "texture": simpleTexture("/block/birch_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:birch_planks", 1),
    "name": translatedName({
      "en_US": "Birch Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Spruce wood
  "shyfog:spruce_log": () => defaulted({
    "texture": simpleTexture("/block/spruce_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:spruce_log", 1),
    "name": translatedName({
      "en_US": "Spruce Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:spruce_logs"]
  }),
  "shyfog:stripped_spruce_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_spruce_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_spruce_log", 1),
    "name": translatedName({
      "en_US": "Stripped Spruce Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:spruce_logs"]
  }),
  "shyfog:spruce_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:spruce_leaves", "/block/spruce_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Spruce Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:spruce_planks": () => defaulted({
    "texture": simpleTexture("/block/spruce_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:spruce_planks", 1),
    "name": translatedName({
      "en_US": "Spruce Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Dark oak wood
  "shyfog:dark_oak_log": () => defaulted({
    "texture": simpleTexture("/block/dark_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:dark_oak_log", 1),
    "name": translatedName({
      "en_US": "Dark Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:dark_oak_logs"]
  }),
  "shyfog:stripped_dark_oak_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_dark_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_dark_oak_log", 1),
    "name": translatedName({
      "en_US": "Stripped Dark Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:dark_oak_logs"]
  }),
  "shyfog:dark_oak_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:dark_oak_leaves", "/block/dark_oak_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Dark Oak Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:dark_oak_planks": () => defaulted({
    "texture": simpleTexture("/block/dark_oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:dark_oak_planks", 1),
    "name": translatedName({
      "en_US": "Dark Oak Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Acacia wood
  "shyfog:acacia_log": () => defaulted({
    "texture": simpleTexture("/block/acacia_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:acacia_log", 1),
    "name": translatedName({
      "en_US": "Acacia Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:acacia_logs"]
  }),
  "shyfog:stripped_acacia_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_acacia_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_acacia_log", 1),
    "name": translatedName({
      "en_US": "Stripped Acacia Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:acacia_logs"]
  }),
  "shyfog:acacia_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:acacia_leaves", "/block/acacia_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Acacia Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:acacia_planks": () => defaulted({
    "texture": simpleTexture("/block/acacia_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:acacia_planks", 1),
    "name": translatedName({
      "en_US": "Acacia Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Jungle wood
  "shyfog:jungle_log": () => defaulted({
    "texture": simpleTexture("/block/jungle_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:jungle_log", 1),
    "name": translatedName({
      "en_US": "Jungle Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:jungle_logs"]
  }),
  "shyfog:stripped_jungle_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_jungle_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_jungle_log", 1),
    "name": translatedName({
      "en_US": "Stripped Jungle Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:jungle_logs"]
  }),
  "shyfog:jungle_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:jungle_leaves", "/block/jungle_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Jungle Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:jungle_planks": () => defaulted({
    "texture": simpleTexture("/block/jungle_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:jungle_planks", 1),
    "name": translatedName({
      "en_US": "Jungle Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Mangrove wood
  "shyfog:mangrove_log": () => defaulted({
    "texture": simpleTexture("/block/mangrove_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:mangrove_log", 1),
    "name": translatedName({
      "en_US": "Mangrove Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:mangrove_logs"]
  }),
  "shyfog:stripped_mangrove_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_mangrove_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_mangrove_log", 1),
    "name": translatedName({
      "en_US": "Stripped Mangrove Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:mangrove_logs"]
  }),
  "shyfog:mangrove_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:mangrove_leaves", "/block/mangrove_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Mangrove Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:mangrove_planks": () => defaulted({
    "texture": simpleTexture("/block/mangrove_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:mangrove_planks", 1),
    "name": translatedName({
      "en_US": "Mangrove Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Cherry wood
  "shyfog:cherry_log": () => defaulted({
    "texture": simpleTexture("/block/cherry_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:cherry_log", 1),
    "name": translatedName({
      "en_US": "Cherry Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:cherry_logs"]
  }),
  "shyfog:stripped_cherry_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_cherry_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_cherry_log", 1),
    "name": translatedName({
      "en_US": "Stripped Cherry Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:cherry_logs"]
  }),
  "shyfog:cherry_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:cherry_leaves", "/block/cherry_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Cherry Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:cherry_planks": () => defaulted({
    "texture": simpleTexture("/block/cherry_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:cherry_planks", 1),
    "name": translatedName({
      "en_US": "Cherry Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Pale oak wood
  "shyfog:pale_oak_log": () => defaulted({
    "texture": simpleTexture("/block/pale_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:pale_oak_log", 1),
    "name": translatedName({
      "en_US": "Pale Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:pale_oak_logs"]
  }),
  "shyfog:stripped_pale_oak_log": () => defaulted({
    "texture": simpleTexture("/block/stripped_pale_oak_log.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:stripped_pale_oak_log", 1),
    "name": translatedName({
      "en_US": "Stripped Pale Oak Log"
    }),
    "tags": ["#shyfog:logs", "#shyfog:logs_that_burn", "#shyfog:pale_oak_logs"]
  }),
  "shyfog:pale_oak_leaves": ({ biome }) => defaulted({
    "texture": leavesTintedTexture("shyfog:pale_oak_leaves", "/block/pale_oak_leaves.png", biome),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 0.2,
    "drop": NO_DROP,
    "name": translatedName({
      "en_US": "Pale Oak Leaves"
    }),
    "tags": ["#shyfog:leaves"]
  }),
  "shyfog:pale_oak_planks": () => defaulted({
    "texture": simpleTexture("/block/pale_oak_planks.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2,
    "correctTool": "#shyfog:axe",
    "drop": simpleDrop("shyfog:pale_oak_planks", 1),
    "name": translatedName({
      "en_US": "Pale Oak Planks"
    }),
    "tags": ["#shyfog:planks"]
  }),
  // Ores
  "shyfog:coal_ore": () => defaulted({
    "texture": simpleTexture("/block/coal_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:coal", 1),
    "name": translatedName({
      "en_US": "Coal Ore"
    })
  }),
  "shyfog:deepslate_coal_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_coal_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 1,
    "drop": simpleDrop("shyfog:coal", 1),
    "name": translatedName({
      "en_US": "Deepslate Coal Ore"
    })
  }),
  "shyfog:copper_ore": () => defaulted({
    "texture": simpleTexture("/block/copper_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": randomizedDrop("shyfog:raw_copper", 2, 5),
    "name": translatedName({
      "en_US": "Copper Ore"
    })
  }),
  "shyfog:deepslate_copper_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_copper_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": randomizedDrop("shyfog:raw_copper", 2, 5),
    "name": translatedName({
      "en_US": "Deepslate Copper Ore"
    })
  }),
  "shyfog:iron_ore": () => defaulted({
    "texture": simpleTexture("/block/iron_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": simpleDrop("shyfog:raw_iron", 1),
    "name": translatedName({
      "en_US": "Iron Ore"
    })
  }),
  "shyfog:deepslate_iron_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_iron_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": simpleDrop("shyfog:raw_iron", 1),
    "name": translatedName({
      "en_US": "Deepslate Iron Ore"
    })
  }),
  "shyfog:lapis_ore": () => defaulted({
    "texture": simpleTexture("/block/lapis_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": randomizedDrop("shyfog:lapis_lazuli", 4, 9),
    "name": translatedName({
      "en_US": "Lapis Ore"
    })
  }),
  "shyfog:deepslate_lapis_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_lapis_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 2,
    "drop": randomizedDrop("shyfog:lapis_lazuli", 4, 9),
    "name": translatedName({
      "en_US": "Deepslate Lapis Ore"
    })
  }),
  "shyfog:redstone_ore": () => defaulted({
    "texture": simpleTexture("/block/redstone_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": randomizedDrop("shyfog:redstone", 4, 5),
    "name": translatedName({
      "en_US": "Redstone Ore"
    })
  }),
  "shyfog:deepslate_redstone_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_redstone_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": randomizedDrop("shyfog:redstone", 4, 5),
    "name": translatedName({
      "en_US": "Deepslate Redstone Ore"
    })
  }),
  "shyfog:gold_ore": () => defaulted({
    "texture": simpleTexture("/block/gold_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:raw_gold", 1),
    "name": translatedName({
      "en_US": "Gold Ore"
    })
  }),
  "shyfog:deepslate_gold_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_gold_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:raw_gold", 1),
    "name": translatedName({
      "en_US": "Deepslate Gold Ore"
    })
  }),
  "shyfog:diamond_ore": () => defaulted({
    "texture": simpleTexture("/block/diamond_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:diamond", 1),
    "name": translatedName({
      "en_US": "Diamond Ore"
    })
  }),
  "shyfog:deepslate_diamond_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_diamond_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:diamond", 1),
    "name": translatedName({
      "en_US": "Deepslate Diamond Ore"
    })
  }),
  "shyfog:emerald_ore": () => defaulted({
    "texture": simpleTexture("/block/emerald_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 3,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:emerald", 1),
    "name": translatedName({
      "en_US": "Emerald Ore"
    })
  }),
  "shyfog:deepslate_emerald_ore": () => defaulted({
    "texture": simpleTexture("/block/deepslate_emerald_ore.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 4.5,
    "correctTool": "#shyfog:pickaxe",
    "minMiningLevel": 3,
    "drop": simpleDrop("shyfog:emerald", 1),
    "name": translatedName({
      "en_US": "Deepslate Emerald Ore"
    })
  }),
  // Materials
  "shyfog:coal": () => defaulted({
    "texture": simpleTexture("/item/coal.png"),
    "name": translatedName({
      "en_US": "Coal"
    })
  }),
  "shyfog:raw_copper": () => defaulted({
    "texture": simpleTexture("/item/raw_copper.png"),
    "name": translatedName({
      "en_US": "Raw Copper"
    })
  }),
  "shyfog:copper_ingot": () => defaulted({
    "texture": simpleTexture("/item/copper_ingot.png"),
    "name": translatedName({
      "en_US": "Copper Ingot"
    })
  }),
  "shyfog:raw_iron": () => defaulted({
    "texture": simpleTexture("/item/raw_iron.png"),
    "name": translatedName({
      "en_US": "Raw Iron"
    })
  }),
  "shyfog:iron_ingot": () => defaulted({
    "texture": simpleTexture("/item/iron_ingot.png"),
    "name": translatedName({
      "en_US": "Iron Ingot"
    })
  }),
  "shyfog:lapis_lazuli": () => defaulted({
    "texture": simpleTexture("/item/lapis_lazuli.png"),
    "name": translatedName({
      "en_US": "Lapis Lazuli"
    })
  }),
  "shyfog:redstone": () => defaulted({
    "texture": simpleTexture("/item/redstone.png"),
    "name": translatedName({
      "en_US": "Redstone"
    })
  }),
  "shyfog:raw_gold": () => defaulted({
    "texture": simpleTexture("/item/raw_gold.png"),
    "name": translatedName({
      "en_US": "Raw Gold"
    })
  }),
  "shyfog:gold_ingot": () => defaulted({
    "texture": simpleTexture("/item/gold_ingot.png"),
    "name": translatedName({
      "en_US": "Gold Ingot"
    })
  }),
  "shyfog:diamond": () => defaulted({
    "texture": simpleTexture("/item/diamond.png"),
    "name": translatedName({
      "en_US": "Diamond"
    })
  }),
  "shyfog:emerald": () => defaulted({
    "texture": simpleTexture("/item/emerald.png"),
    "name": translatedName({
      "en_US": "Emerald"
    })
  }),
  // Useful blocks
  "shyfog:crafting_table": () => defaulted({
    "texture": simpleTexture("/block/crafting_table_front.png"),
    "hitboxes": SIMPLE_SOLID_HITBOX,
    "placeable": true,
    "hardness": 2.5,
    "correctTool": "#shyfog:axe",
    "minMiningLevel": 0,
    "drop": simpleDrop("shyfog:crafting_table", 1),
    "name": translatedName({
      "en_US": "Crafting Table"
    })
  }),
  // Other items
  "shyfog:charcoal": () => defaulted({
    "texture": simpleTexture("/item/charcoal.png"),
    "name": translatedName({
      "en_US": "Charcoal"
    })
  }),
  "shyfog:apple": () => defaulted({
    "texture": simpleTexture("/item/apple.png"),
    "name": translatedName({
      "en_US": "Apple"
    })
  }),
  "shyfog:stick": () => defaulted({
    "texture": simpleTexture("/item/stick.png"),
    "name": translatedName({
      "en_US": "Stick"
    })
  }),
  // Axes
  "shyfog:wooden_axe": () => defaulted({
    "texture": simpleTexture("/item/wooden_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Wooden Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 1,
    "miningSpeed": 2
  }),
  "shyfog:stone_axe": () => defaulted({
    "texture": simpleTexture("/item/stone_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Stone Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 2,
    "miningSpeed": 4
  }),
  "shyfog:copper_axe": () => defaulted({
    "texture": simpleTexture("/item/copper_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Copper Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 2,
    "miningSpeed": 5
  }),
  "shyfog:golden_axe": () => defaulted({
    "texture": simpleTexture("/item/golden_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Golden Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 2,
    "miningSpeed": 12
  }),
  "shyfog:iron_axe": () => defaulted({
    "texture": simpleTexture("/item/iron_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Iron Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 3,
    "miningSpeed": 6
  }),
  "shyfog:diamond_axe": () => defaulted({
    "texture": simpleTexture("/item/diamond_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Diamond Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 4,
    "miningSpeed": 8
  }),
  "shyfog:netherite_axe": () => defaulted({
    "texture": simpleTexture("/item/netherite_axe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Netherite Axe"
    }),
    "tags": ["#shyfog:axe"],
    "miningLevel": 5,
    "miningSpeed": 9
  }),
  // Pickaxes
  "shyfog:wooden_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/wooden_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Wooden Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 1,
    "miningSpeed": 2
  }),
  "shyfog:stone_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/stone_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Stone Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 2,
    "miningSpeed": 4
  }),
  "shyfog:copper_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/copper_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Copper Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 2,
    "miningSpeed": 5
  }),
  "shyfog:golden_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/golden_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Golden Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 2,
    "miningSpeed": 12
  }),
  "shyfog:iron_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/iron_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Iron Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 3,
    "miningSpeed": 6
  }),
  "shyfog:diamond_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/diamond_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Diamond Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 4,
    "miningSpeed": 8
  }),
  "shyfog:netherite_pickaxe": () => defaulted({
    "texture": simpleTexture("/item/netherite_pickaxe.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Netherite Pickaxe"
    }),
    "tags": ["#shyfog:pickaxe"],
    "miningLevel": 5,
    "miningSpeed": 9
  }),
  // Shovels
  "shyfog:wooden_shovel": () => defaulted({
    "texture": simpleTexture("/item/wooden_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Wooden Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 1,
    "miningSpeed": 2
  }),
  "shyfog:stone_shovel": () => defaulted({
    "texture": simpleTexture("/item/stone_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Stone Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 2,
    "miningSpeed": 4
  }),
  "shyfog:copper_shovel": () => defaulted({
    "texture": simpleTexture("/item/copper_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Copper Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 2,
    "miningSpeed": 5
  }),
  "shyfog:golden_shovel": () => defaulted({
    "texture": simpleTexture("/item/golden_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Golden Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 2,
    "miningSpeed": 12
  }),
  "shyfog:iron_shovel": () => defaulted({
    "texture": simpleTexture("/item/iron_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Iron Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 3,
    "miningSpeed": 6
  }),
  "shyfog:diamond_shovel": () => defaulted({
    "texture": simpleTexture("/item/diamond_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Diamond Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 4,
    "miningSpeed": 8
  }),
  "shyfog:netherite_shovel": () => defaulted({
    "texture": simpleTexture("/item/netherite_shovel.png"),
    "stackSize": 1,
    "name": translatedName({
      "en_US": "Netherite Shovel"
    }),
    "tags": ["#shyfog:shovel"],
    "miningLevel": 5,
    "miningSpeed": 9
  })
};

if (typeof game !== "undefined") {
  game.items = items;
}
if (typeof module !== "undefined") {
  module.exports = items;
}