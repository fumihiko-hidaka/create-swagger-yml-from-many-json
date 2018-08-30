// resolve.js
const fs = require('fs');
const JsonRefs = require('json-refs');
const YAML = require('json2yaml');
const root = require('./sample/index.json');
const options = {
  filter: ['relative', 'remote']
};

const outputPath = process.cwd() + '/swagger.yml';

process.chdir('sample');

JsonRefs.resolveRefs(root, options)
  .then(function (res) {
    fs.writeFileSync(outputPath,
      YAML.stringify(res.resolved)
    );
  }, function (err) {
    console.log(err.stack);
  });