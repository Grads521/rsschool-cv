function myFunction() {
  let x = document.getElementById("myNav");
  if (x.className === "header-nav") {
    x.className += " responsive";
  } else {
    x.className = "header-nav";
  }
}