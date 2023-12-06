const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    if (lines[index].length > 0) lines[index] = line.split(' ');
});
const size = lines[0][0];
for (let i = 0; i <= size; i++) {
    lines[i].forEach(function(line, index) {
        lines[i][index] = parseInt(line);
    });
}
const start = lines[0][1];
const end = lines[0][2];
let dist = [];
let from = [];
for (let i = 1; i <= size; i++) {
    if (i !== start) {

    }
}

function allWays(curr, from, dist) {
    let min = -1;
    for (let i = 0; i < size; i++) {
        if (lines[curr][i] > 0) {
            findShortWay(dist, i + 1, dist[curr] + lines[curr][i]);
        }
    }
    while (min !== curr - 1) {
        min = curr - 1;
        for (let i = 0; i < size; i++) {
            if (lines[curr][i] > 0 && min === curr - 1 && !from.includes(i + 1)) min = i;
            if (lines[curr][i] > 0 && !from.includes(i + 1) && lines[curr][i] < lines[curr][min]) {
                min = i;
            }
        }
        console.log(curr, min + 1, dist[min + 1]);
        if (min !== curr - 1) {
            // console.log('push with ', min + 1)
            from.push(min + 1);
            allWays(min + 1, from, dist);
        }
    }
}

function findShortWay(dist, point, path) {
    if (typeof dist[point] === 'undefined' || dist[point] > path) {
        dist[point] = path;
    }
    return dist[point];
}
from.push(start);
dist[start] = 0;
allWays(start, from, dist);
if (typeof dist[end] !== 'undefined') fs.writeFileSync('output.txt', dist[end].toString(), {'flag':'a'})
else fs.writeFileSync('output.txt', '-1', {'flag':'a'})