
alert('ciao');

var nomeUtente = prompt('Come ti chiami?');
  console.log(nomeUtente);

var nome = ('nomeUtente');
  console.log(nome);

var cognomeUtente = prompt('Qual è il tuo cognome?')
  console.log(cognomeUtente);

var cognome = ('cognomeUtente');
  console.log(cognome);

var colorePreferito = prompt('Qual è il tuo colore preferito');
  console.log(colorePreferito);

var colore = ('colorePreferito');
  console.log(colore);


document.getElementById('nome').innerHTML = nomeUtente;
document.getElementById('cognome').innerHTML = cognomeUtente;
document.getElementById('colore').innerHTML = colorePreferito + '19';

document.getElementById('tutto-insieme').innerHTML = nomeUtente + cognomeUtente + colorePreferito + '19';
