const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
const str = lines[0].toString();
const n = str.length;
const p = 10**8 + 7;
let x_ = 257;
let h = [];
let x = [];
x[0] = 1;
h[0] = 0;
    for (let i = 1; i < n + 1; i++) {
        h[i] = (h[i - 1] * x_ + str[i - 1].charCodeAt(0)) % p;
        x[i] = (x[i - 1] * x_) % p;
    }

function isequal(from1, from2, slen) {
    return ((h[from1 + slen] + h[from2] * x[slen]) % p ===
        (h[from2 + slen] + h[from1] * x[slen]) % p);
}

for (let i = 0; i < lines[1]; i++) {
    const ans = isequal(parseInt(lines[2 + i][1]), parseInt(lines[2 + i][2]), parseInt(lines[2 + i][0]));
    if (ans) {
        fs.writeFileSync('output.txt', 'yes\n', {'flag': 'a'});
    } else {
        fs.writeFileSync('output.txt', 'no\n', {'flag': 'a'});
    }
}