/*


*/

$(function() {

  $('#alertMe').click(function(e) {

    e.preventDefault();

    $('#successAlert').slideDown();

  });

  $('#alertMe2').click(function(e) {

    e.preventDefault();

    $('#warningAlert').slideDown();

  });

});
