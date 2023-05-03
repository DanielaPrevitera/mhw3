function onJson_movie(json){
console.log("ricevuto");
console.log(json);
const box=document.querySelector('#Box');
box.innerHTML='';

const library = document.querySelector('#album-view');
  library.innerHTML = '';
  // Leggi il numero di risultati
  const result = json.results[0];
  const title = result.original_name;
  const riassunto = result.overview;
  const votazione=result.vote_average;
  const selected_image = result.backdrop_path;
  const data= result.first_air_date;
  // Creiamo il div che conterrà immagine e didascalia
  const album = document.createElement('div');
  album.classList.add('album');
  const overview=document.createElement('div');
  overview.classList.add('album');
  // Creiamo l'immagine
  const img = document.createElement('img');
  img.src = 'https://www.themoviedb.org/t/p/original'+selected_image;
  
  // Creiamo la didascalia
  const caption = document.createElement('h1');
  caption.textContent = title;
  const caption2 = document.createElement('span');
  caption2.textContent = riassunto;
  const voto=document.createElement('p');
  voto.textContent= votazione;
  const uscita=document.createElement('p');
  uscita.textContent=data;
  // Aggiungiamo immagine e didascalia al div
  album.appendChild(img);
  album.appendChild(caption);
  overview.appendChild(caption2);
  album.appendChild(voto);
  overview.appendChild(uscita);
  // Aggiungiamo il div alla libreria
  library.appendChild(album);
  library.appendChild(overview);
}

const numResults = 10;
function onJson(json) {
  console.log('JSON ricevuto');
  // Stampiamo il JSON per capire quali attributi ci servono
  console.log(json)
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const box=document.querySelector('#Box');
box.innerHTML='';
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;
  // Mostriamone al massimo 10
  if(num_results > 10)
    num_results = 10;
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    //creiamo il link
    const playlist= album_data.external_urls.spotify;
    const link=document.createElement('a');
    link.href= playlist;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    album.appendChild(link);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
}

function onJson_got(json) {
  console.log('JSON ricevuto');
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const box=document.querySelector('#Box');
box.innerHTML='';
 const results = json.length;
  console.log(json);
  // Processa ciascun risultato
     for(let i=0; i<results; i++)
  {
    // Leggi il documento
    // Leggiamo info
    const doc=json[i];
    const sentence = doc.sentence;
    const character = doc.character.name;
    const house= doc.character.house.name;
    // Costruiamo l'URL della copertina
    // Creiamo il div che conterrà didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = sentence;
    const caption2 = document.createElement('span');
    caption2.textContent = character;
    const caption3 = document.createElement('span');
    caption3.textContent = house;
    // Aggiungiamo didascalia al div
    album.appendChild(caption);
    album.appendChild(caption2);
    album.appendChild(caption3);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);

  }
const modals=document.querySelectorAll("#album-view .album");
for(let modal of modals){
  modal.addEventListener('click',apriModale);
}

}

