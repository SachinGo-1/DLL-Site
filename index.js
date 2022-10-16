$(function() {

    //Scroll event
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.go-top').fadeIn('slow');
        if (scrolled < 200) $('.go-top').fadeOut('slow');
    });

    //Click event
    $('.go-top').click(function() {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });

});


/*----- youtube js starts here -------*/

$(document).ready(function() {
    $('#play-video').on('click', function(ev) {

        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
});


/*----- youtube js Ends here -------*/



window.addEventListener('DOMContentLoaded', (event) => {
    $('form.box').addClass('show')
    $('.form-content select').on('change', function() {
        if ($(this).val() == 'choose') {
            $('form.box').addClass('show')
        } else {
            $('form.box').removeClass('show')
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    $('.navbar-links li:first-child a').addClass('active')
    $('.circle-section').click(function() {
        $('.back-video-2').toggleClass('show')
        $('.container').toggleClass('show')
        $('.circle-section').toggleClass('show')
    })

    let scroll_item = document.querySelectorAll('.scroll-effect')
    let nav_items = document.querySelectorAll('.navbar-links li a')

    window.onscroll = () => {
        scroll_item.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 180;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')
            if (top >= offset && top < offset + height) {
                nav_items.forEach(link => {
                    link.classList.remove('active')
                    document.querySelector('.navbar-links li a[href*=' + id + ']').classList.add('active')
                })
            }
        })
    }
})


function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
    }, 'google_translate_element');
}

$(function() {
    $('.header .col-right').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.header .col-right').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.header').toggleClass('mobile_class')
            // $('.header .col-right').slideUp(250);
        return false;
    });
});