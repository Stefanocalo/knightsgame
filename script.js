// Name array

names = ['Ferguson', 'Dale', 'Scott', 'James', 'Tom', 'Scott', 'Lucas', 'Paul', 'Jeremy']

// Phrases arrays

winPhrases = [ 'GOTCHA!!', 'FOR THE HOMELAND!!', 'LONG LIVE TO THE KING!']
lossPhrases = ['AAAHHHH!!', 'AAARRGGHH', 'NOOOOOO']

// Parent characters class

class Knight {
    constructor(role, HP, maxHP, armor, maxArmor, maxAttack, ){
        this._role = role;
        this._name = names[Math.floor(Math.random() * names.length)];
        this._HP = HP;
        this._maxHP = maxHP;
        this._armor = armor;
        this._maxArmor = maxArmor;
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

    get maxHP() {
        return this._maxHP;
    }

    get armor() {
        return this._armor;
    }

    get maxArmor() {
        return this._maxArmor;
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
            print(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            print(`${this._role} remaining armor: ${this._armor}`);
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`${this._role} remaining armor: ${this._armor}`)
            return this._armor;
        } else if (damageIncome > this.armor) {
            //console.log(this._armor);
            let diff = damageIncome - this._armor;
            this._HP -= diff;
            if (this._HP > 0) {
                print(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
                print(`Oh no! The ${this._role}'s armor is gone!`);
                print(`${this._role} get ${diff} direct damage. Remainig health: ${this._HP}`)
                console.log(JSON.stringify(`${this._role} it's under attack: it gets ${damageIncome} points of damage`));
                console.log(`Oh no! The armor is gone! ${this._name} the ${this._role} get ${diff} direct damage. Remainig health: ${this._HP}`);
            this._armor = 0;
            return this._HP;
            } else {
                print(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
                console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
                this._HP = 0;
                print(`${this._role} health: ${this._HP}`)
                console.log(`${this._role} health: ${this._HP}`)
            }
        } else {
            print(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            print(`Oh no! The ${this._role}'s armor is gone!`);
            print(`${this._role} has no protection! Remaining health: ${this._HP}`);
            console.log(`${this._role} it's under attack: it gets ${damageIncome} points of damage`);
            console.log(`Oh no! The armor is gone! ${this._name} the ${this._role} has no protection! Remaining health: ${this._HP}`);
            this._armor = 0;
            return this._armor;
        }
    }
}

function print(str) {
    const node = document.createElement('p');
    const phr = JSON.stringify(str);
    node.appendChild(document.createTextNode(phr))
    document.getElementById('battleLog').appendChild(node);

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


// charachters 

const SwordKnight = new Knight('Sword Knight',100, 100, 240, 240, 110);

const Archer = new Knight('Archer',100, 100, 220, 220, 75);

const AxeKnight = new Knight('Axe Knight',100, 100, 270, 270, 95);

const HorseKnight = new Knight('Horse Knight',100, 100, 300, 300, 120);

const PikeKnight = new Knight('Pike Knight',100, 100, 280, 280, 110)

const TigerKnight = new Knight('Tiger Knight',100, 100, 260, 260, 105)


// Assing Player1 character

const sword = document.querySelector('#swordKnight');
const archer = document.querySelector('#archer');
const axe = document.querySelector('#axeKnight');
const horse = document.querySelector('#knight');
const pike = document.querySelector('#pikeKnight');
const tiger = document.querySelector('#tigerKnight');

// Players stats 

const swordStats = document.getElementById('swordKnightStats');
const archerStats = document.getElementById('archerStats');
const axeStats = document.getElementById('axeStats');
const horseStats = document.getElementById('horseStats');
const pikeStats = document.getElementById('pikeStats');
const tigerStats = document.getElementById('tigerStats');




function characterSelection(character,stats) {
    character.classList.toggle('active');
    stats.classList.toggle('active');

    switch (character){
        case sword:
            Player1 = SwordKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');

            archerStats.classList.remove('active'),
            axeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            horseStats.classList.remove('active');
            pikeStats.classList.remove('active');
            tigerStats.classList.remove('active');
        break;
        case archer:
            Player1 = Archer;
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');

            axeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            horseStats.classList.remove('active');
            pikeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            swordStats.classList.remove('active');
        break;
        case axe:
            Player1 = AxeKnight;
            archer.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');

            archerStats.classList.remove('active'),
            tigerStats.classList.remove('active');
            horseStats.classList.remove('active');
            pikeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            swordStats.classList.remove('active');
        break;
        case horse:
            Player1 = HorseKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            pike.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');

            archerStats.classList.remove('active'),
            axeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            pikeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            swordStats.classList.remove('active');
        break;
        case pike:
            Player1 = PikeKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            tiger.classList.remove('active');
            sword.classList.remove('active');

            archerStats.classList.remove('active'),
            axeStats.classList.remove('active');
            tigerStats.classList.remove('active');
            horseStats.classList.remove('active');
            tigerStats.classList.remove('active');
            swordStats.classList.remove('active');
        break;
        case tiger:
            Player1 = PikeKnight;
            archer.classList.remove('active');
            axe.classList.remove('active');
            horse.classList.remove('active');
            pike.classList.remove('active');
            sword.classList.remove('active');

            archerStats.classList.remove('active'),
            axeStats.classList.remove('active');
            horseStats.classList.remove('active');
            pikeStats.classList.remove('active');
            swordStats.classList.remove('active');       
        break;
    }
    
}

sword.onclick = function() {characterSelection(sword, swordStats)};
archer.onclick = function() {characterSelection(archer, archerStats)};
axe.onclick = function() {characterSelection(axe, axeStats)};
horse.onclick = function() {characterSelection(horse, horseStats)};
pike.onclick = function() {characterSelection(pike, pikeStats)};
tiger.onclick = function() {characterSelection(tiger, tigerStats)};

// Casually assign opponent


const casualAssignCPU = function() {

    if (Player1 !== undefined) {
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
    
}

// audio 


const selectionAudio = new Audio("./audio/character_selection.mp3")
const battleAudio = new Audio("./audio/battle.mp3");
const winAudio = new Audio('./audio/win_popup.mp3');
const lossAudio = new Audio("./audio/loss_popup.mp3")
const die = new Audio('./audio/die.mp3');
const sword1 = new Audio("./audio/sword1.mp3");
const sword2 = new Audio("./audio/sword2.mp3");
const sword3 = new Audio("./audio/sword3.mp3");
const ready = new Audio("./audio/ready_battle.mp3");

function rndSound() {
    let n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0:
            sword1.play();
        break;
        case 1:
            sword2.play();
        break;
        case 2: 
        sword3.play();
    }
}

        
function playsound(audio) {
    audio.play();
}

function pausesound(audio) {
    audio.pause();
}


// Start Battle - Assign CPU character

const startBattle = document.getElementById('startBattle');

startBattle.onclick = function() {start()};


function start() {
    casualAssignCPU();
    if (Player1 === undefined) {
        window.alert('Please select a warrior for the battle!');
    } else if ( Player1 === CPU) {
       window.alert('ERROR. Player and CPU cannot have the same warrior assigned. Please try again.');
       document.getElementById('startBattle').disabled = true;
       refreshPage();
    } else {
        document.getElementById('firstSection').classList.toggle('active');
        document.getElementById('hide').classList.toggle('active');
        const battleAudio = new Audio("./audio/battle.mp3");
        playsound(battleAudio);
        playsound(ready);
        playerName();

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
    };

}



const nextRound = document.getElementById('nextRound');

// Round function 

const round = function() {
    let p1Attack = Math.floor(Math.random() * Player1._maxAttack);
    let CPUAttack = Math.floor(Math.random() * CPU._maxAttack);

    CPU.updateArmor(p1Attack);
    if (CPU._HP != 0) {
        Player1.updateArmor(CPUAttack);
    } if (Player1._HP === 0) {
        print(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        print('You have lost');
        console.log(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        console.log('You have lost');
        nextRound.disabled = true;
        document.querySelector('.popUp').classList.toggle('active');
        document.getElementById('losspopUp').style.display = 'block';
        document.getElementById('hide').style.opacity = '0.2';
        playsound(lossAudio);  
        playsound(die);      
    } else if (CPU._HP === 0) {
        print('You won!');
        print(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
        console.log('You won!');
        console.log(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
        nextRound.disabled = true;
        document.querySelector('.popUp').classList.toggle('active');
        document.getElementById('WinpopUp').style.display = 'block';
        document.getElementById('hide').style.opacity = '0.2';
        playsound(winAudio);
    }   
}

// Update health

function updateHealthIndicators(var1, var2) {
    const currentHP = var1._HP;
    const percentageHP = currentHP / (var1._maxHP / 100);
    
    switch (true) {
        case (percentageHP === 0): 
            var2.style.width = '0%';
            var2.style.opacity = '0';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP > 0 && percentageHP < 5): 
            var2.style.width = '5%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 5 && percentageHP < 10):
            var2.style.width = '10%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 10 && percentageHP < 15):
            var2.style.width = '15%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 15 && percentageHP < 20):
            var2.style.width = '20%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 20 && percentageHP < 25):
            var2.style.width = '25%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 25 && percentageHP < 30):
            var2.style.width = '30%';
            var2.style.backgroundColor = 'rgb(194, 36, 36)';
        break;
        case (percentageHP >= 30 && percentageHP < 35):
            var2.style.width = '35%';
            var2.style.backgroundColor = 'rgb(238, 232, 78)';
        break;
        case (percentageHP >= 35 && percentageHP < 40):
            var2.style.width = '40%';
            var2.style.backgroundColor = 'rgb(238, 232, 78)';
        break;
        case (percentageHP >= 40 && percentageHP < 45):
            var2.style.width = '45%';
            var2.style.backgroundColor = 'rgb(238, 232, 78)';
        break;
        case (percentageHP >= 45 && percentageHP < 50):
            var2.style.width = '50%';
            var2.style.backgroundColor = 'rgb(238, 232, 78)';
        break;
        case (percentageHP >= 50 && percentageHP < 55):
            var2.style.width = '55%';
            var2.style.backgroundColor = 'rgb(238, 232, 78)';
        break;
        case (percentageHP >= 55 && percentageHP < 60):
            var2.style.width = '60%';
        break;
        case (percentageHP >= 60 && percentageHP < 65):
            var2.style.width = '65%';
        break;
        case (percentageHP >= 65 && percentageHP < 70):
            var2.style.width = '70%';
        break;
        case (percentageHP >= 70 && percentageHP < 75):
            var2.style.width = '75%';
        break;
        case (percentageHP >= 75 && percentageHP < 80):
            var2.style.width = '80%';
        break;
        case (percentageHP >= 80 && percentageHP < 85):
            var2.style.width = '85%';
        break;
        case (percentageHP >= 85 && percentageHP < 90):
            var2.style.width = '90%';
        break;
        case (percentageHP >= 90 && percentageHP < 95):
            var2.style.width = '95%';
        break;
        case (percentageHP >= 95 && percentageHP < 100):
            var2.style.width = '100%';
        break;
    }
}

// Update Armor Indicators

function updateArmorIndicators(var1, var2) {
    const currentArmor = var1._armor;
    const percentageArmor = currentArmor / (var1._maxArmor / 100);
    
    switch (true) {
        case (percentageArmor === 0): 
            var2.style.width = '0%';
            var2.style.opacity = '0';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor > 0 && percentageArmor < 5): 
            var2.style.width = '5%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 5 && percentageArmor < 10):
            var2.style.width = '10%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 10 && percentageArmor < 15):
            var2.style.width = '15%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 15 && percentageArmor < 20):
            var2.style.width = '20%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 20 && percentageArmor < 25):
            var2.style.width = '25%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 25 && percentageArmor < 30):
            var2.style.width = '30%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 30 && percentageArmor < 35):
            var2.style.width = '35%';
            var2.style.backgroundColor = "rgb(81, 3, 3)";
        break;
        case (percentageArmor >= 35 && percentageArmor < 40):
            var2.style.width = '40%';
            var2.style.backgroundColor = "rgb(136, 8, 8)";
        break;
        case (percentageArmor >= 40 && percentageArmor < 45):
            var2.style.width = '45%';
            var2.style.backgroundColor = "rgb(136, 8, 8)";
        break;
        case (percentageArmor >= 45 && percentageArmor < 50):
            var2.style.width = '50%';
            var2.style.backgroundColor = "rgb(136, 8, 8)";
        break;
        case (percentageArmor >= 50 && percentageArmor < 55):
            var2.style.width = '55%';
            var2.style.backgroundColor = "rgb(136, 8, 8)";
        break;
        case (percentageArmor >= 55 && percentageArmor < 60):
            var2.style.width = '60%';
        break;
        case (percentageArmor >= 60 && percentageArmor < 65):
            var2.style.width = '65%';
        break;
        case (percentageArmor >= 65 && percentageArmor < 70):
            var2.style.width = '70%';
        break;
        case (percentageArmor >= 70 && percentageArmor < 75):
            var2.style.width = '75%';
        break;
        case (percentageArmor >= 75 && percentageArmor < 80):
            var2.style.width = '80%';
        break;
        case (percentageArmor >= 80 && percentageArmor < 85):
            var2.style.width = '85%';
        break;
        case (percentageArmor >= 85 && percentageArmor < 90):
            var2.style.width = '90%';
        break;
        case (percentageArmor >= 90 && percentageArmor < 95):
            var2.style.width = '95%';
        break;
        case (percentageArmor >= 95 && percentageArmor < 100):
            var2.style.width = '100%';
        break;
    }
}

const p1Health = document.getElementById('p1HealthContainer');
const p1Armor =document.getElementById('p1ArmorContainer');
const CPUHealth = document.getElementById('CPUHealthContainer');
const CPUArmor = document.getElementById('CPUArmorContainer');



    
function startRound() {    
    round()
    updateHealthIndicators(Player1, p1Health);
    updateHealthIndicators(CPU, CPUHealth)
    updateArmorIndicators(Player1, p1Armor);
    updateArmorIndicators(CPU, CPUArmor);
}



nextRound.addEventListener('click', () => {
    startRound();
    rndSound();
})

// Start new game

function refreshPage(){
    window.location.reload();
} 

document.getElementById('winGame').onclick = function() {refreshPage()}
document.getElementById('loseGame').onclick = function() {refreshPage()}


// Name prompt 

function playerName() {
    let person = prompt(`Hi! Please enter your name`, 'Mario Rossi');
    if (person !== null) {
        document.getElementById('P1NAME').innerHTML = person;
    }
}



