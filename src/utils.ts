export const safeMod = (value: number, n: number) => {
    if(value === 0 || n === 0) return 0;
    return ((value % n) + n) % n;
}