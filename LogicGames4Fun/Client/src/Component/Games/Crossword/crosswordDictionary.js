const crosswordDictionary = [
  {
    word: "cat",
    definition: "A small domesticated carnivorous mammal with soft fur.",
    difficulty: "easy",
  },
  {
    word: "dog",
    definition:
      "A domesticated carnivorous mammal that typically has a long snout.",
    difficulty: "easy",
  },
  {
    word: "sun",
    definition: "The star around which the earth orbits.",
    difficulty: "easy",
  },
  {
    word: "pen",
    definition: "A writing instrument using ink.",
    difficulty: "easy",
  },
  {
    word: "hat",
    definition: "A shaped covering for the head.",
    difficulty: "easy",
  },
  {
    word: "cup",
    definition: "A small bowl-shaped container for drinking.",
    difficulty: "easy",
  },
  {
    word: "map",
    definition: "A diagrammatic representation of an area.",
    difficulty: "easy",
  },
  {
    word: "bat",
    definition: "A flying mammal or an implement for hitting.",
    difficulty: "easy",
  },
  {
    word: "box",
    definition: "A container with a flat base and sides.",
    difficulty: "easy",
  },
  {
    word: "pie",
    definition: "A baked dish with fruit or meat filling.",
    difficulty: "easy",
  },
  {
    word: "rat",
    definition: "A rodent that resembles a large mouse.",
    difficulty: "easy",
  },
  {
    word: "log",
    definition: "A part of the trunk of a tree.",
    difficulty: "easy",
  },
  {
    word: "mud",
    definition: "Soft wet earth or dirt.",
    difficulty: "easy",
  },
  {
    word: "zip",
    definition: "A device for joining two edges of fabric.",
    difficulty: "easy",
  },
  {
    word: "pot",
    definition: "A container for cooking or storing food.",
    difficulty: "easy",
  },

  {
    word: "octopus",
    definition: "A marine creature with eight arms.",
    difficulty: "medium",
  },
  {
    word: "muffins",
    definition: "A small baked good that might contain fruit.",
    difficulty: "medium",
  },
  {
    word: "eclipse",
    definition: "The obscuring of one celestial body by another.",
    difficulty: "medium",
  },
  {
    word: "diamond",
    definition: "A precious stone of clear colorless crystalline form.",
    difficulty: "medium",
  },
  {
    word: "balloon",
    definition: "A flexible bag filled with air or gas.",
    difficulty: "medium",
  },
  {
    word: "platinum",
    definition: "A precious silvery-white metal.",
    difficulty: "medium",
  },
  {
    word: "elephant",
    definition: "A large herbivore with a trunk.",
    difficulty: "medium",
  },
  {
    word: "umbrella",
    definition: "A device for protection against rain.",
    difficulty: "medium",
  },
  {
    word: "lavender",
    definition: "A small aromatic shrub with purple flowers.",
    difficulty: "medium",
  },
  {
    word: "tortilla",
    definition: "A thin flat pancake made from maize flour.",
    difficulty: "medium",
  },
  {
    word: "hardware",
    definition: "Physical tools, machinery, and other durable equipment.",
    difficulty: "medium",
  },
  {
    word: "panorama",
    definition: "An unbroken view of an entire surrounding area.",
    difficulty: "medium",
  },
  {
    word: "aquarium",
    definition:
      "A transparent tank of water for fish and water-dwelling organisms.",
    difficulty: "medium",
  },
  {
    word: "lemonade",
    definition: "A drink made from lemon juice, water, and sugar.",
    difficulty: "medium",
  },
  {
    word: "narrator",
    definition: "A person who tells a story or gives an account of something.",
    difficulty: "medium",
  },
  {
    word: "treasure",
    definition: "A store of valuable things.",
    difficulty: "medium",
  },
  {
    word: "sapphire",
    definition: "A blue gemstone and variety of the mineral corundum.",
    difficulty: "medium",
  },
  {
    word: "dynamics",
    definition: "Forces that produce motion.",
    difficulty: "medium",
  },
  {
    word: "paradise",
    definition: "An ideal or idyllic place or state.",
    difficulty: "medium",
  },
  {
    word: "marathon",
    definition: "A long-distance running race.",
    difficulty: "medium",
  },

  {
    word: "strawberry",
    definition: "A red fruit with seeds on its outer surface.",
    difficulty: "hard",
  },
  {
    word: "television",
    definition: "A device for receiving moving images and sound.",
    difficulty: "hard",
  },
  {
    word: "lighthouse",
    definition: "A tower with a light to warn or guide ships.",
    difficulty: "hard",
  },
  {
    word: "basketball",
    definition:
      "A sport played by two teams of five players with a round ball.",
    difficulty: "hard",
  },
  {
    word: "adventurous",
    definition: "Willing to take risks or try out new methods or experiences.",
    difficulty: "hard",
  },
  {
    word: "observatory",
    definition:
      "A building or place equipped for observing astronomical events.",
    difficulty: "hard",
  },
  {
    word: "personification",
    definition: "Attributing human qualities to non-human things.",
    difficulty: "hard",
  },
  {
    word: "thermodynamics",
    definition: "The branch of physics related to heat and temperature.",
    difficulty: "hard",
  },
  {
    word: "apprehension",
    definition: "Understanding or grasp; arrest of a criminal.",
    difficulty: "hard",
  },
  {
    word: "boulevardier",
    definition: "A sophisticated, socially active man; a man about town.",
    difficulty: "hard",
  },
  {
    word: "conservatoire",
    definition: "A college for the study of classical music or other arts.",
    difficulty: "hard",
  },
  {
    word: "configuration",
    definition: "An arrangement of elements in a particular form.",
    difficulty: "hard",
  },
  {
    word: "disproportion",
    definition: "An unequal comparison or relation between aspects.",
    difficulty: "hard",
  },
  {
    word: "circumlocution",
    definition: "The use of many words when fewer would do.",
    difficulty: "hard",
  },
  {
    word: "extermination",
    definition: "Killing, especially of a whole group.",
    difficulty: "hard",
  },
  {
    word: "hypothesize",
    definition: "Propose an explanation made on limited evidence.",
    difficulty: "hard",
  },
  {
    word: "illustrative",
    definition: "Serving as an example or explanation.",
    difficulty: "hard",
  },
  {
    word: "jurisdiction",
    definition: "The authority of a court or official organization.",
    difficulty: "hard",
  },
  {
    word: "malfunction",
    definition: "Fail to function normally or satisfactorily.",
    difficulty: "hard",
  },
  {
    word: "nationalistic",
    definition: "Having strong patriotic feelings for a country.",
    difficulty: "hard",
  },
  {
    word: "overwhelming",
    definition: "Very great in amount; extremely strong.",
    difficulty: "hard",
  },
  {
    word: "perpendicular",
    definition: "At an angle of 90° to a horizontal line or surface.",
    difficulty: "hard",
  },
  {
    word: "rehabilitation",
    definition: "Restore to health or normal life through training.",
    difficulty: "hard",
  },
  {
    word: "simultaneously",
    definition: "At the same time.",
    difficulty: "hard",
  },
  {
    word: "unintentional",
    definition: "Not done with purpose or intent.",
    difficulty: "hard",
  },

  {
    word: "encyclopedia",
    definition: "A book or set of books giving information on many subjects.",
    difficulty: "impossible",
  },
  {
    word: "extraordinary",
    definition: "Very unusual or remarkable.",
    difficulty: "impossible",
  },
  {
    word: "unquestionable",
    definition: "Not able to be doubted or disputed.",
    difficulty: "impossible",
  },
  {
    word: "circumference",
    definition: "The distance around something, especially a circle.",
    difficulty: "impossible",
  },
  {
    word: "transformation",
    definition: "A thorough or dramatic change in appearance or form.",
    difficulty: "impossible",
  },
  {
    word: "counterproductive",
    definition: "Having the opposite of the desired effect.",
    difficulty: "impossible",
  },
  {
    word: "disproportionately",
    definition: "To an extent that is not fair or reasonable.",
    difficulty: "impossible",
  },
  {
    word: "electromagnetism",
    definition: "The study of electric currents and magnetic fields.",
    difficulty: "impossible",
  },
  {
    word: "incomprehensible",
    definition: "Not able to be understood.",
    difficulty: "impossible",
  },
  {
    word: "microarchitecture",
    definition: "Detailed design of a computers microprocessor.",
    difficulty: "impossible",
  },
  {
    word: "overexaggeration",
    definition: "To describe something as larger or greater than it really is.",
    difficulty: "impossible",
  },
  {
    word: "representational",
    definition: "Relating to realistic depiction in the arts.",
    difficulty: "impossible",
  },
  {
    word: "thermoplasticity",
    definition:
      "Ability of a material to soften when heated and harden when cooled.",
    difficulty: "impossible",
  },
  {
    word: "underrepresentation",
    definition: "Insufficient or inadequate representation.",
    difficulty: "impossible",
  },
  {
    word: "vulnerabilities",
    definition: "Susceptibility to physical or emotional harm.",
    difficulty: "impossible",
  },
  {
    word: "unquestionably",
    definition: "Beyond doubt; definitely.",
    difficulty: "impossible",
  },
  {
    word: "synchronization",
    definition: "The action of causing things to occur at the same time.",
    difficulty: "impossible",
  },
  {
    word: "responsibilities",
    definition: "The state or duty of having to deal with something.",
    difficulty: "impossible",
  },
  {
    word: "reconceptualize",
    definition: "Formulate a concept or theory in a new way.",
    difficulty: "impossible",
  },
  {
    word: "quintessentially",
    definition: "In a way that is most typical of a quality or state.",
    difficulty: "impossible",
  },
  {
    word: "phosphorescence",
    definition: "Light emitted after exposure to radiation.",
    difficulty: "impossible",
  },
  {
    word: "overcompensation",
    definition: "Excessive reaction to a feeling of inferiority.",
    difficulty: "impossible",
  },
  {
    word: "neurotransmitter",
    definition: "Chemicals that transmit signals in the nervous system.",
    difficulty: "impossible",
  },
  {
    word: "misunderstanding",
    definition: "A failure to understand something correctly.",
    difficulty: "impossible",
  },
  {
    word: "interdisciplinary",
    definition: "Relating to more than one branch of knowledge.",
    difficulty: "impossible",
  },
  {
    word: "inconsiderately",
    definition: "In a thoughtless manner without regard for others.",
    difficulty: "impossible",
  },
  {
    word: "inappropriately",
    definition: "In a manner not suitable or proper in the circumstances.",
    difficulty: "impossible",
  },
  {
    word: "hyperconcentration",
    definition: "The state of being extremely concentrated.",
    difficulty: "impossible",
  },
  {
    word: "gastroenterologist",
    definition: "A doctor specializing in stomach and intestinal disorders.",
    difficulty: "impossible",
  },
  {
    word: "fundamentalists",
    definition:
      "People who believe in the strict, literal interpretation of scripture.",
    difficulty: "impossible",
  },
  {
    word: "dysfunctional",
    definition: "Not operating normally or properly.",
    difficulty: "impossible",
  },
  {
    word: "counterintuitive",
    definition: "Contrary to intuition or common sense.",
    difficulty: "impossible",
  },
  {
    word: "circumnavigation",
    definition: "The act of going around something, especially the world.",
    difficulty: "impossible",
  },
  {
    word: "biodegradability",
    definition: "Capability of being decomposed by natural agents.",
    difficulty: "impossible",
  },
  {
    word: "antiestablishmentarianism",
    definition:
      "Opposition to the establishment in political or social matters.",
    difficulty: "impossible",
  },
];
export default crosswordDictionary;
