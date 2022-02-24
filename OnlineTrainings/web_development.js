// Coupon Ribbon
let dest = new Date("feb 26, 2022 10:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();

  let time_diff = dest - now;

  let days = Math.floor(time_diff / (60 * 60 * 24 * 1000));
  let hours = Math.floor(
    (time_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((time_diff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((time_diff % (1000 * 60)) / 1000);
  document.getElementById(
    "coupon_coutdown"
  ).innerHTML = `${days}d: ${hours}h: ${minutes}m: ${sec}s`;
}, 1000);

// Dropdown Hover Options
// let dropdown = document.getElementById("dropdown_hover");
// dropdown.addEventListener("hover", ()=>{

// })

$(".container1").click(function () {
  $(".hid_container1").slideToggle("slow");
});

$(".container2").click(function () {
  $(".hid_container2").slideToggle("slow");
});

$(".container3").click(function () {
  $(".hid_container3").slideToggle("slow");
});

$(".container4").click(function () {
  $(".hid_container4").slideToggle("slow");
});

$(".container5").click(function () {
  $(".hid_container5").slideToggle("slow");
});

document.querySelector("form").addEventListener("submit", formSubmit);
var formArr = JSON.parse(localStorage.getItem("userdata")) || [];
function formSubmit(event) {
  event.preventDefault();
  var email = document.querySelector("#mail").value;
  var password = document.querySelector("#pass").value;
  var firstName = document.querySelector("#name").value;
  var lastName = document.querySelector("#surname").value;
  var contactNumber = document.querySelector("#cont_num").value;
  var couponCode = document.querySelector("#coupon_code").value;
  var batch = document.querySelector("#batch").value;
  var objective = document.querySelector("#objective").value;

  var formobj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    contactNumber: contactNumber,
    couponCode: couponCode,
    batch: batch,
    objective: objective,
  };

  if (
    firstName != "" &&
    lastName != "" &&
    email != "" &&
    password != "" &&
    contactNumber != "" &&
    couponCode != ""
  ) {
    alert("SignUp Sucessful");
    formArr.push(formobj);
    localStorage.setItem("userdata", JSON.stringify(formArr));
    // window.location.href = "signin.html";
  } else {
    alert("Enter all details");
  }
}
