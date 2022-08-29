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
const flatObject1 = {};

const myObj = {
    a: 1,
    b: {
        a: 4
    }
}

function convertToFlat(myObj, objName) {
    let keys = Object.keys(myObj);
    //console.log(keys, "at current Level");
    keys.forEach((key) => {
        let isObject = typeof (myObj[key]) === typeof ({});
        if (isObject) {
            //handles objects
            convertToFlat(myObj[key], objName + "_" + key);
        } else {
            // handles flats properties
            let newKey = objName + "_" + key;
            let value = myObj[key];
            flatObject[newKey] = value;
        }
    })
}
convertToFlat(myObj, "myObj")
console.log(flatObject);