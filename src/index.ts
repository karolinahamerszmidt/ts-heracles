export function add(left: number, right:number): number {
    return left + right
}

type AllowedFlowers = "bratek" | "stokrotka" | "rumianek";
const setOfKwiatki = new Set<AllowedFlowers>(["bratek", "stokrotka"]);

setOfKwiatki.add("rumianek");



export function deduplicate(input: string[]): string[] {
    const set = new Set(input);
    const array = Array.from(set)
    return array;
   
}
