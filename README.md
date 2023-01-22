# encriptador-web
Este código es un programa que permite encriptar y desencriptar textos. Se utilizan dos funciones, "encriptar" y "desencriptar", para realizar esta tarea. Ambas funciones reciben un string como parámetro, el cual es modificado mediante la reemplaza de ciertas letras específicas con otras, según una matriz de códigos preestablecida.

El código está compuesto de varias partes:

Se seleccionan los elementos HTML necesarios mediante el uso de "document.querySelector" y "document.getElementById"
Se establecen los eventos "click" para los botones de "encriptar" y "desencriptar" y se asignan las funciones correspondientes.
Se establece un evento "click" para el botón de copiar y se asigna la función "copiar"
Se define la función "copiar" que se encarga de copiar el texto del elemento "mensaje" a la portapapeles
Se definen las funciones "encriptar" y "desencriptar" que se encargan de encriptar y desencriptar el texto respectivamente.
