const obj1 = {
    a: 10,
    b: 30,
    c: {
        d: 5,
        e: 2,
        f: {
            g: 8,
            h: 5,
            i: {
                j: 7,
                k: 2,
            }
        }
    },
    l: 4,
}

const flatObject = {};

const myObj = {
    a: 1,
    b: {
        a: 4
    }
}

function convertToFlat(myObj, objName) {
    let keys = Object.keys(myObj);
    keys.forEach((key) => {
        let newKey = objName + "_" + key;
        let value = myObj[key];
        if (typeof (value) === 'object') {
            //handles objects
            convertToFlat(value, newKey);
        } else {
            // handles flats properties
            flatObject[newKey] = value;
        }
    })
}
convertToFlat(myObj, "myObj")
console.log(flatObject);