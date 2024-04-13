// (function (exports, require, module, __filename, __dirname) {

// }

// )

const EventEmitter = require('events');

var url = 'http://myapp.io/log'
class myclass extends EventEmitter {
    myfunc(name) {
        console.log(' this is ' + name);
        //raise event
        this.emit('message', { uid: 1, name: 'dhruvi' });
    }

}
module.exports = myclass;