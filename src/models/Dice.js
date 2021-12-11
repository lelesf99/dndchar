export default class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll(times) {
        if (!times)
            return [Math.ceil(Math.random() * this.sides)];

        let rolled = [];
        for (let index = 0; index < times; index++) {
            rolled.push(Math.ceil(Math.random() * this.sides));
        }
        return rolled;
    }
}