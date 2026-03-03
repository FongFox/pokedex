import { CLICommand, getCommands } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    Object.entries(commands).forEach(([key, value]) => {
        console.log(`${value.name}: ${value.description}\n`);
    }); 
}