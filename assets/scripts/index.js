function diceGame () {
    let randomNum1 = Math.floor(Math.random() * 6) + 1
    let randomNum2 = Math.floor(Math.random() * 6) + 1

    let randomDice1 = `./assets/img/dice-six-faces-${randomNum1}.svg`
    let randomDice2 = `./assets/img/dice-six-faces-${randomNum2}.svg`

    let diceImage1 = document.getElementById("p1")
    let diceImage2 = document.getElementById("p2")

    diceImage1.setAttribute("src", randomDice1)
    diceImage2.setAttribute("src", randomDice2)

    let result = document.getElementById("result")
    let p1_Box = document.querySelector(".player-1")
    let p2_Box = document.querySelector(".player-2")
    if (randomNum1 > randomNum2) {
        result.innerHTML = "Player 1 is the winner!"
        result.style.color = "#05bfdb"
        p1_Box.style.borderColor = "#05bfdb"
        p2_Box.style.borderColor = "#2c2c2c"
    }
    else if (randomNum1 < randomNum2) {
        result.innerHTML = "Player 2 is the winner!"
        result.style.color = "#05bfdb"
        p1_Box.style.borderColor = "#2c2c2c"
        p2_Box.style.borderColor = "#05bfdb"
    }
    else {
        result.innerHTML = "Draw"
        result.style.color = "yellowgreen"
        p1_Box.style.borderColor = "yellowgreen"
        p2_Box.style.borderColor = "yellowgreen"
    }
}