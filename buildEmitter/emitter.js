/** This emiiter is going to  allow us to say an event has happened
 * and to respond to the event heppening 
 */

 // function constructor

//  function Emitter() {
//      this.events = {
//         //  prop: []
//      };
//  }

//  Emitter.prototype.on = function (type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
//  }
    
//  Emitter.prototype.emit = function(type) {
//      if (this.events[type]) {
//          this.events[type].forEach(function(listener){
//              listener();
//          });
//      }
//  }

//  module.exports = Emitter;

function whatTheHeck() {
    this.eve = {

    };
}

whatTheHeck.prototype.heck = function(friends,hackerthon) { 
    this.eve[friends] = this.eve[friends] || [];
    this.eve[friends].push(hackerthon);
    
};

whatTheHeck.prototype.cool = function(friends) {
    if(this.eve[friends]) {
        this.eve[friends].forEach(function(hackerthon){
            hackerthon();
        });
    }
}

module.exports = whatTheHeck;

// function Emitter() {
//     this.events = {

//     }
// }

// Emitter.prototype.on = function(type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
// }

// Emitter.prototype.emit = function(type) {
//     if (this.events[type]) {
//         this.events[type].forEach(function (listener) {
//             listener();
//         });
//     }
// }

// module.exports = Emitter;