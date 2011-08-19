
var Z = require('../zlog');

var s = 'String';
var n = 5678;

Z.log_level = Z.WARN;

function f() {
    Z.info('in function f');

    Z.debug('test debug', 4);
    Z.info('test info', 1);
    Z.warn('test warn', 2);
    Z.error('test error', 3);
    Z.fatal('test fatal', 4);
}

f();
