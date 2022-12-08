// articles

if (window.matchMedia("(max-width: 375px)").matches) {
  $(".articles-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
} else {
  $(".articles-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
}

// our staff

if (window.matchMedia("(max-width: 375px)").matches) {
  $(".our-staff-cards").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });

  let cardContent = document.querySelector(".empty-for-desktop");

  function changeClassContent() {
    cardContent.classList.add("staff-card-name");
  }

  changeClassContent();
}

// feedback-cards

if (window.matchMedia("(max-width: 375px)").matches) {
  $(".feedback-cards").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
}

// FAQ

let faqListContent = document.querySelectorAll(".faq-list-content");
let faqImg = document.querySelectorAll(".faq-list-content-img");
console.log(faqListContent);
console.log(faqImg);

for (let i = 0; i < faqListContent.length; i += 1) {
  faqListContent[i].addEventListener("click", function () {
    let src = faqImg[i].getAttribute("src");
    if (src === "./faq/images/plus.svg") {
      faqImg[i].setAttribute("src", "./faq/images/minus.svg");
    } else {
      faqImg[i].setAttribute("src", "./faq/images/plus.svg");
    }
  });

  faqListContent[i].addEventListener("click", function (e) {
    if (e.target === faqListContent[i]) {
      if (src === "./faq/images/plus.svg") {
        faqImg[i].setAttribute("src", "./faq/images/minus.svg");
      } else {
        faqImg[i].setAttribute("src", "./faq/images/plus.svg");
      }
    }
  });
}

const navButtonMobile = document.querySelector(".nav-button-mobile");
const navButtonIcon = document.querySelector(".nav-button-mobile-icon");
const mobileNav = document.querySelector(".mobile-nav-menu");

navButtonMobile.addEventListener("click", function () {
  navButtonIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

});
