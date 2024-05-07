 export default class Character {
    static typeContainer = [
        'Bowman',
        'Swordsman', 
        'Magician', 
        'Daemon', 
        'Undead', 
        'Zombie',
    ];

    constructor(name, type, attack, defence) {
       this.name = name;
       if((this.name).length < 2 || (this.name).length > 10) {
        throw new Error ('Invalid length name');
       }else if(typeof this.name !== 'string') {
        throw new Error ('Name is not string');
       }

       this.type = type;
       if(!Character.typeContainer.includes(type)) {
        throw new Error ('Invalid type of character');
       }
        
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelup() {
        if(this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }else {
            throw new Error('Character is dead');
        }

        
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
    }
}
 }