export function cleanInput(input: string): string[] {
    const cleaned = input.toLowerCase().trim();
    return cleaned === "" ? [] : cleaned.split(/\s+/);
}