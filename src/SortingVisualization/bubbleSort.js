export async function bubbleSortHelper(array, arrayBars) {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                
                arrayBars[j].style.backgroundColor = 'red';
                arrayBars[j + 1].style.backgroundColor = 'red';
                await sleep(1);
                
                let tempBar = arrayBars[j].style.height;
                arrayBars[j].style.height = arrayBars[j + 1].style.height;
                arrayBars[j + 1].style.height = tempBar;

                // await sleep(0.1);
                arrayBars[j].style.backgroundColor = 'lightgray';
                arrayBars[j + 1].style.backgroundColor = 'lightgray';
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}