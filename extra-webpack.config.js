const fs = require('fs');
const path = require('path');

function mergeSinglesToDictionary(folderName) {
  return JSON.stringify(
    Object.assign(
      {},
      ...fs
        .readdirSync(folderName)
        .filter(file => file.endsWith('.json'))
        .sort()
        .map(file =>
          JSON.parse(fs.readFileSync(path.join(folderName, file), 'utf-8')),
        )
        .map(s => ({ [s.name]: s })),
    ),
    null,
    2,
  );
}

fs.writeFileSync(
  './src/static/diagrams.json',
  mergeSinglesToDictionary('./src/static/diagrams'),
);
