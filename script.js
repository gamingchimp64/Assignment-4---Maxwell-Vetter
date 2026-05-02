document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM console is loaded");

  const darkMode = document.getElementById("darkmodetoggle");
  let backgroundcolor = 1;
  const mainHighlight = document.querySelector(".main_highlight");
  const img = document.querySelector("img");

    darkMode.addEventListener("click", function(){
        console.log("Dark mode toggle button is clicked");
        console.log(backgroundcolor)
        if (backgroundcolor === 1){
          mainHighlight.style.color = "#c48fb8";
          document.body.style.background = "linear-gradient(135deg, #544163, #6b5b5b)";
          document.body.style.color = "#f5dada";
          backgroundcolor = 0;
          console.log("backgroundcolorchanged")
          img.style.filter = "brightness(64%)";
        } else {
          mainHighlight.style.color = "purple";
          document.body.style.background = "linear-gradient(135deg, 	 #ffbb99, #ffe4cc)";
          document.body.style.color = "#524949";
          backgroundcolor = 1;
          console.log("backgroundcolorchanged")
          img.style.filter = "brightness(100%)";
        }
    })

})


