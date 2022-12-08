class Shape {
    public X: number
    public Y: number
    public color: string
    
    constructor(source: Shape) {
        this.X = source.X
        this.Y = source.Y
        this.color = source.color
    }

    public clone: () => void
}

class Rectangle extends Shpae {
    public width: number
    public height: number

    constructor(source: Rectangle) {
        this.width = cource.width
        this.height = source.height
    }

    public clone: () => void
}