// Name array

names = ['Ferguson', 'Dale', 'Scott', 'James', 'Tom', 'Scott', 'Lucas', 'Paul', 'Jeremy']

// Phrases arrays

winPhrases = [ 'GOTCHA!!', 'FOR THE HOMELAND!!', 'LONG LIVE TO THE KING!']
lossPhrases = ['AAAHHHH!!', 'AAARRGGHH', 'NOOOOOO']

// Parent characters class

class Knight {
    constructor(role, HP, armor, maxAttack, ){
        this._role = role;
        this._name = names[Math.floor(Math.random() * names.length)];
        this._HP = HP;
        this._armor = armor;
        this._maxAttack = maxAttack;
    }

    get name() {
        return this._name;
    }

    get role() {
        return this._role;
    }

    get HP() {
        return this._HP;
    }

    get armor() {
        return this._armor;
    }

    get maxAttack() {
        return this._maxAttack;
    }

    attack() {
       let damage = Math.floor(Math.random() * this._maxAttack);
       return damage;
    }

    updateArmor(damageIncome) {
        if (damageIncome < this._armor) {
            this._armor -= damageIncome;
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`${this._role} remaining armor: ${this._armor}`)
            return this._armor;
        } else if (damageIncome > this.armor) {
            //console.log(this._armor);
            let diff = damageIncome - this._armor;
            this._HP -= diff;
            if (this._HP > 0) {
                console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`Oh no! The armor is gone! ${this._name} the ${this._role} get ${diff} direct damage. Remainig health: ${this._HP}`);
            this._armor = 0;
            return this._HP;
            } else {
                console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
                this._HP = 0;
                console.log(`${this._role} health: ${this._HP}`)
            }
        } else {
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`Oh no! The armor is gone! ${this._name} the ${this._role} has no protection! Remaining health: ${this._HP}`);
            this._armor = 0;
            return this._armor;
        }
    }
}

/*

// Quick battle function

const battle = function () {
    do {
        CPU.updateArmor(player1.attack());
        //console.log(CPU.HP);
        //console.log(player1.attack());

        player1.updateArmor(CPU.attack());
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

*/

// Round function 

const round = function() {

    CPU.updateArmor(player1.attack());
    if (CPU._HP != 0) {
        player1.updateArmor(CPU.attack());
    } if (player1._HP === 0) {
        console.log(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        console.log('You have lost');
    } else if (CPU._HP === 0) {
        console.log('You won!')
        console.log(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
    }
}

// Assign opponent

const casualAssignCPU = function() {
    let cas = Math.floor(Math.random() * 6);
    switch(cas){
        case 0:
            CPU = SwordKnight;
        break;
        case 1:
            CPU = Archer;
        break;
        case 2:
            CPU = AxeKnight;
        break;
        case 3:
            CPU = HorseKnight;
        break;
        case 4:
            CPU = PikeKnight;
        break;
        case 5:
            CPU = TigerKnight;
        break;    
    }
    console.log(CPU);
}

// charachters 

const SwordKnight = new Knight('Sword Knight',100, 200, 124);

const Archer = new Knight('Medieval Archer',100, 125, 165);

const AxeKnight = new Knight('Axe Knight',100, 250, 115);

const HorseKnight = new Knight('Horse Knight',100, 180, 170);

const PikeKnight = new Knight('Pike Knight',100, 180, 180)

const TigerKnight = new Knight('Tiger Knight',100, 130, 150)


// Assing Player1 character 

let sword = document.querySelector('.character')


let test = function () {
    var img = new Image();
        img.src="./character/sword_knight.png"
        document.getElementByc('player1').appendChild(img);
}


let player1
let CPU
