/* TEMPLATE:
  {
    slotType: "Slot Type"
    string: "Insert your string here",
    helperText: "Helper text"
    requires: array of requirements (for example ["TTS", "Info"])
    
  }
  // slotType: required field
  // string: required field
  // helperText: optional field
  // requires: optional field
*/

// Get current date
const date = new Date();
const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
const year = date.getFullYear();

export const requirements = [
  {
    name: "Translator",
    description: "Limit slots that require translator",
  },
  {
    name: "TTS",
    description: "Limit slots that require TTS",
  },
  {
    name: "Info",
    description: "Limit slots that require DYOM Info",
  },
  {
    name: "Time",
    description: "Limit slots that require in-game timer",
  },
];

export const slots = [
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

  // Start
  {
    slotType: "Start",
    string: "Starts at San Fierro",
  },
  {
    slotType: "Start",
    string: "Starts at Las Venturas",
  },
  {
    slotType: "Start",
    string: "Starts at Los Santos",
  },
  {
    slotType: "Start",
    string: "Starts at an interior",
  },
  {
    slotType: "Start",
    string: "Starts at Grove Street",
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
    string: "Starts at Johnson's House",
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
    string: "Mission name is DYOM",
    helperText: 'The default mission title in DYOM is "DYOM"',
  },
  {
    slotType: "Mission Info",
    string: "Missiondesign by DYOM",
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
    string: "Mission made by Target13",
    helperText: "Target13 is a senior designer of DYOM Community",
  },
  {
    slotType: "Mission Info",
    string: "Mission author has 'DYOM' on their name",
  },
  {
    slotType: "Mission Info",
    string: "Mission author has number(s) on their name",
  },
  {
    slotType: "Mission Info",
    string: "Part X (where X bigger than 1)",
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
    helperText: "Grove vs Ballas, Mafia families, Bikers gangs, etc",
  },
  {
    slotType: "Mission Theme",
    string: "Life simulation mission",
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
    string: "Rainbomizer fails to load mission (starts a empty DYOM mission)",
    helperText:
      "Sometimes the Rainbomizer encounters a problem downloading the mission file, or maybe the author deleted it",
  },
  {
    slotType: "Issues",
    string: "Ball actor bug",
    helperText:
      "It is a problem with the base game. You cannot render too many entries at the same time without breaking the game",
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
    string: "Player is from The Triads",
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
    helperText: "You can opt to disable NPCs spawning at the streets in DYOM",
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
      "Mission tells you to kill all enemies but you only need to kill one person",
    helperText:
      'The "Kill whole gang" option was only introduced in later versions of DYOM. That is why many older missions are designed that way',
  },
  {
    slotType: "Actors",
    string:
      "Mission tells you to kill all enemies but you only need to go to a checkpoint",
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
      "Your friend is supposed to go somewhere with you but you leave him behind",
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
    string:
      "An actor has a name that does not corresponds to the original game character's name",
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
      "Checkpoint near yellow marker without teleporting you to the interior",
  },
  {
    slotType: "Checkpoints",
    string:
      "Checkpoint inside the car you need to enter (instead of a car objective)",
    helperText: `Because older DYOM versions lack the car objective, designers used to insert a checkpoint inside where the cars' driver seat is located to make a "Enter the car"-like objective`,
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
    string: "Uses a 24/7 interior",
  },
  {
    slotType: "Locations",
    string: "Uses a interior that has background music in it",
  },
  {
    slotType: "Locations",
    string: "Uses Los Santos Skycraper",
  },
  {
    slotType: "Locations",
    string: "Uses LSPD Parking Lot",
  },
  {
    slotType: "Locations",
    string: "Uses Madd Dog's mansion",
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

  // Cutscenes and Timeouts
  {
    slotType: "Scenes",
    string: "Misspelled original character name",
  },
  {
    slotType: "Scenes",
    string: "'Groove Street'",
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

  // Others
  {
    slotType: "Others",
    string: "Talk on phone objective",
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
    string: "Cutscene-only mission",
  },
  {
    slotType: "Others",
    string: "Mission has no cutscenes",
  },
  {
    slotType: "Others",
    string: "Quick mission (Complete in less than one minute)",
  },
  {
    slotType: "Others",
    string: "Mission ends abruptly",
  },
  {
    slotType: "Others",
    string: "Achieve Hitman skill with one weapon",
    helperText:
      'There are three levels of skills: "Poor", "Gangster" and "Hitman". DYOM missions starts at poor skill and it cannot be changed',
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

export const generate = (requirements, current) => {
  //Filter out slots which require selected options, so there is no need to check for that later
  let filteredSlots = slots;
  requirements.forEach(
    (req) =>
      (filteredSlots = filteredSlots.filter(
        (slot) => slot.requires == undefined || !slot.requires.includes(req)
      ))
  );

  //Filter out slots which are displayed right now, so slots don't repeat as often
  current.forEach(
    (exSlot) =>
      (filteredSlots = filteredSlots.filter(
        (slot) => slot.string != exSlot.innerText
      ))
  );

  let newSlots = new Array();

  for (let i = 0; i < 5 * 5; i++) {
    let randomSlot =
      filteredSlots[Math.floor(Math.random() * filteredSlots.length)];
    //Instead of retrying each time the same thing was chosen, just filter out chosen slot so it cannot be chosen again
    filteredSlots = filteredSlots.filter(
      (slot) => slot.string != randomSlot.string
    );
    newSlots.push(randomSlot);
  }
  return newSlots;
};
