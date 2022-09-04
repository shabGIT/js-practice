let line = "";
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
        line = line + "*"
    }
    line = line + "\n";
}
// inner loop print 5 stars
// outer loop appends \n for new line
console.log(line);