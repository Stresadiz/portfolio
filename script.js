document.getElementById("menu").addEventListener("click", function () {

    let social = document.getElementsByClassName("social")[0];

    let lines1 = document.getElementById("line--h1");

    let lines2 = document.getElementById("line--h2");

    let lines3 = document.getElementById("line--h3");

    social.classList.toggle("social--hide");
    social.style.transition = "1s";

    lines1.classList.toggle("rotate");
    lines1.classList.toggle("line--rotate45");
    lines1.style.transition = "0.5s";

    lines2.classList.toggle("rotate");
    lines2.classList.toggle("line--rotate-45");
    lines2.style.transition = "0.5s";

    lines3.classList.toggle("line--display");
    lines3.style.transition = "0.5s";

})
