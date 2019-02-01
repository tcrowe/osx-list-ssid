
# osx-list-ssid

Get a list of SSIDs that your Mac knows. If it's helpful for you please ⭐️.

`npm install osx-list-ssid`

## JavaScript API

```js
const osxListSsid = require("osx-list-ssid");

osxListSsid(function(err, list) {
  if (err !== null) {
    return console.error("error getting ssid list", err)
  }

  // list should be an array
  // each list item should be a string
  console.log("list", list)

  // ["one", "two", "three"]
});
```

## CLI

```sh
osx-list-ssid # default, double quote lines
osx-list-ssid --format dql # default, double quote lines
osx-list-ssid --format sql # single quote lines
osx-list-ssid --format json # json
```

It looked around for some other modules that do this simple thing but it was not immediately obvious. If you know other modules send me a link or a PR and I will include it here.

## How is it done?

I read this article which talks about some ways to get the SSID.

http://osxdaily.com/2012/12/21/list-wi-fi-networks-mac-has-connected-to-before/

It runs this command:

```sh
defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences | grep SSIDString
```

This script just has one function that runs that script then it filters out some text. If you run the above command without piping to `grep` it has a lot more information about each SSID.

## Copying, license, and contributing

Copyright (C) Tony Crowe <github@tonycrowe.com> (https://tcrowe.github.io) 2018

Thank you for using and contributing to make osx-list-ssid better.

⚠️ Please run `npm run prd` before submitting a patch.

⚖️ osx-list-ssid is Free Software protected by the GPL 3.0 license. See [./COPYING](./COPYING) for more information. (free as in freedom)
