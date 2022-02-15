const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("content").innerHTML = "Well, dang. You did it.";
}