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

    $("#contact-form").submit(function (event) {
        event.preventDefault();
        alert("Thanks for reaching out! I will get back to you soon.");
        document.getElementById("contact-form").reset();
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Mohit Yadav";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back! 👋";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typed.js
var typed = new Typed(".typing-text", {
    strings: ["full stack development", "open source contribution", "machine learning", "problem solving"],
    loop: true,
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 600,
});

// ============================================================
// SKILLS — embedded directly (no fetch needed, works locally!)
// ============================================================
const skillsData = [
    { name: "Python",      icon: "https://img.icons8.com/color/96/python.png" },
    { name: "C++",         icon: "https://img.icons8.com/color/96/c-plus-plus-logo.png" },
    { name: "JavaScript",  icon: "https://img.icons8.com/color/96/javascript.png" },
    { name: "C",           icon: "https://img.icons8.com/color/96/c-programming.png" },
    { name: "ReactJS",     icon: "https://img.icons8.com/color/96/react-native.png" },
    { name: "HTML5",       icon: "https://img.icons8.com/color/96/html-5.png" },
    { name: "CSS3",        icon: "https://img.icons8.com/color/96/css3.png" },
    { name: "NodeJS",      icon: "https://img.icons8.com/color/96/nodejs.png" },
    { name: "Git",         icon: "https://img.icons8.com/color/96/git.png" },
    { name: "GitHub",      icon: "https://img.icons8.com/ios-filled/96/ffffff/github.png" },
    { name: "Linux",       icon: "https://img.icons8.com/color/96/linux.png" },
    { name: "VS Code",     icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
    { name: "ML / AI",     icon: "https://img.icons8.com/color/96/artificial-intelligence.png" },
    { name: "DSA",         icon: "https://img.icons8.com/color/96/data-configuration.png" },
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
          <div class="info">
            <img src="${skill.icon}" alt="${skill.name}" width="52" height="52" />
            <span>${skill.name}</span>
          </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

showSkills(skillsData);

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
const srtop = ScrollReveal({ origin: 'top', distance: '80px', duration: 1000, reset: true });
srtop.reveal('.home .content h2', { delay: 100 });
srtop.reveal('.home .content p',  { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 300 });
srtop.reveal('.home .image',      { delay: 400 });
srtop.reveal('.social-icons li',  { interval: 150, delay: 500 });

srtop.reveal('.about .content h3',            { delay: 200 });
srtop.reveal('.about .content .tag',          { delay: 250 });
srtop.reveal('.about .content p',             { delay: 300 });
srtop.reveal('.about .content .box-container',{ delay: 350 });
srtop.reveal('.about .content .resumebtn',    { delay: 400 });

srtop.reveal('.skills .container .bar', { interval: 100, delay: 200 });

srtop.reveal('.education .box', { interval: 200 });

srtop.reveal('.work .box',       { interval: 200 });

srtop.reveal('.experience .timeline .container', { interval: 300 });

srtop.reveal('.contact .container', { delay: 300 });
