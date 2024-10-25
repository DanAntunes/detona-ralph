const state = {
  view:{
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },
  values:{
    timerId: null,
    gameVelocity: 1000
  },
};

function randomSquare(){
  // biome-ignore lint/complexity/noForEach: <explanation>
  state.view.squares.forEach((square)=>{
    square.classList.remove("enemy");
  });

  const randomNumber = Math.floor(Math.random() * 9);
  const randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
}

function moveEnemy(){
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
  // biome-ignore lint/complexity/noForEach: <explanation>
  state.view.squares.forEach((square) => {})
}

function main(){
  moveEnemy();
}

main();