import Dice from './Dice';
import Race from './Race';
export default class Character {
    constructor(name, chClass, raceCode, raceAge, raceSize, subRaceCode, level, hab) {
        this.name = name
        this.race = new Race(this, raceCode, raceAge, raceSize, this.age, this.size, subRaceCode);
        this.chClass = chClass;
        this.level = level;

        if (!hab) {
            this.hab = {
                str: Character.rollHab(),
                dex: Character.rollHab(),
                con: Character.rollHab(),
                int: Character.rollHab(),
                wis: Character.rollHab(),
                cha: Character.rollHab(),
            };
        } else {
            this.hab = hab;
        }
        this.mod = {
            str: Math.floor((this.hab.str - 10) / 2),
            dex: Math.floor((this.hab.dex - 10) / 2),
            con: Math.floor((this.hab.con - 10) / 2),
            int: Math.floor((this.hab.int - 10) / 2),
            wis: Math.floor((this.hab.wis - 10) / 2),
            cha: Math.floor((this.hab.cha - 10) / 2),
        }

        if (this.level === 1) {
            this.exp = 0;
            this.prof = 2;
        } else if (this.level === 2) {
            this.exp = 300;
            this.prof = 2;
        } else if (this.level === 3) {
            this.exp = 900;
            this.prof = 2;
        } else if (this.level === 4) {
            this.exp = 2700;
            this.prof = 2;
        } else if (this.level === 5) {
            this.exp = 6500;
            this.prof = 3;
        } else if (this.level === 6) {
            this.exp = 14000;
            this.prof = 3;
        } else if (this.level === 7) {
            this.exp = 23000;
            this.prof = 3;
        } else if (this.level === 8) {
            this.exp = 34000;
            this.prof = 3;
        } else if (this.level === 9) {
            this.exp = 48000;
            this.prof = 4;
        } else if (this.level === 10) {
            this.exp = 64000;
            this.prof = 4;
        } else if (this.level === 11) {
            this.exp = 85000;
            this.prof = 4;
        } else if (this.level === 12) {
            this.exp = 100000;
            this.prof = 4;
        } else if (this.level === 13) {
            this.exp = 120000;
            this.prof = 5;
        } else if (this.level === 14) {
            this.exp = 140000;
            this.prof = 5;
        } else if (this.level === 15) {
            this.exp = 165000;
            this.prof = 5;
        } else if (this.level === 16) {
            this.exp = 195000;
            this.prof = 5;
        } else if (this.level === 17) {
            this.exp = 225000;
            this.prof = 6;
        } else if (this.level === 18) {
            this.exp = 265000;
            this.prof = 6;
        } else if (this.level === 19) {
            this.exp = 305000;
            this.prof = 6;
        } else if (this.level === 20) {
            this.exp = 355000;
            this.prof = 6;
        }
    }

    static rollHab() {
        const d6 = new Dice(6);
        const rolls = d6.roll(4);
        rolls.sort((a, b) => a - b);
        rolls.shift();
        return rolls.reduce((a, b) => a + b);
    }
}