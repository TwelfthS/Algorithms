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
let sources = [];
let from = [];
for (let i = 1; i <= size; i++) {
    if (i !== start) {

    }
}

function allWays(curr, from, dist) {
    for (let i = 0; i < size; i++) {
        if (lines[curr][i] > 0) {
            findShortWay(dist, i + 1, dist[curr] + lines[curr][i], curr);
        }
    }
    for (let i = 0; i < size; i++) {
        if (lines[curr][i] > 0 && !from.includes(i + 1)) {
            from.push(i + 1);
            allWays(i + 1, from, dist);
        }
    }
}

function findShortWay(dist, point, path, curr) {
    if (typeof dist[point] === 'undefined' || dist[point] > path) {
        dist[point] = path;
        sources[point] = curr;
    }
    return dist[point];
}
from.push(start);
dist[start] = 0;
allWays(start, from, dist);
let point = end;
let road = [];
while (point !== start) {
    road.push(point);
    point = sources[point];
}
road.push(start);
road.reverse();
if (typeof dist[end] !== 'undefined') {
    road.forEach(line => {
        fs.writeFileSync('output.txt', line.toString() + '\n', {'flag':'a'})
    })
} else fs.writeFileSync('output.txt', '-1', {'flag':'a'})