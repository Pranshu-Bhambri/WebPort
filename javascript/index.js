let html = document.getElementsByTagName("html")[0];
let form = document.getElementById("c-form");
let loader = document.getElementById("preloader");
let logo = document.querySelector(".logo");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");

// window.addEventListener('load',()=>{
//     loader.style.display="none";
// })

// scroll related activities
let scrollBtn = document.getElementById("scroll-up-btn");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  if (!navList.classList.contains("active") && scroll <= 20) {
    ham.style.color = "black";
  }

  if (scroll > 20) {
    navbar.classList.add("sticky");
    ham.style.color = "var(--main-color)";
  } else {
    navbar.classList.remove("sticky");
  }

  if (scroll > 343) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

});

// removing scroll from html
noScroll = () => {
  if (navList.classList.contains("active")) {
    html.classList.add("no-scroll");
  } else {
    html.classList.remove("no-scroll");
  }
};

// hiding side navbar
hide = () => {
  navList.classList.remove("active");
  cross.style.opacity = 0;
  cross.style.pointerEvents = "none";
  ham.style.pointerEvents = "auto";
  ham.style.opacity = 1;
  noScroll();
};

document.onclick = function (e) {
  if (e.target.id !== "ham" && e.target.id !== "nav-list" && e.target.id !== "cross") {
    hide();
  }
};

ham.addEventListener("click", () => {
  navList.classList.add("active");
  ham.style.opacity = 0;
  ham.style.pointerEvents = "none";
  cross.style.pointerEvents = "auto";
  cross.style.opacity = 1;
  noScroll();
});

cross.addEventListener("click", () => {
  hide();
});

// form.addEventListener('submit',function(e){
//   e.preventDefault();

//   const formData= new formData(this);

//   fetch("https://formsubmit.co/pranshu.bhambri@gmail.com", {
//     method: "POST",
//     headers: { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: formData
//     // body: JSON.stringify({
//     //     name: "FormSubmit",
//     //     message: "I'm from Devro LABS"
//     // })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// });

// scroll-up button function
scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
