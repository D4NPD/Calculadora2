const display = document.getElementById('display'),
      keys = document.getElementById('keys')
display.textContent = "0"
let enOperacion = false,
    resultado_mostrado = false,
    numero1, tipoOperacion
const calculadora = () =>{
    if(!keys) return 
    keys.addEventListener('click',e =>{
        const target = e.target,
              data = target.dataset
        
        if(data.numero) imprimir(data.numero)
        if(data.operacion) operacion(target, data.operacion)
        if(data.funcion) funcion(data.funcion)
    })
}

function imprimir(numero){
    resultado_mostrado = false
    if(display.textContent === '0' || enOperacion === true){
        display.textContent = numero
    }else if(numero === '.' && !display.textContent.includes('.')){
        display.textContent += numero
    }else if(numero !== '.'){
        display.textContent += numero
    }
    enOperacion = false
}

function operacion(elemento, operacion){
    enOperacion = true
    numero1 = Number(display.textContent),
    tipoOperacion = operacion
    display.textContent = elemento.textContent
}
function resultado(){
    if(resultado_mostrado){
    }else{
        let numero2 = Number(display.textContent),
        result
        switch(tipoOperacion){
            case 'sumar':
                result = numero1 + numero2
                break
            case 'restar':
                result = numero1 - numero2
                break
            case 'multiplicar':
                result = numero1 * numero2
                break
            case 'dividir': 
                result = numero1 / numero2
            default:
                break
    }
        if(result === Infinity){
            display.textContent = "Error: No se puede dividir entre cero"
        }else{
            display.textContent = result
        }
        resultado_mostrado = true
    }
    
}
function funcion(tipoFuncion){
    if(tipoFuncion === 'clear-all'){
        display.textContent = "0"
    }else{
        resultado()
    }
    enOperacion =  true
}
    



calculadora()