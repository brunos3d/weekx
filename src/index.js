"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function weekNumber(date) {
    if (date === void 0) { date = new Date(); }
    var instance;
    if (typeof date === 'string' && date.length) {
        instance = new Date(date);
    }
    else if (date instanceof Date) {
        instance = date;
    }
    else {
        instance = new Date();
    }
    // Create a copy of this date object
    var target = new Date(instance.valueOf());
    var first = new Date(instance.getFullYear(), 0, 1);
    var diff = ((target.getTime() - first.getTime()) / 86400000);
    var days = (diff + first.getDay());
    return 1 + Math.floor(days / 7);
}
exports.default = weekNumber;
;
