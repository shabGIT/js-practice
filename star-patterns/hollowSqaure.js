let line = "";
let n = 10;
for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
        if (j === 0 || j === n - 1) {
            line = line + "*";
        } else if (i === 0 || i === n - 1) {
            line = line + "*"
        } else {
            line = line + " ";
        }

    }
    line = line + "\n";
}
// outer loop, 0th & n-1 index prints star
// inner loop, 0th & n-1 index prints star
// intermdiate spaces are printed in the else part because first two conditions are not satsified
console.log(line);