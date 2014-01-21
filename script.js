/* Exercise 1: Wish list */
function addToList(item) {
	$('#items').append("<li>" + item + "</li>");

   $("#item").val("");
  // empty the input

  // increment the current pending counter
}




$(document).on('click','#add-to-list', function() {
	var value = $("#item").val();
	addToList(value);
});


$(document).on('keypress','#item', function(event) {
	if( event.keyCode == 13){
		var value = $("#item").val();
		addToList(value);
	}
});