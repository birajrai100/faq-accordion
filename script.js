


const accordions = 
document.querySelectorAll(".accordion");
accordions.forEach(accor => {
    accor.addEventListener("click", e => {
        let accordionBtn = accor.querySelector("img");
        let accordionQstn = accor.querySelector(".qstn");
        accor.classList.toggle("active");
        accordionBtn.classList.toggle("arw");
        accordionQstn.classList.toggle("demo");
    })
})
