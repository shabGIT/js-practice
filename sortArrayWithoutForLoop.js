// bubble sort
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

var myarr = [4, 5, 6, 8, 1, 2, 3, 5]
sortArray(myarr);
console.log(myarr);