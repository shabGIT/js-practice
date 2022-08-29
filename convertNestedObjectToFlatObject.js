const Obj1 = {
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


const myObj = {
    a: 1,
    b: {
        a: 4
    }
}

function convertToFlat(objName, obj) {
    let keys = Object.keys(obj);
    keys.forEach((key) => {
        let newKey = objName + "." + key;
        let value = obj[key];
        if (typeof (value) === 'object') {
            //handles objects
            convertToFlat(newKey, value);
        } else {
            // handles flats properties
            flatObject[newKey] = value;
        }
    })
}
const flatObject = {};
convertToFlat("Obj1", Obj1)
console.log(flatObject);