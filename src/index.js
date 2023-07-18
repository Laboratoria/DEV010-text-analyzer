import analyzer from './analyzer.js';
console.log("ingreso")
const textarea = document.querySelector("textarea");
console.log("text--", textarea);
const log = document.getElementById("texto");
console.log("log", log);
textarea.addEventListener("keyup", functionKeyUp);


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");

});
function functionKeyUp() {
    analyzer.getWordCount(textarea.value);

    console.log("este es texto: ", textarea.value);
}

