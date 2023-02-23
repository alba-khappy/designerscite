const acc = document.getElementsByClassName("faq__questions-button");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // this.querySelectorAll(img)[0];
        this.querySelectorAll("img")[0].classList.toggle("faq__questions-button-close");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}