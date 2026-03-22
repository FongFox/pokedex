// repl.js actually refers to repl.ts
import { PokeAPI } from "./pokeapi.js";
import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  const state = initState();
  startREPL(state);
}

main();

// const api = new PokeAPI();
// const locations = await api.fetchLocations();
// console.log(locations);