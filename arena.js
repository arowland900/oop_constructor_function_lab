function Arena(name, gladiators=[]) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = gladiators


    this.addGladiator = function(gladiator){
        if(this.gladiators.length < 2){
            console.log(this.gladiators.length)
            this.gladiators.push(gladiator)
        }
        else {
            console.log("too many gladiators")
            this.gladiators.shift()
            this.gladiators.push(gladiator)
        }
    }

    this.fight = function(){
        
    }

}

var big = new Arena("colluseum")

big.addGladiator(max)
big.addGladiator(jon)
big.addGladiator(moopie)

console.log(big.gladiators)
