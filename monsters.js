class Monster {
    constructor(name, lastName, imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 9999999)}`;
        this.name = name;
        this.lastName = lastName;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y
    }
    getMonsters(w, h, pos) {
        const monsterUI = document.createElement("div")
        const img = document.createElement("img");
        img.src = this.imageUrl
        img.width = w;
        img.height = h;
        monsterUI.append(img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = pos.x
        monsterUI.style.top = pos.y
        return monsterUI;
    }

}


