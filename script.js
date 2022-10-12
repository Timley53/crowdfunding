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
// ///////
const no_reward_btn = document.querySelector(".no-reward-btn");
//
const bamboo_btn = document.querySelector(".bamboo-btn");
//
const blackE_btn = document.querySelector(".blackE-btn");
const completed = document.querySelector(".completed");
const got_it = document.querySelector(".got-it");
const progress = document.querySelector(".progress");
const pledge_type_noReward = document.querySelectorAll(".pledge-type-noReward");

/////////////
//////////////////
/////////////////////////
///////////////////////////////
const bamboo_amount_left = document.querySelectorAll(".bamboo-amount-left");
const black_edition_amount_left = document.querySelectorAll(
  ".black-edition-amount-left"
);
let black_edition_amount = 62;
let bamboo_amount = 101;
let back_percent = function (newP) {
  return ((89914 + newP) / 100000) * 100;
};
// console.log(back_percent(2000));

////// progress %

/////
const inputlabel = document.querySelectorAll(".input-label");
const nav = document.querySelector(".nav");
const total_amount_backed = document.querySelector(".total-amount-backed");
const total_backers = document.querySelector(".total-backers");
const bambooAmount_input = document.querySelector(".bamboo-amount");
const blackEAmount_input = document.querySelector(".blackE-amount");
const no_pledge_amount_input = document.querySelector(".no-pledge-amount");
///////////////

////variables

let total_backed_no = 89914;

let total_backers_no = 5007;

////
let bamboo_amount_left_no = 101;
let black_edition_amount_left_no = 62;
///////////////////
pledge_type_noReward.forEach((el) => {
  el.addEventListener("click", function () {
    el.style.border = "2px solid var(--primary-moderate-color)";
  });
});
///////////
const numberFormat = new Intl.NumberFormat("en");
// ///////
total_amount_backed.textContent = `$${numberFormat.format(total_backed_no)}`;
////
total_backers.textContent = `${numberFormat.format(total_backers_no)}`;

// console.log(numberFormat.format());

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

////////// fxn
const donateFxn = function () {
  total_amount_backed.textContent = `$${numberFormat.format(total_backed_no)}`;
  total_backers_no++;
  total_backers.textContent = numberFormat.format(total_backers_no);

  Modal.classList.toggle("none");
  completed.classList.toggle("none");
};

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
//
// ///////////////
inputlabel.forEach((inp) => {
  inp.addEventListener("click", function () {
    let enterPledge = inp
      .closest(".pledge-type-noReward")
      .querySelector(".enter-pledge");

    enterPledge.style.display = "flex";

    console.log(enterPledge);
  });
});

bambooAmount_input.addEventListener("keyup", function (e) {
  if (bambooAmount_input.value < 25) {
    document.querySelector(".bamboo-low").classList.remove("none");
  } else {
    // bamboo - low;
    document.querySelector(".bamboo-low").classList.add("none");
  }
});

blackEAmount_input.addEventListener("keyup", function (e) {
  if (blackEAmount_input.value < 75) {
    document.querySelector(".blackE-low").classList.remove("none");
  } else {
    // bamboo - low;
    document.querySelector(".blackE-low").classList.add("none");
  }
});

no_reward_btn.addEventListener("click", function (e) {
  let no_reward_no = Number(no_pledge_amount_input.value);
  //   console.log(no_reward_no);

  if (no_reward_no >= 1) {
    total_backed_no += Number(no_pledge_amount_input.value);
    // total_amount_backed.textContent = `$${numberFormat.format(
    //   total_backed_no
    // )}`;
    // total_backers_no++;
    // total_backers.textContent = numberFormat.format(total_backers_no);

    donateFxn();
    if (total_backed_no >= 100000) {
      progress.style.width = `100%`;
    } else {
      progress.style.width = `${back_percent(no_reward_no)}%`;
    }

    ////
    // Modal.classList.toggle("none");
    // completed.classList.toggle("none");
  }
});

bamboo_btn.addEventListener("click", function () {
  let bamboo_reward_no = Number(bambooAmount_input.value);
  console.log(bamboo_reward_no);
  //

  ////
  if (bamboo_reward_no >= 25) {
    total_backed_no += bamboo_reward_no;
    console.log(total_backed_no);
    // total_amount_backed.textContent = `$${numberFormat.format(
    //   total_backed_no
    // )}`;
    // total_backers_no++;
    // total_backers.textContent = numberFormat.format(total_backers_no);
    donateFxn();
    bamboo_amount--;
    bamboo_amount_left.forEach((el) => {
      el.textContent = bamboo_amount;
    });

    if (total_backed_no >= 100000) {
      progress.style.width = `100%`;
    } else {
      progress.style.width = `${back_percent(bamboo_reward_no)}%`;
    }

    // Modal.classList.toggle("none");
    // completed.classList.toggle("none");
  }
});

/////

blackE_btn.addEventListener("click", function () {
  let blackE_reward_no = Number(blackEAmount_input.value);
  //   console.log(blackE_reward_no);
  if (blackE_reward_no >= 75) {
    total_backed_no += blackE_reward_no;
    // console.log(total_backed_no);
    // total_amount_backed.textContent = `$${numberFormat.format(
    //   total_backed_no
    // )}`;

    // total_backers_no++;
    // total_backers.textContent = numberFormat.format(total_backers_no);
    donateFxn();
    black_edition_amount--;
    black_edition_amount_left.forEach((el) => {
      el.textContent = black_edition_amount;
    });

    if (total_backed_no >= 100000) {
      progress.style.width = `100%`;
    } else {
      progress.style.width = `${back_percent(blackE_reward_no)}%`;
    }

    // Modal.classList.toggle("none");
    // completed.classList.toggle("none");
  }
});

///////
got_it.addEventListener("click", function (e) {
  document.body.classList.toggle("stop-scrolling");
  overlay.classList.toggle("none");
  completed.classList.toggle("none");
});
