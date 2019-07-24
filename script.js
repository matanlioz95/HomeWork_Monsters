const mainBoard = document.querySelector("#main");

const blueMonster = new Monster("Blue", "Monster", "Pictures/Blue.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const greenMonster = new Monster("Green", "Monster", "Pictures/Green.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const purpleMonster = new Monster("Purple", "Monster", "Pictures/Purple.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

const yellowMonster = new Monster("Yellow", "Monster", "Pictures/Yellow.png", { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" })

let monsters = []

monsters.push(blueMonster, greenMonster, purpleMonster, yellowMonster)

let drawButton = document.querySelector("#DrawMonsters")
drawButton.addEventListener("click", Draw)

// function drawMonster() {
//     monsters.forEach(monster=> monster.Draw())
// }
function Draw() {
    mainBoard.innerHTML = ""

    monsters.forEach(function (monster) {
        mainBoard.append(monster.getMonsters(200, 200, { x: Math.round(Math.random() * 999) + "px", y: Math.round(Math.random() * 300) + "px" }))

    })
}