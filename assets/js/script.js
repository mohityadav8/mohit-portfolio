/* Mohit Yadav — portfolio behaviour. Vanilla JS, no jQuery. */

(function () {
  "use strict";

  var topbar = document.getElementById("topbar");
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("totop");
  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));

  /* ---- mobile menu ---- */
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.firstElementChild.className = open ? "fas fa-times" : "fas fa-bars";
  });

  function closeNav() {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.firstElementChild.className = "fas fa-bars";
  }
  links.forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  /* ---- topbar lift + back-to-top ---- */
  function onScroll() {
    var y = window.scrollY;
    topbar.classList.toggle("lift", y > 24);
    toTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- scroll spy: highlight the section in view ---- */
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id]")
  );

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id;
          links.forEach(function (a) {
            a.classList.toggle("on", a.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) {
      spy.observe(s);
    });
  }

  /* ---- typed headline ---- */
  if (window.Typed) {
    new Typed(".typing-text", {
      strings: [
        "GPU systems",
        "Kubernetes ML infrastructure",
        "CUDA and performance work",
        "LLM alignment research",
        "open source at NVIDIA and Microsoft",
      ],
      loop: true,
      typeSpeed: 52,
      backSpeed: 26,
      backDelay: 1100,
    });
  }

  /* ---- contact form: hand the message to the visitor's mail app
          (GitHub Pages is static, so there is no server to post to) ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var f = ev.target;
      var subject = "Portfolio contact from " + f.name.value;
      var body =
        f.message.value +
        "\n\n— " +
        f.name.value +
        "\n" +
        f.email.value +
        (f.phone.value ? "\n" + f.phone.value : "");
      window.location.href =
        "mailto:ymohit799057@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      f.reset();
    });
  }

  /* ---- tab-away favicon + title ---- */
  var favicon = document.getElementById("favicon");
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Mohit Yadav | GPU Systems & ML Infrastructure";
      favicon.setAttribute("href", "./assets/images/favicon.png");
    } else {
      document.title = "Come back! 👋";
      favicon.setAttribute("href", "./assets/images/favhand.png");
    }
  });
})();
