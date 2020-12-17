const fs = require('fs');
const path = require('path');

const folderName = './src/static/diagrams';
const staticDataFiles = fs
  .readdirSync(folderName)
  .filter(file => file.endsWith('.json'))
  .sort()
  .map(file =>
    JSON.parse(fs.readFileSync(path.join(folderName, file), 'utf-8')),
  );

function mergeSinglesToDictionary() {
  return JSON.stringify(
    Object.assign({}, ...staticDataFiles.map(s => ({ [s.name]: s }))),
    null,
    2,
  );
}

fs.writeFileSync('./src/static/diagrams.json', mergeSinglesToDictionary());

fs.writeFileSync(
  './routes.txt',
  staticDataFiles.map(({ name }) => `/diagrams/detail/${name}`).join('\n'),
);
