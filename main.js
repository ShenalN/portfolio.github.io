sidebar = document.getElementById("nav");

menuicon = document.getElementById("menuicon");

sidebar.style.right = -300 + "px";

 function navigate() {
   if (sidebar.style.right == -300 + "px")
   {
     sidebar.style.right = 0 + "px";
     menuicon.src = "images/menuclose.png"
     
   }
   
   else
   {
     sidebar.style.right = -300 + "px";
     menuicon.src = "images/menu.png"
   }
 }
 
document.addEventListener("scroll", function(e){
  
  let nav = document.getElementsByClassName("nav-bar-pc")[0];
  
  if(window.scrollY > 550) {
    
    nav.style.background = "rgb(0,0,0,0.7)";
    nav.style.boxShadow = "0 0 30px rgba(0,0,0,0.7)";
  }
  else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "";
  }

});




loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})