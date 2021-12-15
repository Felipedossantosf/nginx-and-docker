class Calculator {
    constructor(previaElement, actualElement){
        this.previa = previaElement
        this.actual = actualElement
        this.clear()
    }

    clear(){
        this.actual = ''
        this.previa = ''
        this.operacion = undefined
    }

    delete(){

    }

    appendNumber(numero){
        if (numero == '.' && this.actual.includes(',')) return
        this.actual = this.actual.toString() + numero.toString()
    }

    elegirOperacion(operacion){
        this.operacion = operacion
        this.previa = this.actual
        this.actual = ''
    }

    computar(){

    }

    actualizarDisplay(){
        this.actual.innerText = this.actual
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operacionButtons = document.querySelectorAll('[data-operacion]')
const igualButton = document.querySelector('[data-igual]')
const borrarButton = document.querySelector('[data-borrar]')
const borrarTodoButton = document.querySelector('[data-borrar-todo]')
const previaElement = document.querySelector('[data-previa]')
const actualElement = document.querySelector('[data-actual]')


const calculadora = new Calculator(previaElement, actualElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.innerText)
        calculadora.actualizarDisplay()
    })
})

operacionButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.elegirOperacion(button.innerText)
        calculadora.actualizarDisplay()
    })
})