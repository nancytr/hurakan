
$(document).ready(function () {

	$('.ml16').each(function(){
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});
		
		anime.timeline({loop: 1, easing: "easeOutExpo"})
		.add({
		  targets: '.ml16 .letter',
		  translateY: [-100,0],
		  duration: 1400,
		  delay: function(el, i) {return 50 * i;}
		});

	
	ScrollReveal().reveal('.subtitle', { delay: 200 });
	ScrollReveal().reveal('.button1', { delay: 500 })
	ScrollReveal().reveal('.button2', { delay: 600 })
	ScrollReveal().reveal('.button3', { delay: 700 })
	ScrollReveal().reveal('.context', { delay: 400 });
	ScrollReveal().reveal('.wrap', { delay: 400 })
	ScrollReveal().reveal('.subtitle', { delay: 200 });
	ScrollReveal().reveal('.one', { delay: 400 })
	ScrollReveal().reveal('.two', { delay: 400 })
	ScrollReveal().reveal('.three', { delay: 400 })
	ScrollReveal().reveal('.four', { delay: 400 })
	ScrollReveal().reveal('.five', { delay: 400 })
	ScrollReveal().reveal('.six', { delay: 400 })

	//FAQ
	$("#faq .pair").addClass("collapsed").find("h5").click(function () {
		$(this).parent(".pair").toggleClass("collapsed");
	});

});
