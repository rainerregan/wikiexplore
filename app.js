fadein();
function fadein(){
  $('body').hide().fadeIn(1000);
}
$(document).ready(function() {
  
  $('#searchTerm').click(function(){
 $('#searchTerm').attr('placeholder', 'Wikipedia Search');
  });
  
  function sample() {
    var searchTerm = $("#searchTerm").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      
      success: function(data) {
        $("#output").html("<hr>");
        
        for (var i = 0; i < data[1].length; i++) {
          
        
         $('#output').append("<div><a target='blank' href="+data[3][i]+"><h2>"+data[1][i]+"</h2></a>"+"<p>"+data[2][i]+"</p></div><hr>");
          
          
        } //for loop ends
        $("#searchTerm").val("");
      },
      error: function(error) {
        alert("error");
      }
    }); //ajax ends
  }; //click function ends
  $("#searchTerm").keypress(function(e) {
    if (e.which == 13) {
      sample();
    }
  }); //on keypress
});
