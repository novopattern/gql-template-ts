'use strict';

const factory = require('yargs/yargs');
const gqlCreate = require('./gql-create');

module.exports = cli;

function cli(cwd) {
  const parser = factory(null, cwd);

  parser.alias('h', 'help');
  parser.alias('v', 'version');

  parser.usage(
    "$0",
    "TODO: description",
    yargs => {
      yargs.options({
        // TODO: options
      });
    },
    argv => gqlCreate(argv)
  );

  return parser;
}
