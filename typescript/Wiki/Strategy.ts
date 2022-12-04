class Button {
    public onSubmit: (numbers: number[]) => void
    public label: string

    constructor(onSubmit: (numbers: number[]) => void, label: string) {
        this.onSubmit = onSubmit
        this.label = label
    }
}

const sum = (numbers: number[]) => {
    return numbers.reduce((prev, current) => {
        return prev + current
    })
}

const numsmap = (numbers: number[]) => {
    return numbers.join(" ")
}

const numbers = [...Array(10)]
const button1 = new Button(sum, "Add'em")
const button2 = new Button(numsmap, "Join'em")

console.log('----------')

console.log(`button1: ${button1.onSubmit([1, 2, 3])}`)
console.log(`button2: ${button2.onSubmit([1, 2, 3])}`)

console.log('----------')
