# DateDiff

[![Build Status](https://travis-ci.org/xrexonx/dateDiff.svg?branch=master)](https://travis-ci.org/xrexonx/dateDiff)

A simple and lightweight javascript date helper that calculates the difference between two dates.

## Installation

Install via bower

```sh
bower install dateDiff --save
```

## Sample usage

```js
<script src="/dist/rDateDiff.min.js"></script>
```

```js
var date1 = "02/13/2015";
var date2 = "12/23/2015";

var getDiff = rDate.getDiff(date1, date2);
var getDays = rDate.getDiffDays(date1, date2);

console.log(getDiff);
//Outputs => 10 months 13 days

console.log(getDays + 'days');
//Outputs => 313 days
```

## License
MIT © [Rexon A. De los Reyes](http://xrexonx.github.io)


#### Thanks and enjoy. Godspeed!