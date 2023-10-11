class CsGoPlayer {
    #weapon;
    #money;
    #alive;
    #kills;

    constructor(weapon, money){ //atributos 
        this.#weapon = weapon;        
        this.#money = money;
        this.#alive = true;
        this.#kills = 0;
    };

    get kills(){ //metodo
        return this.#kills;
    };

    set kills(value){ //metodo
        this.#kills += value;       
    };

    interactWithBomb(){
        console.log("Are interacting with the bomb");
    };    
};

class CounterTerrorist extends CsGoPlayer{    
    constructor(weapon, money){
        super(weapon, money);
    };
    interactWithBomb(){
        console.log("Are defusing the bomb");
    };
};


const jpk = new CsGoPlayer("M4A4", "Counter-Terrorist", 16000);
const varchar = new CsGoPlayer("AK-47", "Terrorist", 16000);
jpk.kills += 1;
jpk.interactWithBomb();

const gsAgra = new CounterTerrorist("USP", 800);
gsAgra.interactWithBomb();
