import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    Object.entries(state.commands).forEach(([key, value]) => {
        console.log(`${value.name}: ${value.description}\n`);
    }); 
}