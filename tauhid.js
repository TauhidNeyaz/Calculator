let screen = document.querySelector(".screen")
let Buttons = document.querySelectorAll(".btn")
let equalButton = document.querySelector(".btn-equal")
let clearButton = document.querySelector(".btn-clear")
let backButton = document.querySelector(".back")

Buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let value = event.target.dataset.num;
        screen.value += value
        let content = screen.value
        if (content.length >= 17) {
            screen.value = "Undefined"
            Buttons.forEach((butt) => {
                butt.disabled = true
            })
        }
    })
})

equalButton.addEventListener("click", (event) => {
    if (screen.value === "") {
        screen.value = ""
    }
    else {
        let result = eval(screen.value)
        screen.value = result
        let content = screen.value
        if (content.length >= 17) {
            screen.value = "Undefined"
            Buttons.forEach((butt) => {
                butt.disabled = true
            })
        }
    }
})

backButton.addEventListener('click', (event) => {
    let value = screen.value
    let curr = value.substr(0, value.length - 1)
    screen.value = curr
})

clearButton.addEventListener("click", (event) => {
    screen.value = ""
    Buttons.forEach((button) => {
        button.disabled = false
    })
})