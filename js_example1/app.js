var main = function() {
	"use strict";
	
	// insert comments into list
	var addComment = function() {
		var new_comment = $("<p>");
		var comment_text = $(".comment-input input").val();

		if (comment_text !== "") {
			new_comment.text(comment_text);
			new_comment.hide();
			$(".comments").append(new_comment);
			new_comment.slideDown();
			$(".comment-input input").val("");
		}
	};


	// event listener for button
	$(".comment-input button").on("click", function(event) {
		addComment();
		
	});


	// event listener for enter key
	$(".comment-input input").on("keypress", function(event) {
		if (event.keyCode === 13) {
			addComment();
		}
		
	});


};

$(document).ready(main);