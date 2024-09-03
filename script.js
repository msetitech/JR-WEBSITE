document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  loader.style.display = "flex";
  setTimeout(function () {
    loader.style.display = "none";
  }, 500);
});

let menuTop = document.querySelector(".phonenav");
let menuhider = document.querySelector(".phonemenutop-hide");
let featureR = document.querySelector(".featOne");
let aboutR = document.querySelector(".aboutOne");
let ServicersT = document.querySelector(".Servicestop");
let frequentl = document.querySelector(".FrequentlyQn");

menuTop.addEventListener("click", function () {
  menuhider.classList.toggle("phonemenutop-hide");
});

featureR.addEventListener("click", function () {
  menuhider.classList.toggle("phonemenutop-hide");
});
aboutR.addEventListener("click", function () {
  menuhider.classList.toggle("phonemenutop-hide");
});
ServicersT.addEventListener("click", function () {
  menuhider.classList.toggle("phonemenutop-hide");
});
frequentl.addEventListener("click", function () {
  menuhider.classList.toggle("phonemenutop-hide");
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 900; // Adjust speed here

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

const nextBtn = document.querySelector(".iconleft");
nextBtn.addEventListener("click", () => {
  let carousel = document.querySelectorAll(".carousel-item");
  carousel.forEach((item, i) => {
    let value = i + 1;
    item.style.transform = `translateX(${value * 100}px)`;
  });
});

const year = new Date().getFullYear();
const jryear = (document.querySelector(".year").textContent = year);

const quiz = document.querySelectorAll(".question");
quiz.forEach((qn) => {
  qn.addEventListener("click", () => {
    const answer = document.querySelector(".answer");
    answer.classList.toggle("activeanser");
  });
});
