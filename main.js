class Dice {
    constructor(){}

    throwDice(){
        return Math.ceil(Math.random()*6);
    }
}

class Player {
    constructor(names){
        this.names=names;
        this.position=0;
        this.moved=0;
    }

    mov(newPos){
        this.moved= newPos + this.position
        return this.moved
        
    }
    
}

class Board {
    constructor(){
    }

    verify(section){
        switch (section){
            //Escaleras
            case 5: 
                return 16;
            case 9:
                return 21;
            case 18:
                return 30;
            case 23:
                return 35;
            case 31:
                return 42;
            case 39:
                return 51;
            case 46:
                return 58;
            case 56:
                return 77;
            // Serpientes
            case 28: 
                return 3;
            case 37:
                return 29;
            case 44:
                return 10;
            case 70:
                return 46;
            case 73:
                return 64;
            case 79:
                return 51;
            case 87:
                return 66;
            case 96:
                return 53;
            default: 
            return section
        }
    }
}


let board = new Board
let dice = new Dice

let P1 = new Player("Quacken")
let P2 = new Player("Animex")


while(P1.position < 100 && P2.position < 100){
    P1.position = board.verify(P1.mov(dice.throwDice()))
    P2.position = board.verify(P2.mov(dice.throwDice()))

    console.log(`Posición de J1: ${P1.position} |-| Posición de J2: ${P2.position}`)
}

if (P1.position >=100){
    console.log(`\nGanó J1: "${P1.names}"`)
} else if (P2.position >=100){
    console.log(`\nGanó J2 "${P2.names}"`)
}
