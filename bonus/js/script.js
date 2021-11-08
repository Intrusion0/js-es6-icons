// Milestone 1-2

/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.*/

/* Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente. */

/* Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

/* Milestone 1

--DONE	1. Creo una funzione che crea le icons => function genIcons(){};
--DONE	2. Creo un ciclo che scorre all'interno dell'array => foreach
	--DONE	2.2 Utilizzo .innerHTML per stampare le card delle icone => x.innerHTML += ``;
		--DONE	2.2.1 Sostituisco la classe originale con gli elementi degli object => <i class="{x,y,a,ecc..}"></i>

*/

/* Milestone 2 --DONE	*/

/* Milestone 3

1. Aggiungo un evento quando l'utente seleziona un tipo di icona => x.addEventListener
    1.1 Utilizzo un filtro per creare un nuovo array con le varie modifiche => icons.filter(element)
    1.2 Se l'utente seleziona un tipo di icone, stamperò in HTML quelle nell'array nuovo che comprenderanno il tipo selezionato = x.innerHTML += ``;

*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const contSelect = document.querySelector('.ms-select');

genIcons();

function genIcons() {
	const contIcons = document.querySelector('.row.row-cols-5');

	icons.forEach((element, index) => {
		contIcons.innerHTML += `
		<div class="col">
			<div class="ms-container-icons">
				<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
				<span>${element.name}</span>
			</div>
		</div>`
	});
}

contSelect.addEventListener('change', function() {
    
});