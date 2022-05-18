/*
films:
0 - NAME
1 - RATING
2 - DESCRIPTION
3 - LINK TO PAGE
4 - LINK TO IMAGE
*/

let films = [["Interstellar", 86, "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. <br><br> Starring <br><br>Matthew McConaughey <br> Anne Hathaway <br> Jessica Chastain<br>", "<a href='interstellar.html'>Read More</a>", "../pics/pics-films/interstellar-cover.jpg"], 
		  	 ["Doctor Strange", 90, "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.<br><br>Starring <br> <br>Benedict Cumberbatch <br> Chiwetel Ejiofor <br> Rachel McAdams<br>", "<a href='doctor_strange.html'>Read More</a></button>", "../pics/pics-films/doctor_strange.jpg"],
			 ["The Truman show", 82, "An insurance salesman discovers his whole life is actually a reality TV show.<br><br>Starring <br><br>Jim Carrey <br> Ed Harris <br> Laura Linney<br>", "<a href='the_truman_show.html'>Read More</a>", "../pics/pics-films/the_truman_show.jpg"],
			 ["Schindler's list", 92, "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis. <br><br>Starring <br><br>Liam Neeson <br> Ralph Fiennes <br> Ben Kingsley<br>", "<a href='schindlers_list.html'>Read More</a>", "../pics/pics-films/schindlers_list.jpeg"],];


const aToZ = document.getElementById('htl-name');
const zToA = document.getElementById('lth-name');
const highToLow = document.getElementById('htl-number');
const lowToHigh = document.getElementById('lth-number');
const cardList = document.getElementById('list');



function createList() {
	cardList.innerHTML = '';
for (let i =0; i<films.length; i++){
	

const card = document.createElement('div');
card.classList.add("card_1");

const cardImageFrame = document.createElement('div');
cardImageFrame.classList.add("card_image");

const cardImage = document.createElement('img');
cardImage.src = films[i][4];

cardImageFrame.appendChild(cardImage);

card.appendChild(cardImageFrame);

const cardTitle = document.createElement('div');
cardTitle.classList.add("card_title");
cardTitle.classList.add("title-white");

const pTitle = document.createElement('p');

cardTitle.appendChild(pTitle);
card.appendChild(cardTitle);

const filmDesc = document.createElement('span');
filmDesc.classList.add("film-description-small");
filmDesc.innerHTML = films[i][2];

const readMoreBtn = document.createElement('button');
readMoreBtn.classList.add("readmore");
readMoreBtn.innerHTML = films[i][3]

filmDesc.appendChild(readMoreBtn);

card.appendChild(filmDesc);
card.appendChild(filmDesc);

cardList.appendChild(card);
	
}
}

createList();
lowToHigh.addEventListener('click', () => {
	films = films.sort(function(a,b) {
    return b[1] - a[1];
});
createList()
});

highToLow.addEventListener('click', () => {
	films = films.sort(function(a,b) {
    return a[1] - b[1];
});
createList()
});

zToA.addEventListener('click', () => {
	films = films.sort();
	films.reverse();	
createList()
});


aToZ.addEventListener('click', () => {
	films = films.sort();
	createList()
});
