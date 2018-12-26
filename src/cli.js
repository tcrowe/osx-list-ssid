#!/usr/bin/env node
require("./index")(function(err, list) {
  if (err !== null) {
    console.error("error getting list", err);
    return process.exit(1);
  }

  console.log(list.join("\n"));
});
