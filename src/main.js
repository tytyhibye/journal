// function WordCount(str) {
//   var totalSoFar = 0;


$(document).ready(function() {
  $("#formGroup").submit(function(event) {
    event.preventDefault();

    var titleText = $("#title").val();
    var bodyText = $("#body").val();
    // var output = ;
    $('#title-out').html(titleText);
    $('#output').html(bodyText);
  });
});