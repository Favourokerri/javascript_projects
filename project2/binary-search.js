// this is my binary search function.
prompt = require('prompt-sync')()

function binary_search(x, arr) {
    let arr_length = arr.length;
    let begin_search = 0;
    let end_search = arr_length - 1;

    //starting of search
    while(begin_search <= end_search) {
        let mid = Math.floor((begin_search + end_search) / 2);
        if (x === arr[mid]) {
            console.log('found at index', mid);
            return x;
        } else if ( x < arr[mid]) {
            end_search = mid - 1;
        } else if ( x > arr[mid]) {
            begin_search = mid + 1;
        }
    }
    console.log('element not found')
    return -1;
}

//call function
let arr = [1, 2, 5, 7, 8, 89, 90, 100, 101];
let searched_item = prompt('enter the item you are looking for: ');
binary_search(Number(searched_item), arr);