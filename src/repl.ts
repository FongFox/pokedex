import console from "node:console";
import { createInterface } from "node:readline";
import { CLICommand, getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
    // 1. Loại bỏ các ký tự lạ, chỉ giữ lại chữ cái (a-z), số (0-9) và khoảng trắng
    // Regex này sẽ xóa sạch ký tự '' hoặc bất kỳ mã điều khiển nào
    const sanitized = input.replace(/[^a-zA-Z0-9\s]/g, "");

    const cleaned = sanitized.toLowerCase().trim();
    return cleaned === "" ? [] : cleaned.split(/\s+/);
}

export function isEmpty(input: string[]): boolean {
    return input.length === 0 ? true : false;
}

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,   // đọc từ terminal
        output: process.stdout, // in ra terminal
        prompt: "Pokedex > ",   // dấu nhắc hiển thị cho người dùng
    });

    rl.prompt(); // User type input

    const cliCommands= getCommands();
    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (isEmpty(words)) {
            rl.prompt();
            return;
        }

        const firstWord = words[0];

        // Thêm dòng này để debug
        // console.log(`Debug: searching for key '${firstWord}' in`, Object.keys(cliCommands));

        const command = cliCommands[firstWord];
        if(!command) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }

        try {
            command.callback(cliCommands);
            rl.prompt();
        } catch (error) {
            console.log(error);
        }
    });
}