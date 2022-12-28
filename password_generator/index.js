const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let genPass = document.getElementById("gen-pass")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let alert = document.getElementById("alert")

genPass.addEventListener("click", function () {
    let i = 0
    let repeat = setInterval(function () {
        passOne.textContent = generatePassword()
        passTwo.textContent = generatePassword()

        if (i < 50) {
            i++
        } else {
            clearInterval(repeat)
        }
    }, 15);
})

function randomNumber() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let pw = ""
    for (let i = 0; i < 15; i++) {
        pw += characters[randomNumber()]
    }
    alert.textContent = `Password has been generated!`
    return pw
}

function copyText(text) {
    navigator.clipboard.writeText(text.textContent)
}

passOne.addEventListener("click", function () {
    copyText(passOne)
    alert.textContent = `Password ${passOne.textContent} has been copied to clipboard`
})

passTwo.addEventListener("click", function () {
    copyText(passTwo)
    alert.textContent = `Password ${passTwo.textContent} has been copied to clipboard`
})





