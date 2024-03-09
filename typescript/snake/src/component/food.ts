class Food {
    e: HTMLElement

    constructor() {
        this.e = document.getElementById('food')!
    }

    get x() {
        return this.e.offsetLeft
    }

    get y() {
        return this.e.offsetTop
    }

    change() {
        let x = Math.round(Math.random() * 29) * 10
        let y = Math.round(Math.random() * 29) * 10
        this.e.style.left = x + 'px'
        this.e.style.top = y + 'px'
    }
}