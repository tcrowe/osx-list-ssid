const assert = require("assert");
const path = require("path");
const osxListSsid = require("../src/index");
const { exec } = require("child_process");
const cliPath = path.join(__dirname, "..", "src", "cli.js");

describe("osxListSsid", function() {
  it("get list", function(done) {
    osxListSsid(function(err, list) {
      assert.equal(err, null);
      list.should.be.an.Array;
      list.forEach(function(item) {
        item.should.be.a.String;
        item.length.should.not.be.eql(0);
      });
      done();
    });
  });

  it("cli", function(done) {
    exec(cliPath, function(err, stdout) {
      assert.equal(err, null);
      stdout.should.be.a.String;
      stdout
        .trim()
        .split("\n")
        .forEach(function(item) {
          item.should.be.a.String;
          item.length.should.not.be.eql(0);
        });
      done();
    });
  });
});
