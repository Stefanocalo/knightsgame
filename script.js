names = ['Ferguson', 'Dale', 'Scott', 'James', 'Tom', 'Scott', 'Lucas', 'Paul', 'Jeremy']

winPhrases = [ 'GOTCHA!!', 'FOR THE HOMELAND!!', 'LONG LIVE TO THE KING!']
lossPhrases = ['AAAHHHH!!', 'AAARRGGHH', 'NOOOOOO']

class Knight {
    constructor(role, HP, maxAttack, ){
        this._role = role;
        this._name = names[Math.floor(Math.random() * names.length)];
        this._HP = HP;
        this._maxAttack = maxAttack;
    }

    get name() {
        return this._name;
    }

    get role() {
        return this._role;
    }

    get HP() {
        return this._HP
    }

    get maxAttack() {
        return this._maxAttack;
    }

    attack() {
       let damage = Math.floor(Math.random() * this._maxAttack);
       return damage;
    }

    updateHP(damageIncome) {
        if (damageIncome < this._HP) {
            this._HP -= damageIncome;
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`${this._role} remaining health: ${this._HP}`)
            return this._HP
        } else {
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            this._HP = 0;
            console.log(`${this._role} health: ${this._HP}`)
        }
    }
}

// battle function

const battle = function () {
    do {
        CPU.updateHP(player1.attack());
        //console.log(CPU.HP);
        //console.log(player1.attack());

        player1.updateHP(CPU.attack());
        //console.log(player1.HP);
        //console.log(CPU.attack());

    } while (CPU._HP != 0 && player1._HP != 0);
    if (player1._HP === 0) {
        console.log(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        console.log('You have lost');
    } else if (CPU._HP === 0) {
        console.log('You won!')
        console.log(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
    }
}

// Round function 

const round = function() {
    CPU.updateHP(player1.attack());

    if (CPU._HP != 0) {
        player1.updateHP(CPU.attack());
    } if (player1._HP === 0) {
        console.log(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        console.log('You have lost');
    } else if (CPU._HP === 0) {
        console.log('You won!')
        console.log(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
    }
}


// charachters 

const SwordKnight = new Knight('Sword Knight', 500, 124);

const Archer = new Knight('Medieval Archer', 425, 165);

const AxeKnight = new Knight('Axe Knight', 550, 115);

const HorseKnight = new Knight('Horse Knight', 480, 170);

const PikeKnight = new Knight('Pike Knight', 480, 180)

const TigerKnight = new Knight('Tiger Knight', 430, 150)



let player1 = HorseKnight
let CPU = SwordKnight
