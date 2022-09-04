let line = "";
let n = 8
for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        line = line + " ";
    }
    for (let k = 0; k < i; k++) {
        line = line + "*";
    }
    line = line + "\n";
}

console.log(line);