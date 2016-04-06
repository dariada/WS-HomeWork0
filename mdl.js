var events = require('events');
var util = require('util');
util.inherits(Hotel, events.EventEmitter);

function Hotel(){//creates a variable scope
    this.data = {//Will holds a basic info for each hotel
    hotel_name: null,
    hotel_industry: null,
    hotelGrade: null ,
    };
    events.EventEmitter.call(this);
    this.setAllData = function(info) {
      for (var i in this.data) {
          this.data[i]= info[i];
      }
    };
    var log;//variable that will hold all print logs

    this.addLike = function(counter) {
        this.data.hotelGrade += counter;
        this.emit('rankChanged');// fire event
    }
    this.UnLike = function(counter) {
        this.data.hotelGrade -= counter;
        this.emit('rankChanged');// fire event
    }
    this.displayRank = function (){
        if(this.data.hotelGrade<0) { //checks if grate<0
           console.log("Invalid rating: " + this.data.hotelGrade);
           this.log+="Invalid rating: " + this.data.hotelGrade + "\n";
         }
        else{ //if grate>=0
          console.log("Hotel: "+this.data.hotel_name+ " - " +this.data.hotel_industry+ ", the rank is: " + this.data.hotelGrade);
          this.log+="Hotel: "+this.data.hotel_name+ " - " +this.data.hotel_industry+ ", the rank is: " + this.data.hotelGrade + "\n";
          }
    }
    this.returnLog = function() //log function
    {
      return this.log;
    }
};
module.exports = function(info) {
  var newHotel = new Hotel(); //creates instance
  newHotel.setAllData(info);
  return newHotel;
};
