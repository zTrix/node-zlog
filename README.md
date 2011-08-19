
# ZLog
ZLog is a light-weight logging tool for [node.js](http://nodejs.org), which supports logging level, logging color, logging position information, and logging timestamp. 

## How to use
* Just put `zlog.js` where you need, and `require` it.

## Log Level
* **DEBUG** 1
* **INFO** 2
* **WARN** 3
* **ERROR** 4
* **FATAL** 5

## Log functions
There are 5 logging functions in total: 
 `debug`, `info`, `warn`, `error`, `fatal`

Each function takes any number of arguments and print out all of them.

## Settings
### set log level

    var Z = require('zlog');
    Z.log_level = Z.INFO;

### set color

    var Z = require('zlog');
    Z.enable_color = true;

## Example
    var Z = require('zlog');
    Z.enable_color = true; // default is true
    Z.log_level = Z.INFO;
    Z.info('test info');
    Z.warn('test warn, followed by a number', 2);
    Z.error('test error, followed by an array', [3, 4]);
    Z.fatal('test fatal, followed by an object', {a:1, b:2});

## Screenshot
<img src="https://raw.github.com/zTrix/node-zlog/master/test/test.png" border = "0"/>

