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

export function convertToFlat(objName, obj) {
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
const flatObject = {};
convertToFlat("Obj1", Obj1)
console.log(flatObject);