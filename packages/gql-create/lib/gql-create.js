"use strict";
const { spawn } = require("child_process");

module.exports = gqlCreate;

function gqlCreate() {
  spawn("npm", ["init", "yo", "gql-template-ts"], {
    stdio: "inherit",
  });
}
