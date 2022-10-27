// Write a function that has the input of a dragon and an amount of damage. The output is a new dragon that has been damaged.
//
//     You can pick your favourite program language, or just use typescript (as long as it's strongly typed I don't mind so not javascript)
//
// All Dragons, when created, have:
// •	Health, starting at 1000
// •	May be Alive or Dead, starting Alive
// •	Dragons can Deal Damage to Dragons.
// •	Damage is subtracted from Health
// •	When damage received exceeds current Health, Health becomes 0 and the dragon dies

// For extra points add Logging, and a Metric that counts the number of times a character is damaged.
//
//     Make sure you address the following:
//     •	Dragons are immutable.
//     •	Write tests
//     •	Make sure the dragon isn't healed by negative damage
//     •	If you can put this into github and have a github action run the tests that would be great

export type DragonStatus = 'Alive' | 'Dead'

export type Int = number & { __int__: void };
export const roundToInt = (num: number): Int => Math.round(num) as Int;

export interface IDragon {
    readonly maxLifePoints: Int
    readonly currentLifePoints: Int,
    readonly status: DragonStatus,
    readonly timesDamaged: number
}

export class Dragon implements IDragon {
    maxLifePoints: Int;
    currentLifePoints: Int;
    status: DragonStatus;
    timesDamaged: number;

    constructor(maxLifePoints: Int, currentLifePoints: Int, status: DragonStatus, timesDamaged: number ) {
        this.maxLifePoints = maxLifePoints
        this.currentLifePoints = currentLifePoints
        this.status = status
        this.timesDamaged = timesDamaged
    }
}


