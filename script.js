"strict mode";
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelector(".nav-link");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const ulWrapper = document.querySelector(".ul-wrapper");
const menuBAr = document.querySelector(".menu-bar");
const fa_menu = document.querySelector(".fa-bars");
const topBtn = document.querySelector(".top");
const bookmark = document.querySelector(".bookmark");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const Modal = document.querySelector(".modal");

///////////////////
const nav = document.querySelector(".nav");

const linkOpacity = function (e, opacity) {
  const target = e.target;

  //   console.log();

  if (target.closest("li")?.classList.contains("nav-link")) {
    target.style.opacity = opacity;
  }
};

header.addEventListener("mouseover", function (e) {
  linkOpacity(e, "0.5");
});
header.addEventListener("mouseout", function (e) {
  linkOpacity(e, "1");
});

const headerCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.style.transition = "all .5s";
    nav.classList.add("sticky");
    nav.querySelector("h2").style.color = "hsl(176, 72%, 28%)";
    menuBAr.style.color = "hsl(176, 72%, 28%)";
    // fa_menu.style.color = "hsl(176, 72%, 28%)";
    nav.querySelectorAll("a").forEach((a) => {
      a.style.color = "hsl(176, 72%, 28%)";
    });
    topBtn.style.opacity = "1";
  } else {
    nav.style.transition = "all .5s";
    nav.classList.remove("sticky");
    menuBAr.style.color = "white";
    topBtn.style.opacity = "0";

    nav.querySelectorAll("a").forEach((a) => {
      a.style.color = "white";
      nav.querySelector("h2").style.color = "white";
    });
  }
};

const headerOption = {
  root: null,
  threshold: 0,
  rootMargin: "150px",
};

const ObserverHeader = new IntersectionObserver(headerCallback, headerOption);

ObserverHeader.observe(header);

//////////
menuBAr.addEventListener("click", function (e) {
  overlay.classList.toggle("none");

  ulWrapper.classList.toggle("display");
  document.body.classList.toggle("stop-scrolling");

  setTimeout(() => {
    ulWrapper.classList.toggle("opacity");
  }, 10);
  document.body.classList.toggle("stop-scrolling");
  fa_menu.classList.toggle("fa-xmark");
});
let book = 1;
/////bookmark listener
bookmark.addEventListener("click", function (e) {
  if (book === 1) {
    book = 2;
  } else {
    book = 1;
  }
  //   console.log(book);
  document.querySelector(".tag").classList.toggle("tag-active");

  document
    .querySelector(".bookmarked-writing")
    .classList.toggle("bookmark-active");
  if (book === 2) {
    document.querySelector(".bookmarked-writing").textContent = "Bookmarked";
  } else {
    document.querySelector(".bookmarked-writing").textContent = "Bookmark";
  }
});

// show-modal

showModal.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    document.body.classList.toggle("stop-scrolling");
    overlay.classList.toggle("none");
    Modal.classList.toggle("none");
  });
});
closeModal.addEventListener("click", function (e) {
  document.body.classList.toggle("stop-scrolling");
  overlay.classList.toggle("none");
  Modal.classList.toggle("none");
});
