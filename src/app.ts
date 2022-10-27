import {DragonStatus, Dragon, roundToInt, Int} from "./types";

export const dragon1: Dragon = {
    maxLifePoints: roundToInt(1000),
    currentLifePoints: roundToInt(1000),
    status: 'Alive' as DragonStatus,
    timesDamaged: 0
};

const noDamage = (d: Dragon): Dragon => {
    console.log("Zero or negative Damage, nothing happens.");
    return new Dragon(d.maxLifePoints, d.currentLifePoints, d.status, d.timesDamaged);
}

const tooMuchDamage = (d: Dragon): Dragon => {
    console.log("Damage too high, dragon is now dead. :(");
    return new Dragon(d.maxLifePoints, roundToInt(0), 'Dead', d.timesDamaged + 1)
}

const damage = (d: Dragon, dmg: Int): Dragon => {
    const newLp = d.currentLifePoints - dmg
    console.log(`Dragon took damage: Current health ${newLp}/${d.maxLifePoints}`);
    return new Dragon(d.maxLifePoints, roundToInt(newLp), 'Alive', d.timesDamaged + 1)
}

// Damage the dragon, return a damaged dragon
export const takeDamage = (d: Dragon, dmg: Int): Dragon => {
    if (dmg < 1) return noDamage(d)
    if (dmg >= d.currentLifePoints) return tooMuchDamage(d)
    return damage(d, dmg)
};

