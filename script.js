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

// Declare players variable

let Player1
let CPU

/*

// Quick battle function

const battle = function () {
    do {
        CPU.updateArmor(Player1.attack());
        //console.log(CPU.HP);
        //console.log(Player1.attack());

        Player1.updateArmor(CPU.attack());
        //console.log(Player1.HP);
        //console.log(CPU.attack());

    } while (CPU._HP != 0 && Player1._HP != 0);
    if (Player1._HP === 0) {
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
    let p1Attack = Math.floor(Math.random() * Player1._maxAttack);
    let CPUAttack = Math.floor(Math.random() * CPU._maxAttack);

    CPU.updateArmor(p1Attack);
    if (CPU._HP != 0) {
        Player1.updateArmor(CPUAttack);
    } if (Player1._HP === 0) {
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
    //console.log(CPU);
}

// charachters 

const SwordKnight = new Knight('Sword Knight',100, 200, 124);

const Archer = new Knight('Medieval Archer',100, 125, 165);

const AxeKnight = new Knight('Axe Knight',100, 250, 115);

const HorseKnight = new Knight('Horse Knight',100, 180, 170);

const PikeKnight = new Knight('Pike Knight',100, 180, 180)

const TigerKnight = new Knight('Tiger Knight',100, 130, 150)


// Assing Player1 character

const sword = document.querySelector('#swordKnight');
const archer = document.querySelector('#archer');
const axe = document.querySelector('#axeKnight');
const horse = document.querySelector('#knight');
const pike = document.querySelector('#pikeKnight');
const tiger = document.querySelector('#tigerKnight');


function test(character) {
    character.classList.toggle('active');
    this.Player1 = character;
    return this.Player1;
}

sword.onclick = function() {test(sword)};
archer.onclick = function() {test(archer)};
axe.onclick = function() {test(axe)};
horse.onclick = function() {test(horse)};
pike.onclick = function() {test(pike)};
tiger.onclick = function() {test(tiger)};

// Start Battle - Assign character

const startBattle = document.getElementById('startBattle');

function start() {
    Player1 = sword;
    casualAssignCPU();
    round()
}

/*

function start() {
    function retrieveImg() {
        let img = document.createElement('img');
        Player1Img.className = 'charIcon';
        let Player1Profile = document.getElementById('Player1');
        switch(Player1){
            case sword:
                img.src = "./character/sword_knight.png";
            break;
            case archer:
                this.img.src = "./character/archer.png";  
            break;
            case AxeKnight:
                this.img.src = "./character/axe_knight.png";
            break;
        }
    }
    img.src = retrieveImg();
    Player1Profile.appendChild('img');
}

*/

startBattle.onclick = function() {start()};



