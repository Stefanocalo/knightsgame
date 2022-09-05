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


function characterSelection(character) {
    character.classList.toggle('active');
    switch (character){
        case sword:
            Player1 = SwordKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
        break;
        case archer:
            Player1 = Archer;
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');
        break;
        case axe:
            Player1 = AxeKnight;
            archer.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');
        break;
        case horse:
            Player1 = HorseKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');
        break;
        case pike:
            Player1 = PikeKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');
        break;
        case tiger:
            Player1 = PikeKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            sword.classList.remove('active');
        break;
    }
}

sword.onclick = function() {characterSelection(sword)};
archer.onclick = function() {characterSelection(archer)};
axe.onclick = function() {characterSelection(axe)};
horse.onclick = function() {characterSelection(horse)};
pike.onclick = function() {characterSelection(pike)};
tiger.onclick = function() {characterSelection(tiger)};


// Casually assign opponent


const casualAssignCPU = function() {

    const CPUName = document.getElementById('CPUName');
    const imgCPU = document.createElement('img');
    imgCPU.className = 'charIcon';
    document.getElementById('CPU').appendChild(imgCPU);

    let cas = Math.floor(Math.random() * 6);
    switch(cas){
        case 0:
            CPU = SwordKnight;
            imgCPU.src = './character/sword_knight.png';
            CPUName.innerHTML = 'Sword Knight';
        break;
        case 1:
            CPU = Archer;
            imgCPU.src = './character/archer.png';
            CPUName.innerHTML = 'Medieval Archer';
        break;
        case 2:
            CPU = AxeKnight;
            imgCPU.src = './character/axe_knight.png';
            CPUName.innerHTML = 'Axe Knight';
        break;
        case 3:
            CPU = HorseKnight;
            imgCPU.src = './character/knight.png';
            CPUName.innerHTML = 'Horse Knight';
        break;
        case 4:
            CPU = PikeKnight;
            imgCPU.src = './character/pike_knight.png';
            CPUName.innerHTML = 'Pike Knight';
        break;
        case 5:
            CPU = TigerKnight;
            imgCPU.src = './character/tiger_knight.png';
        CPUName.innerHTML = 'Tiger Knight';
        break;    
    }
    return imgCPU.src;
    //console.log(CPU);
}


// Start Battle - Assign CPU character

const startBattle = document.getElementById('startBattle');

startBattle.onclick = function() {start()};

function start() {
    casualAssignCPU();

// Img and name assign player 1
    const p1Name = document.getElementById('p1Name');
    const imgp1 = document.createElement('img');
    imgp1.className = 'charIcon';
    document.getElementById('player1').appendChild(imgp1);
    switch (Player1){
        case SwordKnight:
            imgp1.src = './character/sword_knight.png';
            p1Name.innerHTML = 'Sword Knight';
        break;
        case Archer:
            imgp1.src = './character/archer.png';
            p1Name.innerHTML = 'Medieval Archer';
        break;
        case AxeKnight:
            imgp1.src = './character/axe_knight.png';
            p1Name.innerHTML = 'Axe Knight';
        break;
        case HorseKnight:
            imgp1.src = './character/knight.png';
            p1Name.innerHTML = 'Horse Knight';
        break;
        case PikeKnight:
            imgp1.src = './character/pike_knight.png';
            p1Name.innerHTML = 'Pike Knight';
        break;
        case TigerKnight:
            imgp1.src = './character/tiger_knight.png';
            p1Name.innerHTML = 'Tiger Knight';
        break;
        
    }
    return imgp1.src;
    }

    






const nextRound = document.getElementById('nextRound');

function startRound() {
    round()
}


nextRound.onclick = function() {startRound()};



