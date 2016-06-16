var watch = require('./Watch');
var tablet = require('./Tablet');

function SmartWatch () {
 watch.call(this);
 tablet.call(this, 'Tablet');
}
module.exports = SmartWatch;