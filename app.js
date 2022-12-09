//header menu




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
let subFaqList = document.querySelectorAll(".sub-faq-list");


for (let i = 0; i < faqListContent.length; i += 1) {
  faqListContent[i].addEventListener("click", function () {
    subFaqList[i].classList.toggle("active");
    faqListContent[i].classList.toggle("active");
    faqImg[i].classList.toggle("active");
  });
}

$(document).on("mouseup", function (e) {
 
  let flca = $(".faq-list-content.active"); 
  let sfla = $(".sub-faq-list.active");
  let flcia = $(".faq-list-content-img.active");
  if (!flca.is(e.target) && flca.has(e.target).length === 0) {
    
    flca.removeClass("active"); 
    sfla.removeClass("active");
    flcia.removeClass("active");
  }
});


/*mobile menu*/

const navButtonMobile = document.querySelector(".nav-button-mobile");
const navButtonIcon = document.querySelector(".nav-button-mobile-icon");
const mobileNav = document.querySelector(".mobile-nav-menu");

navButtonMobile.addEventListener("click", function () {
  navButtonIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

const mobileNavList = document.querySelector(".mobile-nav-list");

mobileNavList.addEventListener("click", function (e) {
  const mobileNavListItem = document.querySelectorAll(".mobile-nav-list-item");
  const target = e.target;
  Array.from(mobileNavListItem).forEach((item) => {
    item.classList.remove("active");
  });
  target.classList.add("active");
});

const mobileNavListItem = document.querySelectorAll(".mobile-nav-list-item");
const subMobileNavList = document.querySelector(".sub-mobile-nav-list");

mobileNavListItem[1].addEventListener("click", function () {
  subMobileNavList.classList.toggle("active");
});
