export default class Snake {
    head: HTMLElement
    body: HTMLCollection
    e: HTMLElement

    constructor() {
        this.e = document.getElementById('snake')
        this.head = document.querySelector('#snake > div')
        this.body = this.e.getElementsByTagName('div')
    }

    get x(): number {
        return this.head.offsetLeft
    }

    get y(): number {
        return this.head.offsetTop
    }

    set x(val: number) {
        if (this.x === val) return
        if (val < 0 || val > 290) throw new Error('dead')
        this.move()
        this.head.style.left = val + 'px'
        this.crash()
    }

    set y(val: number) {
        if (this.y === val) return
        if (val < 0 || val > 290) throw new Error('dead')
        this.move()
        this.head.style.top = val + 'px'
        this.crash()
    }

    addBody(): void {
        this.e.insertAdjacentHTML('beforeend', '<div></div>')
    }

    move() : void {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = (this.body[i - 1] as HTMLElement).offsetLeft
            let y = (this.body[i - 1] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = x + 'px';
            (this.body[i] as HTMLElement).style.top = y + 'px';
        }
    }

    crash() {
        for (let i = 1; i < this.body.length; i++) {
            let body = this.body[i] as HTMLElement
            if (this.x === body.offsetLeft && this.y === body.offsetTop) {
                throw new Error('dead')
            }
        }

    }
}