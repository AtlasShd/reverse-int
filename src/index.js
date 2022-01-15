'use strict';

module.exports = function reverse(n) {
    let result = '';
    Array.from(String(Math.abs(n))).forEach((i) => {
        result = i + result;
    });
    return result;
}
