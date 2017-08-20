const fightCanvas = document.getElementById("fight");
const sfx = fightCanvas.getContext('2d');

sfx.scale(2,2);
let health = document.getElementById("health");
health.value = player.health;
let enemyHealth = document.getElementById('enemyBar');
var heroArray = [
  document.getElementById('hero1'),
  document.getElementById('hero2'),
  document.getElementById('hero3'),
  document.getElementById('hero4'),
  document.getElementById('hero1'),
  document.getElementById('hero2'),
  document.getElementById('hero3'),
  document.getElementById('hero4'),
  document.getElementById('hero1'),
  document.getElementById('hero2'),
  document.getElementById('hero3'),
  document.getElementById('hero4'),
  document.getElementById('hero1'),
  document.getElementById('hero2'),
  document.getElementById('hero3'),
  document.getElementById('hero4'),
  document.getElementById('hero5'),//16
  document.getElementById('hero6'),
  document.getElementById('hero7'),
  document.getElementById('hero8'),
  document.getElementById('hero9'),
  document.getElementById('hero6'),
  document.getElementById('hero7'),
  document.getElementById('hero8'),
  document.getElementById('hero9'),
  document.getElementById('hero6'),
  document.getElementById('hero7'),
  document.getElementById('hero8'),
  document.getElementById('hero9'),
  document.getElementById('hero6'),
  document.getElementById('hero7'),
  document.getElementById('hero8'),
  document.getElementById('hero9'),
  document.getElementById('hero1'),
];
var choice = [
  document.getElementById('rock'),
  document.getElementById('paper'),
  document.getElementById('scissors'),
]

const rock = choice[0].addEventListener('click', event=> { player.choice = "rock";});
const paper = choice[1].addEventListener('click', event=> { player.choice = "paper";});
const scissors = choice[2].addEventListener('click', event=> { player.choice = "scissors";});

const start = 25;
var xAxis = start;
var counter = 0;
let animateInterval = 600;
let timeDifference = 0;
let frame = 0;

//at frame 4 x needs to be negative until start
// array length = 34. Last element 33
// xAxis 185 is when it comes back
function spriteAnimate (time = 0) {
  const frameTime = time - timeDifference;
  timeDifference = time;

  counter += frameTime;
  timeDifference = time;

  //console.log(computer());
  requestAnimationFrame(spriteAnimate);
  drawFight();
}

function animation () {
  if (counter > animateInterval) {
    if (frame == 33) {
      frame = 0;
      xAxis = start;
    } else if ( frame >= 16 && frame < 33) {
      frame ++;
      xAxis -= 10;
    } else if ( frame < 16 && xAxis <= 185) {
      frame ++;
      xAxis += 10;
    }
  }
}

function battle(choice1, choice2) {
  if (choice1 === choice2) {
    return ;
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      enemyHealth.value -= 5;
    } else if ( choice2 === "scissors") {
      player.health -= 5;
    }
  } else if ( choice1 === "rock") {
    if (choice2 === "scissors") {
      enemyHealth.value -= 5;
    } else if (choice2 === "paper") {
      player.health -= 5;
    }
  } else if (choice2 === "scissors") {
    if (choice2 === "paper") {
      enemyHealth.value -= 5;
    } else if (choice2 === "rock") {
      player.health -= 5;
    }
  }
}

function computer () {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

var enemy = {
  bahamut: document.getElementById('enemy'),
}
function drawFight() {
  sfx.fillStyle = "#000";
  sfx.fillRect(0, 0, fightCanvas.width, fightCanvas.height);
  sfx.drawImage(heroArray[frame], xAxis, 30);
  sfx.drawImage(enemy.bahamut, 4, 4, 96, 96, 230, 15, 60, 60);
};

spriteAnimate();
