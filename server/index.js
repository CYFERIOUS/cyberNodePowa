var serverNormal = require('./server');
var serverPerformance = require('./performance');
var jasonArgonaut = require('./jason');
var routes = require('./routes');

module.exports = {
    serverNormal:serverNormal,
    serverPerformance:serverPerformance,
    jasonArgonaut:jasonArgonaut,
    routes:routes
}