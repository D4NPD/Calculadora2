const display = document.getElementById('display'),
      keys = document.getElementById('keys')
display.textContent = "0"
let enOperacion = false
const calculadora = () =>{
    if(!keys) return 
    keys.addEventListener('click',e =>{
        const target = e.target,
              data = target.dataset
        
        if(data.numero) imprimir(data.numero)
        if(data.operacion) operacion(target, data.operacion)
        if(data.funcion) funcion()
    })
}

function imprimir(numero){
    if(display.textContent === '0' || enOperacion === true){
        display.textContent = numero
    }else{
        display.textContent += numero
    }
    enOperacion = false
}

function operacion(elemento, operacion){
    enOperacion = true
    const numero1 = display.textContent,
          tipoOperacion = operacion
    display.textContent = elemento.textContent
}

calculadora()