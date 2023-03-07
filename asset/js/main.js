/* 
quest:
Decrizione passaggi:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
 */
//debug connect main.js on index.html
alert("main.js connect");

//request user'name
let userName = prompt("Qual'è il tuo Nome");
console.log(userName);

//request user'surname
let userSurname;
userSurname = prompt("Qual'è il tuo Cognome");
console.log(userSurname);

//request user'favorit color
let usercolor;
usercolor = prompt("Qual'è il tuo Colore preferito");
console.log(usercolor);

//whrite on page the result 
let result = userName + userSurname + usercolor + 23;
console.log(result);
let element = document.getElementById("result_display");
console.log (element);
element.innerHTML = result;