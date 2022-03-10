//Como confirmar se o objeto existe

if (typeof Array.fromaasasias !== 'undefined') {
	console.log('Existe');
} else {
	console.log('Não existe');
}

// Exercícios
//
// Liste 5 objetos nativos

Object;
String;
Array;
Function;
Number;
Math;
Date;

// Liste 5 objetos do browser

Window;
Document;
HTMLCollection;
NodeList;
window.history;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== 'undefined') {
	console.log('Existe');
} else {
	console.log('Não Existe');
}

document.webkitHidden
document.webkitVisibilityState