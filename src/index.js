const { exec } = require("child_process");
const cmd =
  "defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences | grep SSIDString";
const lineBreakPattern = /\n/g;
const prefix = /SSIDString = "?/;
const suffix = /"?;$/;
const blank = "";

function osxListSsid(done) {
  exec(cmd, function(err, stdout) {
    if (err !== null) {
      return done(err);
    }

    let list = stdout
      .trim()
      .split(lineBreakPattern)
      .map(item => item.trim())
      .map(item => item.replace(prefix, blank).replace(suffix, blank));

    done(null, list);
  });
}

module.exports = osxListSsid;
