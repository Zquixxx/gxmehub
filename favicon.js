if (localStorage.getItem("checked")) document.querySelector("title").innerHTML = "Google"
  
document.querySelector("link[rel=icon]").href =(location.href.slice(-1) == "/" ? ".." : ".") + "/" + (localStorage.getItem("checked") ? "google.png" : "favicon.ico")