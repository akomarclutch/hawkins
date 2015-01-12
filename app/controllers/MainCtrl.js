angular.module('MainCtrl', []).controller('MainController', function($scope){

  //  add dayname method to Date object
  Date.prototype.getDayName = function(){

    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return names[this.getDay()];

  }

  //  Date instance: Dayname MonthName Day Year HH:MM:SS RelativeGMT (TIMEZONE)
  var date = new Date();

  //  Hours drop down
  $scope.hours = getHours();

  //  Make active week in scope
  $scope.weeks = generateWeek(date);

});

/*
*   description: create array of time intervals (hours and half hours)
*   @param (void)
*   return array of times
*/
function getHours(){

  var hours = ['12:00', '12:30'];

  for(i=1; i<12; i++)
    hours.push(i+':00', i+':30');

    return hours;

  }

/*
*   description: create array of day objects for a given week
*   @param dateobject
*   return array of objects
*/
function generateWeek(d){

  var week = [];

  for(i=0; i<5; i++)
    week.push({day:d.getDayName(), date:d.getDate()});

  return week;

}
