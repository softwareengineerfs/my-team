const elsBtn = document.querySelectorAll(".director__plus");

elsBtn.forEach((btn)=> {
 btn.addEventListener("click", function () {

  // add activeness to button and its icon
  btn.classList.toggle("director__plus-active");
  btn.children[0].classList.toggle("director__buttom-icon-active");

  // change information
  btn.previousElementSibling.classList.toggle("open")
  btn.previousElementSibling.previousElementSibling.classList.toggle("close")


  btn.parentElement.style.backgroundColor = "#002529";

 });
});

