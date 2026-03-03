import console from "node:console";
import { createInterface } from "node:readline";
export function cleanInput(input) {
    const cleaned = input.toLowerCase().trim();
    return cleaned === "" ? [] : cleaned.split(/\s+/);
}
export function isEmpty(input) {
    return input.length === 0 ? true : false;
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin, // đọc từ terminal
        output: process.stdout, // in ra terminal
        prompt: "Pokedex > ", // dấu nhắc hiển thị cho người dùng
    });
    rl.prompt(); // User type input
    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (isEmpty(words)) {
            rl.prompt();
            return;
        }
        else {
            const firstWord = words[0];
            console.log(`Your command was: ${firstWord}`);
            rl.prompt();
        }
    });
}
