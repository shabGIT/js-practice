let line = "";
let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        line = line + " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        line = line + "*";
    }
    line = line + "\n"
}
console.log(line)