var phone = require('./Phone');
var tablet = require('./Tablet');
var gameConsole = require('./GameConsole');
var webBrowser = require('./WebBrowser');

function SmartPhone (phoneNumber) {
 phone.call(this, phoneNumber);
 tablet.call(this);
 gameConsole.call(this, 'Smart Phone');
 webBrowser.call(this);
}

module.exports = SmartPhone;