const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
function partition(array, start, end, x) {
    let l = start;
    let r = end;
    let temp;
    while (l < r) {
        while (array[l] < x && l < r) {
            l++;
        }
        while (array[r] >= x && l < r) {
            r--;
        }
        temp = array[r];
        array[r] = array[l];
        array[l] = temp;
    }
    if (l === r && array[l] < x) l++;
    return l;
}
let ans = partition(lines[1], 0, lines[1].length - 1, parseInt(lines[2]));
fs.writeFileSync('output.txt', ans + '\n', {'flag': 'a'});
fs.writeFileSync('output.txt', lines[1].length - ans + '\n', {'flag': 'a'});