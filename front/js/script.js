let topButton = document.getElementById("topBtn");

window.onscroll = () => scrollFunction();

scrollFunction = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

