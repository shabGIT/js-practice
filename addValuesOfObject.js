// Convert object to flat structure
// Get values in one array using Object.values()
// Use reduce; skip addition if current value is not number

const flatObject = {};

function convertToFlat(objName, obj) {
    let keys = Object.keys(obj); // array of keys
    keys.forEach((key) => { // iterating over keys
        let newKey = objName + "." + key; // newkey 
        let value = obj[key]; // value for given key
        if (typeof (value) === 'object') {
            //handles objects
            convertToFlat(newKey, value); // map object k liye upar ka method execute kiye(convertToFlat)
        } else {
            // handles flats properties
            flatObject[newKey] = value; //  faltobject me key and value insert kiye
        }
    })
}
const obj1 = {
    a: 5,
    b: 7,
    c: {
        d: 8
    },
    e: "hi"
}

convertToFlat("obj1", obj1);
console.log(flatObject);

let valArray = Object.values(flatObject);
let result = valArray.reduce((acc, curr) => {
    if (typeof (curr) === 'number') {
        return acc + curr;
    } else {
        return acc;
    }
});
console.log(result);