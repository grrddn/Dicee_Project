window.onload = function() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "../Dicee+Challenge+-+Starting+Files/images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "../Dicee+Challenge+-+Starting+Files/images/dice" + randomNumber2 + ".png");
    let title = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        title.textContent = "Player 2 Wins! 🚩";
    } else {
        title.textContent = "Draw! 🎲";
    }
};