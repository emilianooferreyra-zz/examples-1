let traveling = destiny => `Traveling to the city the: ${destiny} for ${time}`;

let traveling = (destiny, time) => {
  return `Traveling to the city the: ${destiny} for ${time}`;
}

let travel;
travel = traveling('Paris');
travel = traveling('London');
travel = traveling('Barcelona', '9 days');

console.log(travel)