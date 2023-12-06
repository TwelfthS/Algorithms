const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');
let lines = data.split(/\r?\n/);
lines.forEach(function(line, index) {
    lines[index] = line.split(' ');
})
for (let i = 2; i - 2 < lines[0][1]; i++) {
    let j = lines[i][0];
    let min = parseInt(lines[1][j]);
    j++;
    while (j <= lines[i][1]) {
        if (parseInt(lines[1][j]) < min) {
            fs.writeFileSync('output.txt', lines[1][j - 1] + '\n', {'flag': 'a'});
            break;
        } else if (parseInt(lines[1][j]) > min) {
            fs.writeFileSync('output.txt', lines[1][j] + '\n', {'flag': 'a'});
            break;
        }
        j++;
    }
    if (j > lines[i][1]) {
        fs.writeFileSync('output.txt', 'NOT FOUND' + '\n', {'flag': 'a'});
    }
}