class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        if (this.max < 1) { return 0 }
        this.middle = Math.round((this.max + this.min) / 2)
        return this.middle
        //алгоритм бинарного поиска
        //возвратить ответ-предположение в каждой попытке
    }

    lower() {
        return this.max = this.middle
        //переопределить верхнюю границу
    }

    greater() {
        return this.min = this.middle
        //переопределить нижнюю границу
    }
}

module.exports = GuessingGame;
