if (localStorage.getItem("checked")) document.querySelector("title").innerHTML = "Google"
  
document.querySelector("link[rel=icon]").href =((location.href.slice(-1) == "/") || (!location.href.match("\/gxmehub\/$"))? ".." : ".") + "/" + (localStorage.getItem("checked") ? "google.png" : "favicon.ico")
     if(self != top) { 
  document.querySelector("#please").style.display = "block"
  document.querySelector("#content").style.display = "none"
 }