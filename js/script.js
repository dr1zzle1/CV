// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function () {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 100) {
    $(scrollTop).css("opacity", "1");
  } else {
    $(scrollTop).css("opacity", "0");
  }
}); // scroll END
//Click event to scroll to top
$(scrollTop).on("click", function () {
  /*$('html, body').animate({
      scrollTop: 0
  }, 800);*/
  alert("asdfj");
});

var app = document.getElementById("typeabletext");
var typewriter = new Typewriter(app, {
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

function closeIntro() {
  $("#intro").hide(1000);
  $(".change_mod").css("position", "absolute");
}
function sendMail(ev) {
  ev.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  window.open(
    `mailto:gploswal@gmail.com?subject=${subject}&body=${
      "I am " + name + " " + phone + ". " + message
    }`
  );
}
const theme_mode = document.getElementById("theme-mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
var curr_mode = "dark";
function changeTheme() {
  if (curr_mode === "light") {
    moon.style.display = "none";
    sun.style.display = "block";
    curr_mode = "dark";
    var element = document.body;
    element.classList.toggle("dark-mode");
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    curr_mode = "light";
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
}
