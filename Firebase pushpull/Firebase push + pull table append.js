

  var config = {
    apiKey: "AIzaSyDrbmaY7vwFmCw-N6Y3ukSLRKNVwShs4y8",
    authDomain: "project-99fdb.firebaseapp.com",
    databaseURL: "https://project-99fdb.firebaseio.com",
    projectId: "project-99fdb",
    storageBucket: "project-99fdb.appspot.com",
    messagingSenderId: "744922918109"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var employeeName = "";
  var role = "";
  var startDate ='';
  var monthlyRate ='';

$('#submit-info').on('click', function(){
  event.preventDefault();
  employeeName= $('#employee-name-form').val().trim();
  role= $('#role-form').val().trim();
  startDate=$('#start-date-form').val().trim();
  monthlyRate=$('#monthly-rate-form').val().trim();

  database.ref().push({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });

});

//function clearForms(){
  //$('#employee-name-form').val("");
  //$('#role-form').val("");
  //$('#start-date-form').val("");
  //$('#monthly-rate-form').val("");

//}
//var totalPayout
//var monthsWorked
//function totalBilled(){
//monthsWorked = (currentDateDays - startDateDays)/12
//totalPayout = monthsWorked*monthlyRate
//}

database.ref().on('child_added', function(whatever){
  console.log(whatever.val());
  // console.log(-L-9Kuijcute1mm4UQK7.val()employeeName);
  console.log(whatever.val().employeeName);
  console.log(whatever.val().role);
  console.log(whatever.val().startDate);
  console.log(whatever.val().monthlyRate);

 var $tr = $('<tr>');

     // name column
      var $td = $('<td>').text(whatever.val().employeeName);
      
     $tr.append($td);
      
     //role column
      var $td = $('<td>').text(whatever.val().role);
      
     $tr.append($td);
      
     // start column
      var $td = $('<td>').text(whatever.val().startDate);
      
     $tr.append($td);

     // months worked column
      var $td = $('<td>');

     $tr.append($td);

    // rate column
      var $td = $('<td>').text(whatever.val().monthlyRate);
      
     $tr.append($td);

     // billed column
      var $td = $('<td>');

     $tr.append($td);

     $('.table').prepend($tr);

}, function(errorObject){
  console.log("the read failed:"+errorObject.code);

});