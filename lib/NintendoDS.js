var webBrowser = require('./WebBrowser');
var gameConsole = require('./GameConsole');

function NintendoDS () {
 webBrowser.call(this);
 gameConsole.call(this, 'Nintendo DS');
}
module.exports = NintendoDS;