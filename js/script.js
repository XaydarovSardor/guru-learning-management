AOS.init();
var swiper = new Swiper(".blogSwiper", {
    breakpoints: {
        360:{
            slidesPerView: 1,
            spaceBetween: 14,
        },
        500:{
            slidesPerView: 1.5,
            spaceBetween: 14,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 14,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 14,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 14,

        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".eventSwiper", {
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-nextt",
        prevEl: ".swiper-button-prevv",
    },
});

// tabs 
const tabsTitle = document.querySelectorAll(".tab-link");
tabsContent = document.querySelectorAll(".tab-content");
tabsContent.forEach(item => item.classList.add("tab-hidden"))
tabsTitle.forEach(item => item.addEventListener("click", event => {
    const tabTitleTarget = event.target.getAttribute("data-tab");
    console.log(item)
    tabsTitle.forEach(element => element.classList.remove("active"));
    tabsContent.forEach(element => element.classList.add("tab-hidden"));
    item.classList.add("active");
    document.getElementById(tabTitleTarget).classList.remove("tab-hidden");
}))

document.querySelector('[data-tab="tab-1"]').classList.add("active");
document.querySelector('#tab-1').classList.remove("tab-hidden");