$(document).ready(function() {

    var rellax = new Rellax('.rellax');

    $('.ml16').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({ loop: 1, easing: "easeOutExpo" })
        .add({
            targets: '.ml16 .letter',
            translateY: [-100, 0],
            duration: 1400,
            delay: function(el, i) { return 50 * i; }
        });


    ScrollReveal().reveal('.subtitle', { delay: 200 });
    ScrollReveal().reveal('.button1', { delay: 500 })
    ScrollReveal().reveal('.button2', { delay: 600 })
    ScrollReveal().reveal('.button3', { delay: 700 })
    ScrollReveal().reveal('.context', { delay: 400 });
    ScrollReveal().reveal('.wrap', { delay: 400 })
    ScrollReveal().reveal('.one', { delay: 400 })
    ScrollReveal().reveal('.two', { delay: 400 })
    ScrollReveal().reveal('.three', { delay: 400 })
    ScrollReveal().reveal('.four', { delay: 400 })
    ScrollReveal().reveal('.five', { delay: 400 })
    ScrollReveal().reveal('.six', { delay: 400 })


    // $(window).scroll(function() {
    //     if ($("body").width() < 600) {
    //         for (i in timelines) {
    //             timelines[i].timeline.seek(timelines[i].timeline.duration);
    //         }
    //         return;
    //     }

    //     var sectionsScrolled = $(this).scrollTop() / $("#essential").height();
    //     $("#progress div").removeClass("active");
    //     $("#progress div").eq(sectionsScrolled).addClass("active");
    //     $("section").removeClass("visible").eq(sectionsScrolled).addClass("visible");

    //     sectionsScrolled += 3 / 5;
    //     var section = parseInt(sectionsScrolled);
    //     var actualProgress = sectionsScrolled % 1;
    //     var progress = 1;
    //     if (section in timelines) progress = Math.min(1, actualProgress * timelines[section].speed);

    //     if (section + 1 in timelines) timelines[section + 1].timeline.seek(0);
    //     if (section in timelines) timelines[section].timeline.seek(timelines[section].timeline.duration * progress);
    //     if (section - 1 in timelines) timelines[section - 1].timeline.seek(timelines[section - 1].timeline.duration);
    // }).scroll();

    // for (var i = 0; i < $("section").length; i++) $("#progress").append($("<div data-pos=" + i + ">"));

    // $("#progress div").click(function() {
    //     smoothScroll($(window), $("section").eq($(this).attr("data-pos")).offset().top, 300);
    // }).first().addClass("active");

    // $("#Beca .nav__item").find("h5").click(function() {
    //     $(this).parent(".pair").toggleClass("collapsed");
    // });


    //FAQ
    $("#faq .pair").addClass("collapsed").find("h5").click(function() {
        $(this).parent(".pair").toggleClass("collapsed");
    });

});