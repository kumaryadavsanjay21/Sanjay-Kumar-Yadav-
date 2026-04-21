console.log("Website Loaded");

// FAQ safe handling
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");

  if(question){
    question.addEventListener("click", () => {
      items.forEach(i => {
        if(i !== item){
          i.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  }
});

// Typing effect
const text = "Digital Marketing Consultant in Ranchi ";
let index = 0;

function typeEffect(){
  const el = document.getElementById("typed");

  if(!el) return; // ❗ important

  if(index < text.length){
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      el.innerHTML = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

typeEffect();
