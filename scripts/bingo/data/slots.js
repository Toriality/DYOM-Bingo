// Get current date
const date = new Date();
const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
const year = date.getFullYear();

export const slots = [
  // Subtitles
  {
    slotType: "Subtitles",
    string: "English mission",
    requires: ["Subtitles"],
  },
  {
    slotType: "Subtitles",
    string: "Portuguese mission",
    requires: ["Subtitles"],
  },
  {
    slotType: "Subtitles",
    string: "Spanish mission",
    requires: ["Subtitles"],
  },
  {
    slotType: "Subtitles",
    string: "Italian mission",
    requires: ["Subtitles"],
  },
  {
    slotType: "Subtitles",
    string: "Polish mission",
    requires: ["Subtitles"],
  },

  // TTS
  {
    slotType: "TTS",
    string: "Has a male TTS voice",
    requires: ["TTS"],
  },
  {
    slotType: "TTS",
    string: "Has a female TTS voice",
    requires: ["TTS"],
  },
  {
    slotType: "TTS",
    string: "Has a Brazilian TTS voice",
    requires: ["TTS"],
  },

  // Start
  {
    slotType: "Start",
    string: "Starts in San Fierro",
  },
  {
    slotType: "Start",
    string: "Starts in Las Venturas",
  },
  {
    slotType: "Start",
    string: "Starts in Los Santos",
  },
  {
    slotType: "Start",
    string: "Starts in an interior",
  },
  {
    slotType: "Start",
    string: "Starts in Grove Street",
  },
  {
    slotType: "Start",
    string: "Starts at Verdant Meadows",
  },
  {
    slotType: "Start",
    string: "Starts at Area 69",
  },
  {
    slotType: "Start",
    string: "Starts at The Johnson House",
  },
  {
    slotType: "Start",
    string: "Starts with no weapons",
    helperText: "Player starts the mission without any weapons",
  },
  {
    slotType: "Start",
    string: "Starts with a weapon that has 9999 ammo",
    helperText: "The default value for ammo in DYOM is 9999",
  },
  {
    slotType: "Start",
    string: "Starts at 8:00 AM",
    helperText: "Default time of the day in DYOM",
    requires: ["Time"],
  },
  {
    slotType: "Start",
    string: "Starts with a cutscene",
  },
  {
    slotType: "Start",
    string: "Does not start with a cutscene",
  },
  {
    slotType: "Start",
    string: "Starts at nighttime",
  },
  {
    slotType: "Start",
    string: "Starts at daytime",
  },
  {
    slotType: "Start",
    string: "Starts during a sandstorm",
  },
  {
    slotType: "Start",
    string: "Starts during rainy weather",
  },
  {
    slotType: "Start",
    string: "Starts during sunny weather",
    helperText: "Default weather in DYOM",
  },
  {
    slotType: "Start",
    string: "Starts wanted by the police",
    helperText:
      "Player starts with a wanted level of at least 1 star",
  },

  // Mission info
  {
    slotType: "Mission Info",
    string: "Translated mission",
    helperText:
      "Mark this slot if your mission has been translated by the DYOM Rainbomizer auto-translate feature",
    requires: ["Translator"],
  },
  {
    slotType: "Mission Info",
    string: "Mission uses colors in the title",
  },
  {
    slotType: "Mission Info",
    string: 'Has the word "Kill" on the mission title',
  },
  {
    slotType: "Mission Info",
    string: 'Has the word "The" on the mission title',
  },
  {
    slotType: "Mission Info",
    string: 'Mission name is "DYOM"',
    helperText: 'The default mission title in DYOM is "DYOM"',
  },
  {
    slotType: "Mission Info",
    string: '"Missiondesign by DYOM"',
    helperText: `The default author name in DYOM is "DYOM". You can't change the author name in the settings after you confirm it`,
  },
  {
    slotType: "Mission Info",
    string: "Mission was made within a year",
    helperText: `This mission was published between 
      ${month}, ${year - 1} and ${month}, ${year}`,
    requires: ["Info"],
  },
  {
    slotType: "Mission Info",
    string: "Mission was made ten years ago or more",
    helperText: "DYOM's first version was released on November 30, 2008",
    requires: ["Info"],
  },
  {
    slotType: "Mission Info",
    string: "Mission was made by Target13",
    helperText: "Target13 is a senior designer of DYOM Community",
  },
  {
    slotType: "Mission Info",
    string: "Mission was made by LeonCJ",
    helperText: "LeonCJ is a senior designer of DYOM Community",
  },
  {
    slotType: "Mission Info",
    string: 'Mission author has "DYOM" in their name',
  },
  {
    slotType: "Mission Info",
    string: "Mission author has number(s) in their name",
  },
  {
    slotType: "Mission Info",
    string: "Part X (where X is greater than 1)",
  },
  {
    slotType: "Mission Info",
    string: "Part 1",
  },
  {
    slotType: "Mission Info",
    string: "MOTW mission",
    helperText:
      "MOTW stands for Mission Of The Week. It is a weekly contest in DYOM Community",
  },
  {
    slotType: "Mission Info",
    string: "It is a part of a mission pack",
    helperText:
      "Since DYOM only supports up to 100 objectives per mission, many designers choose to separate their stories into several missions",
  },

  // Mission theme
  {
    slotType: "Mission Theme",
    string: "Gang mission",
    helperText: "Grove vs Ballas, Mafia families, Biker gangs, etc",
  },
  {
    slotType: "Mission Theme",
    string: "Casual life simulation mission",
    helperText:
      "Stories that tries to simulate real-life situations, like going to work and meeting your friends",
  },
  {
    slotType: "Mission Theme",
    string: "Alternative SA story",
    helperText:
      "Stories that provide a different perspective of the original GTA San Andreas storyline",
  },
  {
    slotType: "Mission Theme",
    string: "Zombie mission",
  },
  {
    slotType: "Mission Theme",
    string: "Military mission",
  },
  {
    slotType: "Mission Theme",
    string: "Rescue mission",
    helperText:
      "The story is about the player trying to rescue someone or a group of people",
  },
  {
    slotType: "Mission Theme",
    string: "Drug-related mission",
    helperText:
      "The story is about a drug-related situation (like drug dealing, drug use, etc)",
  },
  {
    slotType: "Mission Theme",
    string: "Heist mission",
    helperText:
      "The story is about a heist (like casino heist, bank robbery, etc)",
  },
  {
    slotType: "Mission Theme",
    string: "Revenge mission",
    helperText:
      "The story is about a revenge being committed by the player or against the player",
  },
  {
    slotType: "Mission Theme",
    string: "Racing mission",
  },
  {
    slotType: "Mission Theme",
    string: "Cop mission",
  },

  // Bugs and problems
  {
    slotType: "Issues",
    string: "Rainbomizer fails to translate the mission",
    helperText:
      "Sometimes the auto-translate feature encounters a problem trying to translate the current mission",
    requires: ["Translate"],
  },
  {
    slotType: "Issues",
    string: "Mission requires mods",
    helperText:
      "Some designers uses external mods to make more unique missions, and some of these mods can crash DYOM if you don't have them installed",
  },
  {
    slotType: "Issues",
    string: "Mission crashes",
  },
  {
    slotType: "Issues",
    string: "Rainbomizer fails to load mission (starts an empty DYOM mission)",
    helperText:
      "Sometimes the Rainbomizer encounters a problem downloading the mission file, or maybe the author deleted it",
  },
  {
    slotType: "Issues",
    string: '"Ball actor" bug',
    helperText:
      "A problem with the base game which occurs when too many NPC actors are loaded at the same time",
  },
  {
    slotType: "Issues",
    string: "Camera bug",
    helperText:
      "The camera of a cutscene gets stuck during gameplay. This happens when you set an cutscene to follow/look at an actor as the last cutscene before the start of a gameplay.",
  },

  // Mission status
  {
    slotType: "Status",
    string: "MISSION PASSED RESPECT +",
    helperText: "Complete a mission",
  },
  {
    slotType: "Status",
    string: "MISSION FAILED",
    helperText: "Fail a mission",
  },
  {
    slotType: "Status",
    string: "Wasted",
    helperText: "Player died",
  },
  {
    slotType: "Status",
    string: "Busted",
    helperText: "Player gets arrested",
  },
  {
    slotType: "Status",
    string: "Mission skipped",
    helperText: "Skip a mission",
  },

  // Player
  {
    slotType: "Player",
    string: "Player is CJ",
    helperText: "CJ is the default skin in the DYOM skin selection menu",
  },
  {
    slotType: "Player",
    string: "Player is Ryder",
  },
  {
    slotType: "Player",
    string: "Player is a cop",
  },
  {
    slotType: "Player",
    string: "Player is a military officer",
  },
  {
    slotType: "Player",
    string: "Player is Sweet",
  },
  {
    slotType: "Player",
    string: "Player is Big Smoke",
  },
  {
    slotType: "Player",
    string: "Player is Officer Tenpenny",
  },
  {
    slotType: "Player",
    string: "Player is a woman",
  },
  {
    slotType: "Player",
    string: "Player is a member of the Triads (Woozie's gang)",
  },
  {
    slotType: "Player",
    string: "Player is a Ballas member (gang skin)",
  },
  {
    slotType: "Player",
    string: "Player is a Vagos member (gang skin)",
  },
  {
    slotType: "Player",
    string: "Player is a Grove Street member (gang skin)",
  },
  {
    slotType: "Player",
    string: "Player has a big health bar half-filled",
    helperText: "This happens when the player's health is set to 150",
  },

  // Settings
  {
    slotType: "Settings",
    string: "Wanted stars enabled",
    helperText:
      "Wanted stars are enabled by default since the first version of the mod. Many designers forget to disable it",
  },
  {
    slotType: "Settings",
    string: "Wanted stars disabled",
  },
  {
    slotType: "Settings",
    string: "Mission has Intro Text",
    helperText: 'Appears in the upper-left corner before "Missiondesign by…"',
  },
  {
    slotType: "Settings",
    string: "Riot mode enabled",
    helperText: "This feature was introduced in DYOM 3.0",
  },
  {
    slotType: "Settings",
    string: "No peds and cars on the streets",
    helperText: "A mission designer can disable pedestrians and traffic in DYOM",
  },

  // Actors
  {
    slotType: "Actors",
    string: '"Kill the person."',
    helperText: "Default text for enemy actor objective",
  },
  {
    slotType: "Actors",
    string: "Kill Big Smoke",
  },
  {
    slotType: "Actors",
    string: "Kill CJ",
  },
  {
    slotType: "Actors",
    string: "Kill Sweet",
  },
  {
    slotType: "Actors",
    string:
      "Mission tells you to kill all enemies, but you only need to kill one person",
    helperText:
      'The "Kill whole gang" option was only introduced in later versions of DYOM. That is why many older missions are designed that way',
  },
  {
    slotType: "Actors",
    string:
      "Mission tells you to kill all enemies, but you only need to go to a checkpoint",
    helperText:
      'The "Kill whole gang" option was only introduced in later versions of DYOM. That is why many older missions are designed that way',
  },
  {
    slotType: "Actors",
    string: "Enemies with 2500 health",
    helperText: "This is the maximum health an actor can have in DYOM",
  },
  {
    slotType: "Actors",
    string: "Enemies with headshots turned off",
    helperText:
      "Despite what many people think, the default value for headshots is ON. It is the designer's choice to disable the headshot for each spawned actor",
  },
  {
    slotType: "Actors",
    string: "Headshots on/off inconsistency",
    helperText:
      "Despite what many people think, the default value for headshots is ON. It is the designer's choice to disable the headshot for each spawned actor",
  },
  {
    slotType: "Actors",
    string: "Shirtless old man is a zombie",
  },
  {
    slotType: "Actors",
    string: "Enemies with overpowered accuracy",
    helperText: "The accuracy options in DYOM are: 10, 25, 50, 75, 100",
  },
  {
    slotType: "Actors",
    string: "Friendly actor follows you",
  },
  {
    slotType: "Actors",
    string: "Your friend has a better weapon than you",
  },
  {
    slotType: "Actors",
    string: "Health bar on the right side of the screen",
  },
  {
    slotType: "Actors",
    string:
      "Your friend is supposed to go somewhere with you, but you leave them behind",
  },
  {
    slotType: "Actors",
    string: "Enemy has a Minigun",
  },
  {
    slotType: "Actors",
    string: "Enemy has a Combat Shotgun",
  },
  {
    slotType: "Actors",
    string: "Enemy has a Desert Eagle",
  },
  {
    slotType: "Actors",
    string: "An actor has a random dancing animation",
  },
  {
    slotType: "Actors",
    string: "An actor has a aiming or pointing animation",
  },
  {
    slotType: "Actors",
    string: "An actor has a sleeping animation",
  },
  {
    slotType: "Actors",
    string: "An actor has a dying animation",
  },
  {
    slotType: "Actors",
    string: "An actor has a defined walking or running route",
    helperText:
      "The designer can assign a walk/run/sprint/drive route to an actor",
  },
  {
    slotType: "Actors",
    string: "An actor has a driving animation",
    helperText:
      "The designer can assign a walk/run/sprint/drive route to an actor",
  },
  {
    slotType: "Actors",
    string:
      "An actor has a name that does not correspond to the original game character's name",
    helperText: "Ex: Actor has Ryder skin but his name is Jorge",
  },

  // Checkpoints
  {
    slotType: "Checkpoints",
    string: '"Get to the next checkpoint."',
    helperText: "Default text for checkpoint objectives",
  },
  {
    slotType: "Checkpoints",
    string: "Invisible checkpoint",
  },
  {
    slotType: "Checkpoints",
    string: "Racing checkpoint style (with arrows)",
  },
  {
    slotType: "Checkpoints",
    string: "Airplane checkpoint style (red circle in the air)",
  },
  {
    slotType: "Checkpoints",
    string:
      "Checkpoint near yellow marker which doesn't teleport you to the interior when entered",
  },
  {
    slotType: "Checkpoints",
    string:
      "Checkpoint is located within the car you need to enter (instead of a 'get in the car' objective)",
  },

  // Locations
  {
    slotType: "Locations",
    string: "Mission tells you to return to Ganton",
  },
  {
    slotType: "Locations",
    string: "Travel to the other end of the map",
  },
  {
    slotType: "Locations",
    string: "Uses Big Smoke's Crack Palace interior",
  },
  {
    slotType: "Locations",
    string: "Uses Meat Factory interior",
  },
  {
    slotType: "Locations",
    string: "Uses one of the police station interiors",
  },
  {
    slotType: "Locations",
    string: "Uses Jefferson Motel interior",
  },
  {
    slotType: "Locations",
    string: "Uses a house interior",
  },
  {
    slotType: "Locations",
    string: "Uses a 24/7 (convenience store) interior",
  },
  {
    slotType: "Locations",
    string: "Uses an interior that has background music in it",
  },
  {
    slotType: "Locations",
    string: "Uses Los Santos Skyscraper",
  },
  {
    slotType: "Locations",
    string: "Uses LSPD Parking Lot",
  },
  {
    slotType: "Locations",
    string: "Uses Madd Dogg's mansion",
  },
  {
    slotType: "Locations",
    string: "Uses the Area 69 underground base",
  },
  {
    slotType: "Locations",
    string: "Uses Area 69 exterior",
  },
  {
    slotType: "Locations",
    string: "Uses Caligula's Casino basement",
  },
  {
    slotType: "Locations",
    string: "Uses a casino interior",
  },

  // Objects and Pickups
  {
    slotType: "Objects Pickups",
    string: "Has a dead cop body object",
  },
  {
    slotType: "Objects Pickups",
    string: "Has health and armor pickups",
  },
  {
    slotType: "Objects Pickups",
    string: "Has explosive barrels",
  },
  {
    slotType: "Objects Pickups",
    string: "Has a ramp object",
  },
  {
    slotType: "Objects Pickups",
    string: "Has a garage door object",
  },
  {
    slotType: "Objects Pickups",
    string: "Has a money bag pickup",
  },
  {
    slotType: "Objects Pickups",
    string: "Has weapon pickups",
  },

  // Cutscenes and Timeouts
  {
    slotType: "Scenes",
    string: "Misspelled original character name",
  },
  {
    slotType: "Scenes",
    string: '"Groove Street"',
  },
  {
    slotType: "Scenes",
    string: "TO BE CONTINUED… (or something like that)",
    helperText:
      "Since DYOM only supports up to 100 objectives per mission, many designers choose to separate their stories into several missions",
  },
  {
    slotType: "Scenes",
    string: "Cutscene has (parentheses) to represent sounds",
    helperText:
      "DYOM has a feature for playing sounds but many designers don't know about it. Anyways, the Rainbomizer mod does not support it yet",
  },
  {
    slotType: "Scenes",
    string: "Cutscene-only mission",
  },
  {
    slotType: "Scenes",
    string: "Mission has no cutscenes",
  },
  {
    slotType: "Scenes",
    string: "Unnecessarily long cutscene duration",
  },
  {
    slotType: "Scenes",
    string: "Explosion happens during a cutscene",
    helperText: "Something explodes, like a car, a house, Big Smoke, etc",
  },
  {
    slotType: "Scenes",
    string: "Smooth cutscene",
    helperText:
      "The camera of the cutscene moves around smoothly, instead of being a static shot",
  },
  {
    slotType: "Scenes",
    string: "Shaky camera",
    helperText:
      "The cutscene has a shaky effect (Commonly used for explosions or drunk player effect)",
  },
  {
    slotType: "Scenes",
    string: "Establishing shot",
    helperText:
      "A cutscene that shows the location of the scene, used to show where the action will happen",
  },
  {
    slotType: "Scenes",
    string: "First-person cutscene",
    helperText:
      "Also known as Point of View shot (POV) is when the DYOM camera is set to emulate the perspective of the player or a defined actor",
  },
  {
    slotType: "Scenes",
    string: "Ground level shot",
    helperText:
      "A ground level shot is when the cutscene's camera height is on the ground level or very close to it",
  },
  {
    slotType: "Scenes",
    string: "Overhead shot",
    helperText:
      "An overhead shot is when a cutscene camera is placed way up high, looking down on a subject (Actor, car, object, etc)",
  },

  // Others
  {
    slotType: "Others",
    string: "Talk on phone objective",
  },
  {
    slotType: "Others",
    string: "Timelimit objective",
    helperText:
      "A timelimit objective starts a timer and the player needs to complete a defined set of objectives before the timer runs out",
  },
  {
    slotType: "Others",
    string: "Money objective",
    helperText:
      "A money objective will increase or decrease the amount of money the player has",
  },
  {
    slotType: "Others",
    string: "Utilizes a white marker",
  },
  {
    slotType: "Others",
    string: "Some cars are locked",
  },
  {
    slotType: "Others",
    string: "Quick mission (Completed in less than one minute)",
  },
  {
    slotType: "Others",
    string: "Mission ends abruptly",
  },
  {
    slotType: "Others",
    string: "Achieve Hitman skill with one weapon",
    helperText:
      'There are three levels of skills: "Poor", "Gangster" and "Hitman". DYOM missions starts at poor skill and it cannot be changed by the mission designer',
  },
  {
    slotType: "Others",
    string: "Objective inside interior without teleporting you to it",
  },
  {
    slotType: "Others",
    string: "Meta-DYOM / Breaking the 4th wall",
    helperText:
      "Makes references to the own mission, DYOM modification, DYOM users or DYOM features",
  },
];
