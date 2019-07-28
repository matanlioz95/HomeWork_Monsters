const mainBoard = document.querySelector("#main");

const blueMonster = new Monster("Blue", "Monster", "Pictures/Blue.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const greenMonster = new Monster("Green", "Monster", "Pictures/Green.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const purpleMonster = new Monster("Purple", "Monster", "Pictures/Purple.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const yellowMonster = new Monster("Yellow", "Monster", "Pictures/Yellow.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

let monsters = []

monsters.push(blueMonster, greenMonster, purpleMonster, yellowMonster)

let selectedMonster = document.querySelector("#SelectMonster")

let drawButton = document.querySelector("#DrawMonsters")
drawButton.addEventListener("click", Draw)

// function drawMonster() {
//     monsters.forEach(monster=> monster.Draw())
// }
function Draw() {
    mainBoard.innerHTML = ""

    monsters.forEach(function (monster) {
        mainBoard.append(monster.getMonsters(monster.name, 200, 200, { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" }))

    })
}
function showButtons() {
    let buttons = this.querySelectorAll(".btn")
    buttons.forEach(btn => btn.style.visibility = "visible")
}

function hideButtons() {
    let buttons = this.querySelectorAll(".btn")
    buttons.forEach(btn => btn.style.visibility = "hidden")
}

document.addEventListener('keydown', function (event) {
    let div = document.getElementById(selectedMonster.value)
    let currentPosition
    switch (event.key) {
        case "ArrowLeft": // Left pressed 
            currentPosition = parseInt(div.style.left.replace("px", ""))
            div.style.left = currentPosition - 30 + "px"
            break;

        case "ArrowRight": // Right pressed 
            currentPosition = parseInt(div.style.left.replace("px", ""))
            div.style.left = currentPosition + 30 + "px"
            break;

        case "ArrowUp": // Up pressed 
            currentPosition = parseInt(div.style.top.replace("px", ""))
            div.style.top = currentPosition - 30 + "px"
            break;

        case "ArrowDown": // Down pressed 
            currentPosition = parseInt(div.style.top.replace("px", ""))
            div.style.top = currentPosition + 30 + "px"
            break;
    }
})

Object.prototype.len = function () {
    return Object.keys(this).length
}

