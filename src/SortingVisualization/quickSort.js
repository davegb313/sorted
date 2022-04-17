export async function getQuickSortAnimations(array, arrayBars) {
    if (array.length <= 1) return array;
    await quickSortHelper(array, 0, array.length - 1, arrayBars);
}

async function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    arrayBars,
) {
    if (startIdx >= endIdx) return;
    const index = await partition(mainArray, startIdx, endIdx, arrayBars);
    await Promise.all([
        quickSortHelper(mainArray, startIdx, index - 1, arrayBars),
        quickSortHelper(mainArray, index + 1, endIdx, arrayBars)
    ]);
}

async function partition(
    mainArray,
    startIdx,
    endIdx,
    arrayBars
) {
    let pivotIndex = startIdx;
    let pivotValue = mainArray[endIdx];
    for (let i = startIdx; i < endIdx; i++) {
        if (mainArray[i] < pivotValue) {
            // setTimeout(() => {
                await swap(mainArray, i, pivotIndex, arrayBars);
                arrayBars[i].style.backgroundColor = 'red';
            // }, 25);
            pivotIndex++;
        }
    }
    // setTimeout(() => {
        await swap(mainArray, pivotIndex, endIdx, arrayBars);
        arrayBars[pivotIndex].style.backgroundColor = 'lightgray';
        arrayBars[startIdx].style.backgroundColor = 'lightgray';
        arrayBars[endIdx].style.backgroundColor = 'lightgray';
    // }, 25);
    return pivotIndex;
}

async function swap(arr, a, b, arrayBars) {
    let temp = arr[a];
    let tempBar = arrayBars[a].style.height;
    await sleep(25);
    arrayBars[a].style.height = arrayBars[b].style.height;
    arrayBars[b].style.height = tempBar;
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}