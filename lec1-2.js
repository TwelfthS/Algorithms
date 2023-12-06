// let begin = Date.now();
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
if (lines[1].length > 0) lines[1].forEach(function(line, index) {
    lines[1][index] = parseInt(line)
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
function equality(array, start, end) {
    let res = 1;
    for (let i = start; i <= end; i++) {
        if (array[i] != array[start]) res = 0; 
    }
    return res;
}
function sorted(array, end) {
    let ret = 1;
    for (let i = 1; i <= end; i++) {
        if (array[i] < array[i - 1]) {
            ret = 0;
            break;
        }
    }
    return ret;
}
function quicksort(array) {
    const end = array.length - 1;
    if (end < 1 || sorted(array, end)) {
        return array;
    }
    const x = array[Math.floor(Math.random() * end)];
    const p = partition(array, 0, end, x);
    let array2 = array.splice(0, p);
    return quicksort(array2).concat(quicksort(array));
        // console.log(p);
        // if (p != start || !equality(array, start, end)) {
        //     if (p > start) quicksort(array, start, p - 1, array[Math.floor(Math.random() * (p - 1 - start) + start + 0.9)]);
        //     if (p < end) quicksort(array, p, end, array[Math.floor(Math.random() * (end - p) + p + 0.9)]);
        // }
}
// let end = lines[1].length - 1;
let result = quicksort(lines[1]);
// console.log(lines[1]);
if (result.length > 0) result.forEach(line => {
    fs.writeFileSync('output.txt', line + ' ', {'flag': 'a'});
});
// let finish = Date.now();
// console.log(`Component Persing Time: ${finish - begin} ms`);