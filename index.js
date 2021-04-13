/* Variable Declaration */
//header buttons
const aboutBtn = document.querySelector(".aboutBtn");
const skillBtn = document.querySelector(".skillBtn");
const workBtn = document.querySelector(".workBtn");
const contactBtn = document.querySelector(".contactBtn");
//sections
const aboutSection = document.querySelector(".about");
const skillSection = document.querySelector(".skills");
const workSection = document.querySelector(".work");
const reachMe = document.querySelector(".contact");
//About section buttons
const careerBtn = document.querySelector(".careerBtn");
const educationBtn = document.querySelector(".educationBtn");
//modal
const career = document.querySelector(".career");
const education = document.querySelector(".education");
const modal = document.querySelector(".modal");
const clsCar = document.querySelector(".clsCar");
const clsEdu = document.querySelector(".clsEdu");

/* Function Declaration */
const smoothScroll = (element) => {
  element.scrollIntoView({ behavior: "smooth" });
}

/* Function Call */
//scroll
aboutBtn.addEventListener("click", () => {
  smoothScroll(aboutSection);
});

skillBtn.addEventListener("click", () => {
  smoothScroll(skillSection);
});

workBtn.addEventListener("click", () => {
  smoothScroll(workSection);
});

contactBtn.addEventListener("click", () => {
  smoothScroll(reachMe);
});

//modal
careerBtn.addEventListener("click", () => {
  career.style.display = "block";
});

educationBtn.addEventListener("click", () => {
  education.style.display = "block";
});

clsCar.addEventListener("click", () => {
  career.style.display = "none";
});

clsEdu.addEventListener("click", () => {
  education.style.display = "none";
});

// window.onclick = function (event) {
//   console.log("career ",event.target);
//   if(event.target === career) {
//     education.style.display = "none";
//     career.style.display = "none";
//   }
// };

// window.onclick = function (event) {
//   console.log("education ",event.target);
//   if(event.target === education) {
//     education.style.display = "none";
//     career.style.display = "none";
//   }
// };

// window.onclick = function (event) {
//   console.log("target ",event.target);
//   if((event.target === career) ||(event.target === education) )
//     career.style.display = "none";
//     education.style.display = "none";
// };
