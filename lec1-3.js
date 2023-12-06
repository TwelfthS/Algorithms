const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
if (lines[1].length > 0) lines[1].forEach(function(line, index) {
    lines[1][index] = parseInt(line)
});
if (lines[3].length > 0) lines[3].forEach(function(line, index) {
    lines[3][index] = parseInt(line)
});
function merge(array1, array2) {
    let arr = [];
    while (array1.length && array2.length) {
        if (array1[0] <= array2[0]) {
            arr.push(array1.shift());
        } else {
            arr.push(array2.shift());
        }
    }
    return [...arr, ...array1, ...array2];
}
let result = merge(lines[1], lines[3]);
if (result.length > 0) result.forEach(line => {
    fs.writeFileSync('output.txt', line + ' ', {'flag': 'a'});
});
