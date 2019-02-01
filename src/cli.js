#!/usr/bin/env node

const getopts = require("getopts");
const { format = "dql" } = getopts(process.argv);
const lineBreak = "\n";

require("./index")(function(err, list) {
  if (err !== null) {
    console.error("error getting list", err);
    return process.exit(1);
  }

  if (format === "dql") {
    return console.log(list.map(item => `"${item}"`).join(lineBreak));
  }

  if (format === "sql") {
    return console.log(list.map(item => `'${item}'`).join(lineBreak));
  }

  if (format === "json") {
    return console.log(JSON.stringify(list));
  }

  console.log(list.join("\n"));
});
