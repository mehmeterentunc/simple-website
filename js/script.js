//RESPONSIVE MENU
var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }


//NOCLICK FOOTER
var noClick = document.getElementsByClassName("noClick");

for (var i = 0; i < noClick.length; i++) {
    noClick[i].addEventListener("click", function(event) {
        event.preventDefault();
      });
}
