  const roll=()=> {
  const dice = document.querySelector("#dice");
  const display = document.querySelector("#display");
  const rollValue = Math.floor(Math.random() * 6) + 1;
  dice.src = `images/face${rollValue}.png`;
  display.textContent = `You rolled a ${rollValue}`;
}