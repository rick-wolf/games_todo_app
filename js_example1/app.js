var main = function() {
	"use strict";
	
	$(".comment-input button").on("click", function(event) {
		var $new_comment = $("<p>");
		var comment_text = $(".comment-input input").val();

		if (comment_text !== "") {
			$new_comment.text(comment_text);
			$(".comments").append($new_comment);
			$(".comment-input input").val("");
		}
		
	});


};

$(document).ready(main);