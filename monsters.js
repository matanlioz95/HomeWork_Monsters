class Monster {
    constructor(name, lastName, imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 9999999)}`;
        this.name = name;
        this.lastName = lastName;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y
        this.selected = false
    }

    getMonsters(name, w, h, pos) {
        const monsterUI = document.createElement("div")
        monsterUI.id = name
        const img = document.createElement("img");
        const leftButton = document.createElement("button")
        leftButton.setAttribute("class", "btn btn-light");
        leftButton.innerText = "👈🏽"
        leftButton.style.position = "absolute"
        leftButton.style.left = "0"
        leftButton.style.top = "50%"
        leftButton.style.visibility = "hidden"
        leftButton.addEventListener("click", function () {
            let parent = this.parentElement
            let currentPosition = parseInt(parent.style.left.replace("px", ""))
            parent.style.left = currentPosition - 30 + "px"
        })
        monsterUI.append(leftButton)

        const rightButton = document.createElement("button");
        rightButton.setAttribute("class", "btn btn-light");
        rightButton.innerText = "👉🏽"
        rightButton.style.position = "absolute"
        rightButton.style.right = "0"
        rightButton.style.top = "50%"
        rightButton.style.visibility = "hidden"
        rightButton.addEventListener("click", function () {
            let parent = this.parentElement
            let currentPosition = parseInt(parent.style.left.replace("px", ""))
            parent.style.left = currentPosition + 30 + "px"
        })

        monsterUI.append(rightButton)

        const upButton = document.createElement("button");
        upButton.setAttribute("class", "btn btn-light");
        upButton.innerText = "👆🏽"
        upButton.style.position = "absolute"
        upButton.style.top = "0"
        upButton.style.left = "40%"
        upButton.style.visibility = "hidden"
        upButton.addEventListener("click", function () {
            let parent = this.parentElement
            let currentPosition = parseInt(parent.style.top.replace("px", ""))
            parent.style.top = currentPosition - 30 + "px"
        })
        monsterUI.append(upButton)

        const downButton = document.createElement("button");
        downButton.setAttribute("class", "btn btn-light");
        downButton.innerText = "👇🏽"
        downButton.style.position = "absolute"
        downButton.style.bottom = "0"
        downButton.style.left = "40%"
        downButton.style.visibility = "hidden"
        downButton.addEventListener("click", function () {
            let parent = this.parentElement
            let currentPosition = parseInt(parent.style.top.replace("px", ""))
            parent.style.top = currentPosition + 30 + "px"
        })
        monsterUI.append(downButton)

        img.src = this.imageUrl
        img.width = w;
        img.height = h;
        monsterUI.append(img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = pos.x
        monsterUI.style.top = pos.y

        monsterUI.addEventListener("mouseover", showButtons)
        monsterUI.addEventListener("mouseleave", hideButtons)

        return monsterUI;
    }


}




