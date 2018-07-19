const request = require('request');

let greeting = '';
let dayOfWeek = '';

var d = new Date;
var hour = d.getHours();
dayOfWeek = d.toLocaleString('en-us', {  weekday: 'long' });

// depending on the hour, set greeting to a specific greeting
if (hour > 3 && hour < 12) {
  greeting = 'Good Morning'
} else if (hour >= 12 && hour < 20) {
  greeting = 'Good Afternoon'
} else if (hour >= 20 || hour <= 3) {
  greeting = 'Good Evening'
}

var helloResponse = {'greeting': greeting, 'dayOfWeek': dayOfWeek};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

it("should respond with a greeting based on local time and day", function(done) {
  request("http://localhost:5000/api/hello?json", function(error, response, body){
    expect(body).toEqual(JSON.stringify(helloResponse));
    done();
  });
});

it("should respond with a greeting based on local time and given day of week", function(done) {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  for (var day of days) {
    request("http://localhost:5000/api/hello/"+day+"?json", function(error, response, body){
      helloResponse = {'greeting': greeting, 'dayOfWeek': capitalizeFirstLetter(day)};
      expect(body).toEqual(JSON.stringify(helloResponse));
      done();
    });
  }
});
