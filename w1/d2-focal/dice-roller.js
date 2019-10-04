
const diceRoller = (timesToRoll) => {
  const result = [];
  for (let i = 0; i < timesToRoll; i++) {
    result.push(Math.ceil(6 * Math.random()));
  }
  console.log(`Rolled ${timesToRoll} dice ${result.join(", ")}`);
}
diceRoller(2);
// module.exports = diceRoller;