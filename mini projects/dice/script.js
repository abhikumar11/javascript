  const roll=()=> {
  const dice = document.getElementById("dice");
  const display = document.getElementById("display");
  const rollValue = Math.floor(Math.random() * 6) + 1;
  dice.src = `images/face${rollValue}.png`;
  display.textContent = `You rolled a ${rollValue}`;
}