


export default function getRandomArray(array:number[]) {
        const random = Math.floor(Math.random() * array.length);
        return array[random]
}
