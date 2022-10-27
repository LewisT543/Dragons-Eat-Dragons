import {roundToInt} from "../src/types";
import {dragon1, takeDamage, testDragon} from "../src/app";

describe("Dragons taking damage", () => {
    it("should return correct number of remaining hit-points", () => {
        expect(takeDamage(dragon1, roundToInt(10)).currentLifePoints).toEqual(990)
        expect(takeDamage(dragon1, roundToInt(100)).currentLifePoints).toEqual(900)
        expect(takeDamage(dragon1, roundToInt(0)).currentLifePoints).toEqual(1000)
        expect(takeDamage(dragon1, roundToInt(175)).currentLifePoints).toEqual(825)
    })
    it("should round down to use only real integers", () => {
        expect(takeDamage(dragon1, roundToInt(0.1)).currentLifePoints).toEqual(1000)
        expect(takeDamage(dragon1, roundToInt(0.3)).currentLifePoints).toEqual(1000)
        expect(takeDamage(dragon1, roundToInt(0.4)).currentLifePoints).toEqual(1000)
        expect(takeDamage(dragon1, roundToInt(0.6)).currentLifePoints).toEqual(999)
        expect(takeDamage(dragon1, roundToInt(113.76)).currentLifePoints).toEqual(886)
    })
    it("should not heal on a negative", () => {
        expect(takeDamage(dragon1, roundToInt(-124)).currentLifePoints).toEqual(1000)
        expect(takeDamage(testDragon, roundToInt(-500)).currentLifePoints).toEqual(200)
    })
    it("should switch status to dead on taking too much damage", () => {
        expect(takeDamage(dragon1, roundToInt(1100)).currentLifePoints).toEqual(0)
        expect(takeDamage(dragon1, roundToInt(1100)).status).toEqual('Dead')
        expect(takeDamage(testDragon, roundToInt(200)).currentLifePoints).toEqual(0)
        expect(takeDamage(testDragon, roundToInt(200)).status).toEqual('Dead')
    })
    it("should keep track of number of times damaged", () => {
        expect(takeDamage(takeDamage(dragon1, roundToInt(100)), roundToInt(100)).currentLifePoints).toEqual(800)
        expect(takeDamage(takeDamage(dragon1, roundToInt(100)), roundToInt(100)).timesDamaged).toEqual(2)
        expect(takeDamage(takeDamage(takeDamage(dragon1, roundToInt(100)), roundToInt(100)), roundToInt(100)).currentLifePoints).toEqual(700)
        expect(takeDamage(takeDamage(takeDamage(dragon1, roundToInt(100)), roundToInt(100)), roundToInt(100)).timesDamaged).toEqual(3)
    })
})