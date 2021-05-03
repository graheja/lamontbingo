var lines = [
  // Credits to ster, gamingmedley, darkness3560, JettTheMedic, and many other redditors

  "Darcy sits on Miriam's lap",
  "First year trying their very best",
  "DOG ON ZOOM",
  "Technical Difficulties",
  "Advisor asks their student a question",
  "Awkward silence",
  "Baby photo",
  "I have no idea what I'm doing",
  "Laughing on camera",
  "Laughing on camera, unmuted",
  "Collectively losing our mind at Arnold Gordon",
  "No words on this slide mean anything to you",
  "Claire fills the empty silence",
  "Mo mentions Climate School",
  "Delirious optimism",
  "Anyone mentions graduating",
  "You zone out for more than 5 minutes",
  "Someone did something unexplain-able",
  "Delirious pessimism",
  "A joke doesn't land",
  "A joke lands",
  "CAT ON ZOOM",
  "meme",
  "pre-1990 paper cited",
  "Bar graph",
  "Scatter plot",
  "Pie chart",
  "Chart with no title",
  "Chart with more than 10 colors",
  "Pretty photo",
  "Question has nothing to do with presenter's topic",
  "Undergrad anecdote",
  "The slide maker was clearly drunk",
  "PET ON SLIDE",
  "Unusual",
  "Schadenfreude",
  "Spongebob reference",
  "Tiktok reference",
  "Accidental poetry",
  "Any mention of the moon",
  " 'I hope to run a model' ",
  "Any mention of Biden",
  "'A celebrity' gets on the zoom",
  "You want to take a poop",
  "--",
  "Your team has 4+ dominators",
  "Teammate really thinks you're a Spy",
  "3+ Players idle in spawn",
  "Offensive name",
  "Meme name",
  "2+ Gibuses on your team",
  "Your team cannot kill the Sentry",
  "Lost or won at final point",
  "The other team gets spawn camped",
  "The other team has 3+ dominations",
  "Schaden-freude (taunt)",
  "Conga",
  "Rock Paper Scissors",
  "Kazotsky Kick",
  "Mannrobics",
  "3+ Scouts in your team",
  "Scout bonks to nowhere",
  "Bonked Scout is trapped by Sentry",
  "You got milked",
  "Crocket kills 3+ players",
  "Cow Mangler 5000",
  "Soldier deploys Buff Banner",
  "Rocket Jumper",
  "3+ Pyros in your team",
  "Phlog Mmmph killed 3+ players",
  "Pyro airblast kills a player (cliff, deflect or fall dmg)",
  "Pyro actually extinguishes teammates",
  "Pyro never extinguishes teammates",
  "Backburner",
  "3+ Demomen in your team",
  "Demoknight",
  "Demopan",
  "Double Donk!",
  "3+ Heavies in your team",
  "Heavy gets pushed by the cart",
  "Heavy revs up for too long without shooting",
  "Friendly Hoovy",
  "You pick up a Sandvich",
  "3+ Engineers in your team",
  "Frontier Justice + Gunslinger",
  "2+ Engineers, but no Teleporters",
  "2+ Mini Sentries in same area",
  "Badly placed Sentries",
  "Sentry in most common spot for map",
  "Rancho Relaxo away from nest",
  "Eureka Effect teleport",
  "3+ Medics in your team",
  "No Medic on your team",
  "Medic heals enemy Spy",
  "Medic drops uber",
  "Lone ubered Medic",
  "Medic + Medic combo",
  "Medic only heals pocket",
  "Medic uses uber in setup",
  "3+ Snipers in your team",
  "2+ Snipers at same spot",
  "Sniper penetration kill (server sfx)",
  "Huntsman",
  "3+ Spies in your team",
  "Spy misses 2 stabs in a row",
  "Spy thinks he is fooling everyone",
  "Well hidden Box Trot Spy",
];

// Fisher-Yates Shuffle
var shuffle = function(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};
// Did I just steal this code from Wikipedia, or something?

var insertToCard = function(array) {
  var slot = 25;
  while (slot) {
    $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
    slot--;
  }
};

$(document).ready(function() {
  var shuffledLines = shuffle(lines);
  insertToCard(shuffledLines); // #hellaswag
  $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
});
