/* Variable Declaration */
//header buttons
const aboutBtn = document.querySelector(".aboutBtn");
const skillBtn = document.querySelector(".skillBtn");
const workBtn = document.querySelector(".workBtn");
const contactBtn = document.querySelector(".workLinkBtn");
//sections
const aboutSection = document.querySelector(".about");
const skillSection = document.querySelector(".skills");
const workSection = document.querySelector(".work");

/* Function Declaration */
const smoothScroll = (element) => {
  element.scrollIntoView({ behavior: "smooth" });
}


/* Function Call */
aboutBtn.addEventListener("click", () => {
  smoothScroll(aboutSection);
});

skillBtn.addEventListener("click", () => {
  smoothScroll(skillSection);
});

workBtn.addEventListener("click", () => {
  smoothScroll(workSection);
});
