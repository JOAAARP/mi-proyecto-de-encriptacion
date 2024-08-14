/* SCRIP PARA INCRIPTAR*/

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


/* script para desencriptar*/

document.getElementById('desencryptBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;

    if (inputText === inputText.toLowerCase() && /^[a-z\s]*$/.test(inputText)) {
        var decryptedText = decryptText(inputText);
        document.getElementById('outputText').value = decryptedText;
        // Opcionalmente ocultar o mostrar elementos según sea necesario
    } else {
        alert("Por favor, ingrese texto en minúsculas y sin caracteres especiales.");
    }
});



/*script para copiar texto*/

document.addEventListener('DOMContentLoaded', function() {
    var copyBtn = document.getElementById('Copiar');

    copyBtn.addEventListener('click', function() {
        var outputText = document.getElementById('outputText').value;
        if (navigator.clipboard) { 
            navigator.clipboard.writeText(outputText)
                .then(() => {
                    alert('Texto copiado al portapapeles.');
                })
                .catch(err => {
                    console.error('Error al copiar texto: ', err);
                });
        }
    });
});


/* Función para desencriptar */
function decryptText(text) {
    var replacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Crear una expresión regular que capture todas las secuencias de reemplazo
    var regex = new RegExp(Object.keys(replacements).join('|'), 'g');

    return text.replace(regex, match => replacements[match]);
}



/*funcion para encriptar*/
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


