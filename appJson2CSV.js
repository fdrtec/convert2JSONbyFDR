var jsonexport = require('jsonexport');
var fs = require('fs');

// var reader = fs.createReadStream('data.json');
// var writer = fs.createWriteStream('out.csv');

var reader = fs.createReadStream('files/originais/OMJ-55.json');
var writer = fs.createWriteStream('files/convertidos/OMJ-55.csv');

reader.pipe(jsonexport()).pipe(writer);