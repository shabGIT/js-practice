let arr = [1, "hi", 5, [4, 5, [6, 7, "hello"]]];
// if current value is array, then handle it
// else add to flatArray

let flatArray = [];

function convertToFlatArray(arrayData) {
    arrayData.forEach(currElement => {
        if (typeof (currElement) === 'object') {
            convertToFlatArray(currElement);
        } else {
            flatArray.push(currElement);
        }
    });
}

convertToFlatArray(arr);
console.log(flatArray);