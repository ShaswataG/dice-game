document.querySelector('#roll-button').addEventListener('click', (e) => {
    var no1 = Math.random();
    no1 *= 6;
    no1 = Math.floor(no1) + 1;
    if (no1 === 1)
        document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
    else if (no1 === 2)
        document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
    else if (no1 === 3)
        document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
    else if (no1 === 4)
        document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
    else if (no1 === 5)
        document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
    else if (no1 === 6)
        document.querySelector("img.img1").setAttribute("src", "images/dice6.png");

    var no2 = Math.random();
    no2 *= 6;
    no2 = Math.floor(no2) + 1;
    if (no2 === 1)
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    else if (no2 === 2)
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    else if (no2 === 3)
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    else if (no2 === 4)
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    else if (no2 === 5)
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    else if (no2 === 6)
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");

    if (no1 > no2)
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    else if (no1 < no2)
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    else
        document.querySelector("h1").innerHTML = "Draw!";
});