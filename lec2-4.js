const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
if (lines[1].length > 0) lines[1] = lines[1].split(' ');
const str = lines[1];
const n = str.length;
const p = 10**8 + 7;
const x_ = 257;
const x_2 = 258;
let h = [];
let h2 = [];
let rev_h = [];
let rev_h2 = [];
let x = [];
let x2 = [];
x[0] = 1;
x2[0] = 1;
h[0] = 0;
h2[0] = 0;
rev_h[0] = 0;
rev_h2[0] = 0;
// console.log(str);
const half = Math.floor(n / 2);
    for (let i = 1; i <= half; i++) {
        h[i] = (h[i - 1] * x_ + parseInt(str[i - 1])) % p;
        h2[i] = (h2[i - 1] * x_2 + parseInt(str[i - 1])) % p;
        x[i] = (x[i - 1] * x_) % p;
        x2[i] = (x2[i - 1] * x_2) % p;
    }
    for (let i = 1, j = n - 1; i <= half; i++, j--) {
        rev_h[i] = (rev_h[i - 1] * x_ + parseInt(str[j])) % p;
        rev_h2[i] = (rev_h2[i - 1] * x_2 + parseInt(str[j])) % p;
    }
    for (let i = 1; i <= n; i++) {
        x[i] = (x[i - 1] * x_) % p;
        x2[i] = (x2[i - 1] * x_2) % p;
    }

function isequal(from1, from2, slen) {
    console.log((h[from1 + slen] + rev_h[from2] * x[slen]) % p)
    console.log((rev_h[from2 + slen] + h[from1] * x[slen]) % p)
    // console.log(h[1]);
    // console.log(h[2] - h[1] * x[1]);
    return ((h[from1 + slen] + rev_h[from2] * x[slen]) % p ===
        (rev_h[from2 + slen] + h[from1] * x[slen]) % p);
}
function isequal2(from1, from2, slen) {
    return ((h2[from1 + slen] + rev_h2[from2] * x2[slen]) % p ===
        (rev_h2[from2 + slen] + h2[from1] * x2[slen]) % p);
}
// console.log(n);
for (let k = 1; k <= half; k++) {
    // console.log(k);
    if (isequal(0, k, k) && isequal2(0, k, k)) {
        const ans = n - k;
        fs.writeFileSync('output.txt', ans.toString() + ' ', {'flag':'a'});
    }
}
fs.writeFileSync('output.txt', n.toString(), {'flag':'a'});

// idk