function onJsonst(json) {
  console.log('JSON ricevuto');
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const box=document.querySelector('#Box');
box.innerHTML='';
 const results = json.length;
  console.log(json);
  // Processa ciascun risultato
     for(let i=0; i<results; i++)
  {
    // Leggi il documento
    // Leggiamo info
    const doc=json[i];
    const sentence = doc.quote;
    const character = doc.author;
    
    // Creiamo il div che conterrà didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = sentence;
    const caption2 = document.createElement('span');
    caption2.textContent = character;

    // Aggiungiamo immagine e didascalia al div
    album.appendChild(caption);
    album.appendChild(caption2);
   
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
  const modals=document.querySelectorAll("#album-view .album");
for(let modal of modals){
  modal.addEventListener('click',apriModale);
}
}

function onJsonbb(json) {
  console.log('JSON ricevuto');
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const box=document.querySelector('#Box');
box.innerHTML='';
 const results = json.length;
  console.log(json);
  // Processa ciascun risultato
     for(let i=0; i<results; i++)
  {
    // Leggi il documento
    // Leggiamo info
    const doc=json[i];
    const sentence = doc.quote;
    const character = doc.author;
    
    // Creiamo il div che conterrà didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = sentence;
    const caption2 = document.createElement('span');
    caption2.textContent = character;

    // Aggiungiamo immagine e didascalia al div
    album.appendChild(caption);
    album.appendChild(caption2);
   
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
  const modals=document.querySelectorAll("#album-view .album");
for(let modal of modals){
  modal.addEventListener('click',apriModale);
}
}
function onJsonluc(json) {
  console.log('JSON ricevuto');
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const box=document.querySelector('#Box');
box.innerHTML='';
 const results = json.length;
  console.log(json);
  // Processa ciascun risultato
     for(let i=0; i<results; i++)
  {
    // Leggi il documento
    // Leggiamo info
    const doc=json[i];
    const sentence = doc.quote;
    const character = doc.author;
    
    // Creiamo il div che conterrà didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = sentence;
    const caption2 = document.createElement('span');
    caption2.textContent = character;

    // Aggiungiamo immagine e didascalia al div
    album.appendChild(caption);
    album.appendChild(caption2);
   
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
  const modals=document.querySelectorAll("#album-view .album");
for(let modal of modals){
  modal.addEventListener('click',apriModale);
}
}


function onJsonanime(json){
 
    console.log('JSON ricevuto');
    // Svuotiamo la libreria
    const library = document.querySelector('#album-view');
    library.innerHTML = '';
    const box=document.querySelector('#Box');
box.innerHTML='';
   const results = json.length;
  
    console.log(json);
   /// Processa ciascun risultato
       for(let i=0; i<results; i++)
    {
      
      // Leggi il documento
      // Leggiamo info
      const doc=json[i];
      const sentence = doc.quote;
      const character = doc.character;
      const anime=doc.anime;
      
      // Costruiamo l'URL della copertina
      // Creiamo il div che conterrà didascalia
      const album = document.createElement('div');
      album.classList.add('album');
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = sentence;
      const caption2 = document.createElement('span');
      caption2.textContent = character;
      const caption3=document.createElement('span');
      caption3.textContent=anime;
  
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(caption);
      album.appendChild(caption2);
      album.appendChild(caption3);
      // Aggiungiamo il div alla libreria
      library.appendChild(album);
    }
    const modals=document.querySelectorAll("#album-view .album");
    for(let modal of modals){
      modal.addEventListener('click',apriModale);
    }


}


function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

  
  function search(event)
{
	// Impedisci il submit del form
	event.preventDefault();
  
	// Leggi valore del campo di testo
	const content = document.querySelector('#content').value;
  
	// verifico che sia stato effettivamente inserito del testo
	if(content) {
	    const text = encodeURIComponent(content);
		console.log('Eseguo ricerca elementi riguardanti: ' + text);
  
		// Leggi l'opzione scelta
		const tipo = document.querySelector('#tipo').value;
		console.log('Ricerco elementi di tipo: ' +tipo);

  if (tipo === "Cercaserie"){
console.log('Eseguo ricerca: ' +text);
// Prepara la richiesta
//https://api.themoviedb.org/3/search/movie?api_key=###&query=the+avengers
rest_url = 'https://api.themoviedb.org/3/search/tv?api_key=bfa5ce0c587efa637f91759cc70c1fbf&query=' +text +'&language=it-IT';
//rest_url = 'https://api.themoviedb.org/3/find/tt0944947?api_key=bfa5ce0c587efa637f91759cc70c1fbf&language=en-US&external_source=imdb_id';
console.log('URL: ' + rest_url);
// Esegui fetch
fetch(rest_url).then(onResponse).then(onJson_movie);
  }

		//in base al tipo selezionato, eseguo funzioni diverse
		if(tipo ==="quotesGameofThrones") {
      {
        const num=10;
     
        console.log('Eseguo ricerca: ' +text);
        // Prepara la richiesta
        rest_url = 'https://api.gameofthronesquotes.xyz/v1/author/' + text + '/' +num;
        console.log('URL: ' + rest_url);
        // Esegui fetch
        fetch(rest_url).then(onResponse).then(onJson_got);
      }
      
}
        if(tipo ==="albumserie"){
          console.log('Eseguo ricerca: ' + text);
          fetch("https://api.spotify.com/v1/search?type=album&q=" + text,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }).then(onResponse).then(onJson)
    }
    if(tipo === "st"){
      console.log('Eseguo ricerca: ' + text);
     
      // Prepara la richiesta
      rest_url = 'https://strangerthings-quotes.vercel.app/api/quotes/' +text;
      console.log('URL: ' + rest_url);
      // Esegui fetch
      fetch(rest_url).then(onResponse).then(onJsonst);
    }

    if(tipo=== "bb"){
      console.log('Eseguo ricerca: ' + text);
     
      // Prepara la richiesta
      rest_url = 'https://api.breakingbadquotes.xyz/v1/quotes/' +text;
      console.log('URL: ' + rest_url);
      // Esegui fetch
      fetch(rest_url).then(onResponse).then(onJsonbb);

    }
    if(tipo=== "luc"){
      console.log('Eseguo ricerca: ' + text);
     
      // Prepara la richiesta
      rest_url = 'https://lucifer-quotes.vercel.app/api/quotes/' +text;
      console.log('URL: ' + rest_url);
      // Esegui fetch
      fetch(rest_url).then(onResponse).then(onJsonluc);

    }
    if(tipo==="anime"){
      console.log('Eseguo ricerca: ' + text);
     
      rest_url = "https://animechan.vercel.app/api/quotes/character?name=" +text;
      console.log('URL: ' + rest_url);
    // Esegui fetch
    fetch(rest_url).then(onResponse).then(onJsonanime);
  }
    }
    }
	




function prevent(event) {
	event.preventDefault();
}

function onInsert(response) {
	console.log('risposta ricevuta');
	return response.text();
}



function onTokenJson(json)
{
  // Imposta il token global
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}

const client_id = '504c6a00bf1f49e387fd75aaf0802576';
const client_secret = 'ac3e4fb9d520408a9aa4402687d33475';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

// Aggiungo event listener al form1 per la RICERCA
const form = document.querySelector('#search_content');
form.addEventListener('submit', search)


function chiudiModale(event) {
	console.log(event);
	if(event.key === 'Escape')
	{
		//cancello il contenuto della modale
    modale.innerHTML = '';
		modale.classList.add('hidden');
		document.body.classList.remove('no-scroll');
	}
}



//al click di uno dei contenuti trovati
function apriModale(event) {
	//creo un nuovo elemento img
  const div = document.createElement('div');
  div.classList.add('album');
	const righe = event.currentTarget.querySelectorAll('#album-view .album span');
  for (let riga of righe){
    const span = document.createElement('span');
    span.textContent = riga.textContent;
    div.appendChild(span);
  }
	//appendo quest'immagine alla view modale
	modale.appendChild(div);
	//rendo la modale visibile
	modale.classList.remove('hidden');
	//blocco lo scroll della pagina
	document.body.classList.add('no-scroll');
  modale.style.top=window.pageYOffset + 'px';
}

//const modale = document.querySelector('#modale');
//creo il pulsante per la chiusura del post 
window.addEventListener('keydown', chiudiModale);