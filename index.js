var http = require ('http');
var Hotel = require('./mdl.js');
var events = require('events');

http.createServer(function(req, res) {
  res.writeHead(200);//status code in header
//
    var newHotel = {
        hotel_name: 'Agamim',
        hotel_industry: 'Spa hotel',
        hotelGrade: 0 ,
    }

    var hotel = Hotel(newHotel);
    hotel.on("rankChanged", hotel.displayRank); //displayRank function also checks if the hotel grade<0

    // Run methods //
    hotel.addLike(5);
    hotel.addLike(4);
    hotel.addLike(1);
    hotel.UnLike(6);
    hotel.UnLike(2);
    hotel.UnLike(6);
    hotel.addLike(4);

   
    var log=hotel.returnLog();
  res.write("Big success!\n");//response body
  res.write(log);//response body


    res.end();//close connection
  }).listen(8080);//listen for connection on this port
console.log('listening on port 8080');
