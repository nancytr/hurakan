$(document).ready(function() {
	// FAQ

	$("#faq .pair").addClass("collapsed").find("h3").click(function() {
		$(this).parent(".pair").toggleClass("collapsed");
	});

});
