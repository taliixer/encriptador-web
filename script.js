const textArea = document.querySelector(".programa__cuadro-texto")
const mensaje = document.querySelector(".programa__cuadro-texto--salida")
const botonEncriptar = document.getElementById("btn-encriptador")
const botonDesencriptar = document.getElementById("btn-desencriptador")
const decoracion = document.querySelector(".decoracion")
const btnCopiar = document.getElementById("boton-copiar")
let answer = document.getElementById("respuestaCopiado");
let matrisCodigo = [["e","enter"],
                    ["i","amis"],
                    ["a","ai"],
                    ["o","ober"],
                    ["u","ufat"]]

botonEncriptar.addEventListener("click",btnEncriptar)
botonDesencriptar.addEventListener("click",btnDesencriptar)

btnCopiar.addEventListener('click', copiar);

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)

    decoracion.style.display = "none"
    mensaje.style.display = "block"
    mensaje.value = textoEncriptado
    textArea.value = ""
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}

function copiar() {
    // Sleccionando el texto
    mensaje.select(); 
    try {
        // Copiando el texto seleccionado
        var successful = document.execCommand('copy');
  
        if(successful) answer.innerHTML = 'Copiado!';
        else answer.innerHTML = 'Incapaz de copiar!';
    } catch (err) {
        answer.innerHTML = 'Browser no soportado!';
    }
    mensaje.value = ""
}

function encriptar(stringEncriptado) {
    
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i<matrisCodigo.length; i++) {
        if(stringEncriptado.includes(matrisCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrisCodigo[i][0],matrisCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i<matrisCodigo.length; i++) {
        if(stringDesencriptado.includes(matrisCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrisCodigo[i][1],matrisCodigo[i][0])
        }
    }
    return stringDesencriptado
}


