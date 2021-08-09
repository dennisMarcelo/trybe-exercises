const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage:undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
function damageDragon(){
    return Math.floor(Math.random() * (dragon.strength - 15) + 15);
}

function warriorDamage(){
    return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength ) + warrior.strength);
}

function mageDamage(){
    const mageStatus = {
        custMana: 0,
        mageDamage: 'mana insuficiente'
    }

    if(mage.mana > 15){
        mageStatus.custMana = 15,
        mageStatus.mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence ) + mage.intelligence )
    }

    return mageStatus
}

const battleMembers = { mage, warrior, dragon };

const gameActions = {
    warriorTurn: (warriorAtack) => {
        const damage  = warriorAtack();
        warrior.damage = damage;
        dragon.healthPoints -= damage
    },

    mageTurn: (mageAtack) => {
        const damage = mageAtack();
        mage.damage = damage.mageDamage;
        mage.mana -= damage.custMana;
        dragon.healthPoints -= damage.mageDamage;
    },

    dragonTurn: (dragonAtack) => {
        const damge = dragonAtack();
        dragon.damage = damge;
        mage.healthPoints -= damge;
        warrior.healthPoints -= damge;
    },

    turnResults: ()=> battleMembers
};

//-------teste-----
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(damageDragon);

console.log(gameActions.turnResults())