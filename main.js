const player1 = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['knife', 'slice of pizzaaaaaa'],
  attack() {
    console.log(this.name + ' Fight...')
  }
};

const player2 = {
  player: 2,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['haha-47', 'banana'],
  attack() {
    console.log(this.name + ' Fight...')
  }

}

const $root = document.querySelector('.root').querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createPlayer(className,playerName,health,playerUrl) {
  const $player = document.createElement('div');
  $player.classList.add(className);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = health +'%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerName;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');
  const $img = document.createElement('img');
  $img.src = playerUrl;
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $root.appendChild($player);
};

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life')
  const $random = random(1, 20)
  player.hp -= $random

  let hp;
  if (player.hp <= 0) {
    hp = 0;
    $root.appendChild(playerLose(player.name))
    $randomButton.disabled = true
  } else {
    hp = player.hp
  }
  $playerLife.style.width = hp + '%'

  console.log(player.name + ' -' + $random)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function playerLose(name) {
  const $loseTitle = document.createElement('div')
  $loseTitle.classList.add('loseTitle');
  $loseTitle.innerText = name + ' lose';

  return $loseTitle;
}

$randomButton.addEventListener('click', function() {
  console.log('Button click!')
  changeHP(player1)
  changeHP(player2)
})

createPlayer('player1',player1.name,player1.hp, player1.img);
createPlayer('player2',player2.name, player2.hp, player2.img);
