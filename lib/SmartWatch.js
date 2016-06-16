var WebBrowser = require('./WebBrowser');
var GameConsole = require('./GameConsole');

function NintendoDS () {
 WebBrowser.call(this);
 GameConsole.call(this, 'Nintendo DS');
}
module.exports = SmartWatch;