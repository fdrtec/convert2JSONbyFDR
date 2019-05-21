let csvToJson = require('convert-csv-to-json');

let fileInputName = 'codigos_resultados.csv';
let fileOutputName = 'codigos_resultados.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
