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

El diseño CSS de este proyecto está orientado a crear una interfaz limpia y amigable, utilizando estilos modernos y responsivos. A continuación, se detallan los puntos clave de la hoja de estilos.

## Configuración Global
- **Fondo general** y **estilo de fuente**: Se aplica un fondo color `#F3F5FC` y la fuente 'Inter' a toda la página para mantener un diseño coherente y profesional.
- **Tamaño de fuente y peso**: El tamaño de fuente está establecido en 32px con un peso de 400, lo que asegura legibilidad.

## Layout Principal
- **Flexbox**: Se usa Flexbox en el `<main>` para centrar y alinear correctamente todos los elementos, facilitando la responsividad del diseño.

## Entrada de Texto
- **Estilos de Input**: El campo de entrada `#inputText` no tiene borde, y utiliza transformación a minúsculas, con un color específico `#0A3871` que refleja el esquema de color del sitio.

## Salida de Texto
- **Contenedor de Salida**: El `.output-container` está diseñado para ajustarse de manera relativa dentro del layout, con dimensiones específicas y padding para alinear el contenido interno.
- **Estilos de Text Area**: El `#outputText` incluye una imagen de fondo y estilos para asegurar que el texto es fácil de leer y estéticamente agradable.

## Mensajes de Estado
- **Errores e Instrucciones**: Mensajes como `.mensaje-error` y `.mensaje-instruccion` están estilizados para aparecer sobre el contenido de fondo, haciendo uso de posiciones absolutas para colocarlos en el lugar adecuado.

## Botones
- **Diseño y Hover de Botones**: Los botones están diseñados para ser intuitivos y cómodos de usar, con efectos `hover` que mejoran la interactividad.
- **Botón de Copia**: El botón `#Copiar` es inicialmente invisible y solo se muestra cuando es relevante, manteniendo la interfaz limpia.

## Consideraciones de Diseño
- Los estilos están pensados para ser flexibles y fácilmente modificables para futuras expansiones o ajustes.
- La consistencia visual entre elementos mejora la experiencia del usuario y la usabilidad del sitio.

Este resumen cubre los aspectos fundamentales del diseño CSS utilizado en el proyecto. Para más detalles, se puede revisar el archivo `style.css` incluido en el repositorio.

