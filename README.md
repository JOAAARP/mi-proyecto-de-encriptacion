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
# Estructura CSS

El diseño CSS de este proyecto está orientado a crear una interfaz limpia y amigable, utilizando estilos modernos y responsivos. A continuación, se detallan los puntos clave de la hoja de estilos que utilice a mi manera para intentar llegar a estilo requerido.

## Configuración Global
- **Fondo general** y **estilo de fuente**: Se aplica un fondo color `#F3F5FC` y la fuente 'Inter' a toda la página para mantener un diseño coherente y profesional.
- **Tamaño de fuente y peso**: El tamaño de fuente está establecido en 32px con un peso de 400, lo que asegura legibilidad.
```css
*{
    background: #F3F5FC;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
}
```
## Entrada de Textos y Salida de Texto
- **Estilos de Input**: El campo de entrada `#inputText` no tiene borde, y utiliza transformación a minúsculas, con un color específico `#0A3871` que refleja el esquema de color del sitio.
- **Contenedor de Salida**: El `.output-container` está diseñado para ajustarse de manera relativa dentro del layout, con dimensiones específicas y padding para alinear el contenido interno.
- **Estilos de Text Area**: El `#outputText` incluye una imagen de fondo y estilos para asegurar que el texto es fácil de leer y estéticamente agradable.
```css
#inputText {
    border: none;
    color: #0A3871;
    margin-top: 90px;
    text-transform: lowercase;
}
.output-container {
    position: relative;
    
    width: 400px;  
    height: 850px; 
    padding-left: 35%;
}
#outputText {
    background-image: url('imagenes/Muñeco.png');
    background-repeat:no-repeat;
    height: 100%;
    width: 85%;
    border: none; 
    border-radius: 24px;
    background-color: white; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
    font-size: 24px;
}

```
## Mensajes de Estado
- **Errores e Instrucciones**: Mensajes como `.mensaje-error` y `.mensaje-instruccion` están estilizados para aparecer sobre el contenido de fondo, haciendo uso de posiciones absolutas para colocarlos en el lugar adecuado.
```css
.mensaje-error {
    font-size: 20px; 
    font-weight: bold; 
    position: absolute;
    bottom: 40%;
    right: 13%;
    background-color: white;
}

.mensaje-instruccion {
    font-size: 16px; 
    font-weight: normal; 
    position: absolute;
    bottom: 30%;
    right: 23%;
    background-color: white;

}
```

## Botones
- **Diseño y Hover de Botones**: Los botones están diseñados para ser intuitivos y cómodos de usar, con efectos `hover` que mejoran la interactividad.
- **Botón de Copia**: El botón `#Copiar` es inicialmente invisible y solo se muestra cuando es relevante, manteniendo la interfaz limpia.

```css
#encryptBtn:hover{
    background-color: #1f4470;
    color: #c7d4e6; 
    cursor: pointer; 
    
}

#desencryptBtn:hover {
    background-color: #ccd8e9;
    color: #173f70; 
    cursor: pointer; 
}

#Copiar {
    visibility: hidden; 
}
```

Este resumen cubre los aspectos fundamentales del diseño CSS utilizado en el proyecto. Para más detalles, se puede revisar el archivo `style.css` incluido en el repositorio ya que si quisieramos abordar todas las clases no acabamos en este readme :o.

# Estructura JavaScript
Probablemente la seccion mas larga pero mas sencilla de nuestro codigo :3. El script JavaScript proporciona las funciones esenciales de encriptación y desencriptación, además de una funcionalidad para copiar texto al portapapeles. A continuación, se detallan las funciones principales implementadas en el archivo `script.js`.
## Encriptar Mensajes
Al presionar el botón "Encriptar", el texto introducido por el usuario es procesado para convertir todas las vocales según reglas definidas, transformando cada vocal en una cadena de caracteres específica.
```javascript
document.getElementById('encryptBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value.trim(); 
    if (inputText === '') {
        return; 
    }
    if (inputText === inputText.toLowerCase() && /^[a-z\s]*$/.test(inputText)) {
        var encryptedText = encryptText(inputText);
        document.getElementById('outputText').value = encryptedText;
        document.getElementById('Copiar').style.visibility = 'visible';
        document.querySelector('.mensaje-error').style.display = 'none';
        document.querySelector('.mensaje-instruccion').style.display = 'none';
        document.querySelector('.mensaje-instruccion2').style.display = 'none';
        document.getElementById('outputText').style.backgroundImage = 'none';
    } else {
        alert("Por favor, ingrese texto en minúsculas y sin caracteres especiales.");
    }
});
```
## Desencriptar Mensajes
El botón "Desencriptar" permite revertir el proceso de encriptación, devolviendo el texto original a partir del texto encriptado.
```javascript
document.getElementById('desencryptBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    if (inputText === inputText.toLowerCase() && /^[a-z\s]*$/.test(inputText)) {
        var decryptedText = decryptText(inputText);
        document.getElementById('outputText').value = decryptedText;
    } else {
        alert("Por favor, ingrese texto en minúsculas y sin caracteres especiales.");
    }
});
```
## Función de Encriptación `encryptText`

La función `encryptText` modifica el texto ingresado por el usuario reemplazando cada vocal con una cadena específica, de acuerdo con las siguientes reglas de encriptación:

- 'e' → 'enter'
- 'i' → 'imes'
- 'a' → 'ai'
- 'o' → 'ober'
- 'u' → 'ufat'

El proceso utiliza una expresión regular para identificar todas las vocales en el texto y las reemplaza mediante un objeto de mapeo que asocia cada vocal con su correspondiente cadena encriptada.

```javascript
function encryptText(text) {
    var replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => replacements[match]);
}
```
## Desencriptar Mensajes
El botón "Desencriptar" permite revertir el proceso de encriptación, devolviendo el texto original a partir del texto encriptado.
```javascript
document.getElementById('desencryptBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    if (inputText === inputText.toLowerCase() && /^[a-z\s]*$/.test(inputText)) {
        var decryptedText = decryptText(inputText);
        document.getElementById('outputText').value = decryptedText;
    } else {
        alert("Por favor, ingrese texto en minúsculas y sin caracteres especiales.");
    }
});
```
## Agradecimientos

¡Gracias por visitar y explorar el proyecto de encriptación! Espero que hayas encontrado la información útil y el proyecto interesante. Si tienes alguna pregunta, sugerencia o deseas contribuir al proyecto, no dudes en abrir un issue o enviar un pull request. Tu feedback y contribuciones son siempre bienvenidos y muy apreciados.

Sigue explorando y experimentando, y ¡no olvides mantener la curiosidad y la pasión por aprender y mejorar!

---

**¡Hasta la próxima!**


