// main code in all page start
// darkModeButton-start
const darkModeButton = document.getElementById("dark-mode-button");
// Add a click event listener to the button
darkModeButton.addEventListener("click", function () {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode");
});
// darkModeButton-end
// getUserName-start

document.getElementById("outName").innerHTML = 'Hi,'+ sessionStorage.getItem("name");
document.getElementById("submit").onclick = () => {
  
  let person = document.getElementById("userName").value;
  sessionStorage.setItem("name", person);
  if (person != "") {
    document.getElementById("outName").innerHTML ='Hi,'+
      sessionStorage.getItem("name");
    document.getElementById("over").style.visibility = "hidden";
    document.getElementById("error").classList.add("invisible");
  } else {
    console.log("enter right name");
    document.getElementById("error").classList.remove("invisible");
    document.getElementById("error").classList.add("visible");
    document.getElementById("over").style.visibility = "visible";
  }
 
};



// document.getElementById("over").style.visibility = "hidden";

// getUserName-end
// main code in all page end

// pages code -start
//  make-link link for iframe and show it -start
function show(tar) {
  document.getElementById(tar).classList.toggle("active");
  let x = document.getElementById(tar).id;
  x = x.substring(1, x.length);
  document.getElementById(x).classList.toggle("d-block");
}
//  make-link link for iframe and show it -end
// editor-start
function displayOutput() {
  let output = document.getElementById("output");
  let htmlCode = document.getElementById("htmlCode").value;
  let cssCode = document.getElementById("cssCode").value;
  let jsCode = document.getElementById("jsCode").value;
  let doc = `
 <html>
 <style>${cssCode}</style>
 <body>
 ${htmlCode}
 <script>${jsCode}</script>
 </body>
 </html> `;

  output.srcdoc = doc;
}
// editor-end

// pages code -end
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// lllllllll
  
