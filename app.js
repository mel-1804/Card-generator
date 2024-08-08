window.onload = () => {

    let numeroArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let pintaArray = ["♦", "♥", "♠", "♣"]

    let pinta1 = document.getElementById("pintaFig1");
    let pinta2 = document.getElementById("pintaFig2");
    let numero = document.getElementById("numeroFig");
    let carta = document.getElementById("carta");

    let displayNumero = Math.floor((Math.random() * 13));
    let displayPinta = Math.floor((Math.random() * 4))

    numero.innerHTML = numeroArray[displayNumero];
    pinta1.innerHTML = pintaArray[displayPinta];
    pinta2.innerHTML = pintaArray[displayPinta];

    if (pinta1.innerHTML === "♦") { carta.style.color = "red" }
    else if (pinta1.innerHTML === "♥") { carta.style.color = "red" }
    else { carta.style.color = "black" };

    let randomButton = document.getElementById("button");
    randomButton.addEventListener("click", () => {
        let displayNumero = Math.floor((Math.random() * 13));
        let displayPinta = Math.floor((Math.random() * 4))

        numero.innerHTML = numeroArray[displayNumero];
        pinta1.innerHTML = pintaArray[displayPinta];
        pinta2.innerHTML = pintaArray[displayPinta];

        if (pinta1.innerHTML === "♦") { carta.style.color = "red" }
        else if (pinta1.innerHTML === "♥") { carta.style.color = "red" }
        else { carta.style.color = "black" };
    })

}