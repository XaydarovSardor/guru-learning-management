window.addEventListener("DOMContentLoaded", () => {
    // burger
    const burgerBtn = document.querySelector(".menu-burger"),
        navList = document.querySelector(".header-navigation"),
        body = document.querySelector('body')
    active = document.querySelector(".active");
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active")
        navList.classList.toggle("open");
        if (body.classList.contains("no-scroll")) {
            body.classList.remove("no-scroll")
        } else {
            body.classList.add("no-scroll")
        }
    }),

        AOS.init();
    var swiper = new Swiper(".blogSwiper", {
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 14,
            },
            768: {
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

    //tabs
    const tabItem = document.querySelectorAll(".tab-link")
    const tabContent = document.querySelectorAll(".tab-content")
    function hideTabContents(){
        tabContent.forEach(content =>{
            content.classList.remove("show")
            content.classList.add("tab-hidden")
        })
        tabItem.forEach(item =>{
            item.classList.remove("active")
        })
    }
    function showTabContents(index =0){
        tabItem[index].classList.add("active")
        console.log(tabItem[index]);
        tabContent[index].classList.remove("tab-hidden")
        tabContent[index].classList.add("show")
    }
    tabItem.forEach((item, index) =>{
        item.addEventListener("click", ()=>{
            hideTabContents()
            showTabContents(index)
        })
    })
    hideTabContents()
    showTabContents()
    
})

