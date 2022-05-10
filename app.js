$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight(); 
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle")

    checkScroll(scrollPos, introH);


    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        // Проверяем включение футера при перезагрузке сайта
    }



    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); //Отмеяет стандартное поведение при клике
    
        let elementId = $(this).data('scroll');  // в переменной хранится название блока, к которому будем проихводить скролл
        let elementOffset = $(elementId).offset().top; // Получаем расстоние от верха до блока в переменной

        nav.removeClass("show");

        console.log(elementOffset);

        $("html, body").animate({
        scrollTop: elementOffset - 70
        }, 700);
    });
    


    // Nav Toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    // Reviews

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    


});  // Дожидается загрузки всего элемента, а потом влияет на весь сайт