console.log("Website Loaded");
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
    // close others
    items.forEach(i => {
      if(i !== item){
        i.classList.remove("active");
      }
    });

    // toggle current
    item.classList.toggle("active");
  });
});

const text = "Digital Marketing Consultant in Ranchi "; 
let index = 0;

function typeEffect(){
  if(index < text.length){
    document.getElementById("typed").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typed").innerHTML = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

typeEffect();
