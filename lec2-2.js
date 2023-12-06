const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
const str = lines[0].toString();
const n = str.length;
const p = 10**8 + 7;
const x_ = 257;
const x_2 = 258;
let h = [];
let h2 = [];
let x = [];
let x2 = [];
x[0] = 1;
x2[0] = 1;
h[0] = 0;
h2[0] = 0;
    for (let i = 1; i < n + 1; i++) {
        h[i] = (h[i - 1] * x_ + str[i - 1].charCodeAt(0)) % p;
        h2[i] = (h2[i - 1] * x_2 + str[i - 1].charCodeAt(0)) % p;
        x[i] = (x[i - 1] * x_) % p;
        x2[i] = (x2[i - 1] * x_2) % p;
    }

function isequal(from1, from2, slen) {
    return ((h[from1 + slen] + h[from2] * x[slen]) % p ===
        (h[from2 + slen] + h[from1] * x[slen]) % p);
}
function isequal2(from1, from2, slen) {
    return ((h2[from1 + slen] + h2[from2] * x2[slen]) % p ===
        (h2[from2 + slen] + h2[from1] * x2[slen]) % p);
}
let ans = n;
for (let k = 1; k < n; k++) {
    if (isequal(0, k, n - k) && isequal2(0, k, n - k)) {
        ans = k;
        break;
    }
}
fs.writeFileSync('output.txt', ans.toString(), {'flag':'a'});