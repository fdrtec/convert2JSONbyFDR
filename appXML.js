// ex execute with $ cat file.xml | node appXML

const xmlToJson = require('xml-to-json-stream');
const fs = require('fs');

const parser = xmlToJson();
const stream = parser.createStream();
const jsonFile = fs.createWriteStream('jsonFile.json')

process.stdin.pipe(stream).pipe(jsonFile);


