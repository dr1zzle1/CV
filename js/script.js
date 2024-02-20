let scrollTop = document.querySelector(".scrollTop");

window.scroll(function () {
  // declare letiable
  let topPos = document.querySelector(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 100) {
    document.querySelector(scrollTop).css("opacity", "1");
  } else {
    document.querySelector(scrollTop).css("opacity", "0");
  }
});

let app = document.getElementById("typeabletext");
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(300)
  .typeString("Front-end developer")
  .pauseFor(300)
  .deleteAll()
  .typeString("Competitive Programmer")
  .pauseFor(300)
  .start();

AOS.init();
setTimeout(() => {
  if (localStorage.getItem("intro") !== "true") {
    localStorage.setItem("intro", "true");
    $("#intro").show(1000, "linear");
    $("#intro").css("display", "flex");
    $(".change_mod").css("position", "fixed");
  }
}, 5000);

function sendMail(ev) {
  ev.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  window.open(
    `mailto:dr1zzlevmr@gmail.com?subject=${subject}&body=${
      "I am " + name + " " + phone + ". " + message
    }`
  );
}

const theme_mode = document.getElementById("theme-mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
let curr_mode = "dark";
function changeTheme() {
  if (curr_mode === "light") {
    moon.style.display = "none";
    sun.style.display = "block";
    curr_mode = "dark";
    let element = document.body;
    element.classList.toggle("dark-mode");
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    curr_mode = "light";
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
}
