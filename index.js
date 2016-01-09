var rDate = (function () {

    function _setDate(date) {
        return new Date(_checkIfValid(date));
    }

    function _rDateException(message) {
        this.toString = function() {
            return 'DateDiffException : ' + message;
        };
    }

    function _checkIfValid(date) {

        //sample valid date format "12-19-2010" or "07/19/2010" ~ mm/dd/yyyy
        var regEx = /^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/;

        if (date.match(regEx)) {
            return date;
        } else {
            console.log('Invalid date format.');
            throw new _rDateException('Invalid date format.');
        }
    }

    function _humanise(diff) {
        // The string we're working with to create the representation
        var str = '';
        // Map lengths of `diff` to different time periods
        var values = [[' year', 365], [' month', 30], [' day', 1]];

        // Iterate over the values...
        var vLen = values.length;
        for (var i = 0; i < vLen; i++) {
            var amount = Math.floor(diff / values[i][1]);

            // ... and find the largest time value that fits into the diff
            if (amount >= 1) {
                // If we match, add to the string ('s' is for pluralization)
                str += amount + values[i][0] + (amount > 1 ? 's' : '') + ' ';

                // and subtract from the diff
                diff -= amount * values[i][1];
            }
        }

        return str;
    }

    function _getDateDiff(from, to) {

        var MSD, date1, date2, timeDiff, diffDays;

        //milliseconds per day.
        MSD   = 1000 * 3600 * 24;
        date1 = _setDate(from);
        date2 = _setDate(to);

        timeDiff = Math.abs(date1.getTime() - date2.getTime());
        diffDays = Math.ceil(timeDiff / (MSD));

        return diffDays;
        
    }

    function _getDateDiffHumanize (from, to) {

        var diffDays;

        diffDays = _getDateDiff(from, to);

        return _humanise(diffDays);

    }

    return {
        getDiffDays: _getDateDiff,
        getDiff: _getDateDiffHumanize
    };

})();


// console.log(rDate.getDiff("02/13/2015", "12/23/2015"));
// console.log(rDate.getDiffDays("02/13/2015", "12/23/2015"));

//For NPM Usage
if (typeof module !== "undefined") {
	module.exports = rDate;
}