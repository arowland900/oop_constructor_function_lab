function Gladiator(name, weapon) {
    this.name = name
    if (weapon === "Trident" || weapon === "Spear" || weapon === "Club") {
        this.weapon = weapon
    }
    else {
        console.log("Thats not a weapon!")
    }
}

var max = new Gladiator("Maximus", "Trident")
var jon = new Gladiator("Jonamus", "Spear")
var moopie = new Gladiator("Moopie", "Club")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"