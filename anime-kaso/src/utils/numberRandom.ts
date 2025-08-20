
export default function getNumberRandom(max:number) {
    const numbers:number[] = []
    for (let num =1; num <=max; num++ ) {
        numbers.push(num)
    }
    return numbers
}