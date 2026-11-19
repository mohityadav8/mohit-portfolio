$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    // Contact form: opens the visitor's email app with the message pre-filled
    // (GitHub Pages is static, so there is no server to post to).
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        var f = this;
        var subject = "Portfolio contact from " + f.name.value;
        var body = f.message.value + "\n\n— " + f.name.value + "\n" + f.email.value +
                   (f.phone.value ? "\n" + f.phone.value : "");
        window.location.href = "mailto:ymohit799057@gmail.com?subject=" +
            encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        f.reset();
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Mohit Yadav | GPU Systems & ML Infrastructure";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back! 👋";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typed.js
var typed = new Typed(".typing-text", {
    strings: [
        "GPU systems",
        "Kubernetes ML infrastructure",
        "CUDA & performance",
        "LLM alignment research",
        "open source at NVIDIA & Microsoft",
    ],
    loop: true,
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 900,
});

// tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 12 });

// disable dev tools shortcuts
document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

/* ===== SCROLL REVEAL ===== */
const srtop = ScrollReveal({ origin: 'top', distance: '60px', duration: 900, reset: false });

srtop.reveal('.home .content h2',       { delay: 100 });
srtop.reveal('.home .content p',        { delay: 200 });
srtop.reveal('.home .content .btn',     { delay: 300 });
srtop.reveal('.home .image',            { delay: 400 });
srtop.reveal('.social-icons li',        { interval: 120, delay: 500 });

srtop.reveal('.about .content h3',      { delay: 200 });
srtop.reveal('.about .content .tag',    { delay: 250 });
srtop.reveal('.about .content p',       { delay: 300 });
srtop.reveal('.about-stats',            { delay: 350 });
srtop.reveal('.about .content .resumebtn', { delay: 400 });

srtop.reveal('.skill-category',         { interval: 150, delay: 200 });

srtop.reveal('.oss-card',               { interval: 120, delay: 150 });
srtop.reveal('.cert-card',              { interval: 100, delay: 150 });
srtop.reveal('.pub-card',               { interval: 200, delay: 200 });

srtop.reveal('.education .box',         { interval: 200 });

srtop.reveal('.work .box',              { interval: 180 });

srtop.reveal('.experience .timeline .container', { interval: 250 });

srtop.reveal('.award-card',             { interval: 100, delay: 150 });

srtop.reveal('.contact .container',     { delay: 300 });
