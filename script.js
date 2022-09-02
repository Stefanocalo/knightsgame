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
            return this._HP
        } else {
            this._HP = 0;
            return this._HP
        }
    }
}

// battle function

const battle = function () {
    do {
        CPU.updateHP(player1.attack());
        console.log(CPU.HP);
        console.log(player1.attack());

        player1.updateHP(CPU.attack());
        console.log(player1.HP);
        console.log(CPU.attack());

    } while (CPU._HP != 0 && player1._HP != 0);
    if (player1._HP === 0) {
        console.log(lossPhrases[Math.floor(Math.random() * lossPhrases.length)]);
        console.log('You have lost');
    } else if (CPU._HP === 0) {
        console.log('You won!')
        console.log(winPhrases[Math.floor(Math.random() * winPhrases.length)]);
    }
}




const SwordKnight = new Knight('Sword Knight', 500, 63);

const Archer = new Knight('Medieval Archer', 425, 80);



let player1 = Archer
let CPU = SwordKnight

battle();


