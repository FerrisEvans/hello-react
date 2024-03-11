import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./score";

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

export default class Control {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction = Direction.RIGHT
    live: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init() {
        this.run()
        document.addEventListener('keydown', this.keydownHandler)
        this.food.change()
    }

    keydownHandler = (event: KeyboardEvent) => {
        const k = event.key
        const current = this.direction
        const up = (k === 'ArrowUp' || k === 'w' || k === 'W') && current !== Direction.DOWN
        const down = (k === 'ArrowDown' || k === 's' || k === 'S') && current !== Direction.UP
        const left = (k === 'ArrowLeft' || k === 'a' || k === 'A') && current !== Direction.RIGHT
        const right = (k === 'ArrowRight' || k === 'd' || k === 'D') && current !== Direction.LEFT

        if (up) {
            this.direction = Direction.UP
        }

        if (down) {
            this.direction = Direction.DOWN
        }

        if (left) {
            this.direction = Direction.LEFT
        }

        if (right) {
            this.direction = Direction.RIGHT
        }

    }

    run = () => {
        let x = this.snake.x
        let y = this.snake.y
        switch (this.direction) {
            case Direction.UP:
                y -= 10
                break
            case Direction.DOWN:
                y += 10
                break
            case Direction.LEFT:
                x -= 10
                break
            case Direction.RIGHT:
                x += 10
                break
            default:
        }

        this.eat(x, y)

        try {
            this.snake.x = x
            this.snake.y = y
            this.live && setTimeout(this.run, 600 - (this.scorePanel.level - 1) * 50)
        } catch (e) {
            alert(e)
            this.live = false
        }


    }

    eat = (x: number, y: number) => {
        if (x === this.food.x && y === this.food.y) {
            this.food.change()
            this.scorePanel.add()
            this.snake.addBody()
        }

    }

}