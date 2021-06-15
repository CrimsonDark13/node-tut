const path = require('path');

console.log(path.sep);

const filePath = path.join('\content', 'subfolder', 'text.txt');
console.log(filePath);

const absolute = path.resolve('\content', 'subfolder', 'text.txt');
console.log(absolute);