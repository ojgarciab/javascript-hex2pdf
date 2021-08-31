/* Encapsulamos la funcionalidad en una clase */
class Hexa2Pdf {
    constructor (datosHexa, tipoMime = "application/force-download") {
        /* Dividimos la cadena en parejas de caracteres hexadecimales */
        const parejas = datosHexa.match(/.{1,2}/g);
        /* Convertimos cada pareja hexadecimal en un carácter */
        const octetos = parejas.map(
            c => String.fromCharCode(parseInt(c, 16))
        );
        /* Unimos los caracteres en una única cadena de caracteres */
        const archivo = octetos.join("");
        /* Creamos un Blob con los datos proporcionados */
        this.blob = new Blob(
            [ archivo ],
            { type: tipoMime }
        );
        /* Creamos una URL con el Blob anterior */
        this.url = URL.createObjectURL(this.blob);
    }
}

/* Exportamos la clase */
export { Hexa2Pdf };
