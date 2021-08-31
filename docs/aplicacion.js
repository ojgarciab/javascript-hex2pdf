function verPdf() {
  /* Un único parámetro con la cadena de caracteres en hexadecimal */
  const [ hexadecimal, destino ] = arguments;
  /* Dividimos la cadena en parejas de caracteres hexadecimales */
  const parejas = hexadecimal.match(/.{1,2}/g);
  /* Convertimos cada pareja hexadecimal en un carácter */
  const octetos = parejas.map(
    c => String.fromCharCode(parseInt(c, 16))
  );
  /* Unimos los caracteres en una única cadena de caracteres */
  const archivo = octetos.join("");
  /* Creamos un Blob con los datos anteriores */
  const blob = new Blob(
    [ archivo ],
    { type: 'application/pdf' }
  );
  /* Creamos una URL con el Blob anterior */
  const url = URL.createObjectURL(blob);
  /* Dependiendo del botón, realizamos una acción diferente */
  switch (destino) {
    case "pestaña":
      window.open(url, "_blank");
      break;
    case "marco":
      iframe.src = url;
      break;
    default:
       console.error("Se ha recibido un destino incorrecto:", destino);
  }
}

/* Un PDF mínimo */
const datos = "255044462D312E310A25C391C3A1C5950A0A312030206F626A0A3C3C202F54797065202F436174616C6F670A2F50616765732032203020520A3E3E0A656E646F626A0A0A322030206F626A0A3C3C202F54797065202F50616765730A2F4B696473205B33203020525D0A2F436F756E7420310A2F4D65646961426F78205B30203020353935203834325D0A3E3E0A656E646F626A0A0A332030206F626A0A3C3C202F54797065202F506167650A2F506172656E742032203020520A2F5265736F75726365730A3C3C202F466F6E740A3C3C202F46310A3C3C202F54797065202F466F6E740A2F53756274797065202F54797065310A2F42617365466F6E74202F54696D65732D526F6D616E0A3E3E0A3E3E0A3E3E0A2F436F6E74656E74732034203020520A3E3E0A656E646F626A0A0A342030206F626A0A3C3C202F4C656E677468203535203E3E0A73747265616D0A42540A2F46312038302054660A3530203534302054640A28507275656261206465205044462920546A0A45540A656E6473747265616D0A656E646F626A0A0A787265660A3020350A3030303030303030303020363535333520660A30303030303030303138203030303030206E0A30303030303030303737203030303030206E0A30303030303030313738203030303030206E0A30303030303030343537203030303030206E0A747261696C65720A3C3C202F526F6F742031203020520A2F53697A6520350A3E3E0A7374617274787265660A3536350A2525454F460A";

/* A cada botón le asignamos su manipulador */
document.querySelectorAll("button").forEach(elemento => {
  addEventListener("click", function(evento) {
    verPdf(datos, evento.target.dataset.destino);
  });
});
