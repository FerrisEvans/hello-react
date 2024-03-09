export default class ScorePanel {
    score: number
    level: number
    scoreEle: HTMLElement
    levelEle: HTMLElement

    private readonly MAX_LEVEL = 10

    constructor() {
        this.score = 0
        this.level = 1
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }

    add() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.MAX_LEVEL) {
            this.level++
        }
        this.levelEle.innerHTML = this.level + ''
    }
}