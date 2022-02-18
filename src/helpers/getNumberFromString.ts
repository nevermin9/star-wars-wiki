export function getNumberFromString(str: string): RegExpMatchArray | null {
    return str.match(/(\d+)/);
}