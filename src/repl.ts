import console from "node:console";
import { State } from "./state.js";

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

export function startREPL(state: State): void {
    const rl = state.readline;

    rl.prompt(); // User type input

    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (isEmpty(words)) {
            rl.prompt();
            return;
        }

        const firstWord = words[0];

        // Thêm dòng này để debug
        // console.log(`Debug: searching for key '${firstWord}' in`, Object.keys(state));

        const command = state.commands[firstWord];
        if(!command) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }

        try {
            command.callback(state);
            rl.prompt();
        } catch (error) {
            console.log(error);
        }
    });
}