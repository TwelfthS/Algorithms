const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
let count = [];
count.fill(0);
let pos = [];
pos[0] = 0;
let result = [];
let n = lines.length;
for (let i = 1; i < n; i++) {
    const num = lines[i] % 10;
    count[num]++; 
}
for (let i = 1; i < 10; i++) {
    pos[i] = pos[i - 1] + count[i];
}
for (let i = 1; i < n; i++) {
    result[pos[lines[i] % 10]] = lines[i] % 10;
    pos[lines[i] % 10]++;
}
if (result.length > 0) result.forEach(line => {
    fs.writeFileSync('output.txt', line.toString() + ' ', {'flag':'a'});
});