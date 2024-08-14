# Proyecto de Encriptación HTML, CSS Y JS.
Muy buenos dias/tardes/noches a quien corresponda, soy joaquin aravena pinto y les traigo mi proyecto de encriptador de texto .
Este proyecto permite a los usuarios encriptar y desencriptar mensajes usando una interfaz web simple. Utiliza tecnologías web estándares como HTML, CSS, y JavaScript.
## Estructura HTML
### Head
El `<head>` contiene metadatos esenciales, enlaces a fuentes externas como Google Fonts, y enlaces a los archivos de estilo CSS.

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"> 
</head>

```
### Header
El <header> contiene el logo de nuestro proyecto el cual corresponde al logo de alura latam
### Main Content
Nuestro Contenido principal se dividio en 2 secciones la seccion de entrada y la seccion de salida
#### Sección de Entrada
Esta sección permite a los usuarios ingresar texto que desean encriptar o desencriptar.
```html
<section>
    <textarea id="inputText" rows="10" cols="30">Escribe tu mensaje secreto :3</textarea>
    <div>
        <p class="input-instructions">Por favor, solo poner letras mayúsculas y minúsculas.</p>
    </div>
    <div class="botones">
        <button id="encryptBtn">Encriptar</button>
        <button id="desencryptBtn">Desencriptar</button>
    </div>
</section>
```
#### Sección de Salida
Muestra los resultados de la encriptación o desencriptación y ofrece una opción para copiar el texto. Tambien podemos ver una pequeña trampa, escribi la frase en distintas lineas de codigo para poder darle un formato que se nos sea comodo y visualmente mas guapo
```html
<section>
    <div class="output-container">
        <p class="mensaje-error">Ningún mensaje fue encontrado.</p>
        <p class="mensaje-instruccion">Ingresa el texto que desees</p>
        <p class="mensaje-instruccion2">encriptar o desencriptar.</p>
        <textarea id="outputText" rows="10" cols="20" readonly></textarea>
        <button id="Copiar">Copiar</button>
    </div>
</section>
```


