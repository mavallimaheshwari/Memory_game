const cards = document.querySelectorAll(".card"),
	timeTag = document.querySelector(".time b"),
	flipsTag = document.querySelector(".flips b"),
	scoresTag = document.querySelector(".score b"),
	refreshBtn = document.querySelector(".details button"),
	easyBtn = document.querySelector(".navi .easy"),
	interBtn = document.querySelector(".navi .inter"),
	hardBtn = document.querySelector(".navi .hard"),
	cardcreat = document.getElementsByClassName("cards");

let level = 1;
let maxcard = 6;
let maxTime = 02;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;
let score = 0;

function initTimer() {
	if (timeLeft <= 0) {
		cardcreat[0].innerHTML = "<h1>LOSE</h1>";

		return clearInterval(timer);
	}
	timeLeft--;
	timeTag.innerText = timeLeft;
}

function flipCard({ target: clickedCard }) {
	if (!isPlaying) {
		isPlaying = true;
		timer = setInterval(initTimer, 1000);
	}
	if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
		flips++;
		flipsTag.innerText = flips;
		clickedCard.classList.add("flip");
		if (!cardOne) {
			return cardOne = clickedCard;
		}
		cardTwo = clickedCard;
		disableDeck = true;
		let cardOneImg = cardOne.querySelector(".back-view img").src,
			cardTwoImg = cardTwo.querySelector(".back-view img").src;
		matchCards(cardOneImg, cardTwoImg);
	}
}

function matchCards(img1, img2) {
	if (img1 === img2) {
		matchedCard++;
		score += 4;
		if (matchedCard == maxcard && timeLeft > 0) {
			cardcreat[0].innerHTML = `<h1>Score:${score}</h1>`;
			return clearInterval(timer);
		}
		cardOne.removeEventListener("click", flipCard);
		cardTwo.removeEventListener("click", flipCard);
		cardOne = cardTwo = "";
		scoresTag.innerText = score;
		return disableDeck = false;
	}
	else {
		score -= 1;
		scoresTag.innerText = score;

	}

	setTimeout(() => {
		cardOne.classList.add("shake");
		cardTwo.classList.add("shake");
	}, 400);

	setTimeout(() => {
		cardOne.classList.remove("shake", "flip");
		cardTwo.classList.remove("shake", "flip");
		cardOne = cardTwo = "";
		disableDeck = false;
	}, 1200);
}

function shuffleCard() {
	score = 0;

	if (level === 1) {
		maxTime = 40;
		timeLeft = maxTime;
		flips = matchedCard = 0;
		cardOne = cardTwo = "";
		clearInterval(timer);
		timeTag.innerText = timeLeft;
		flipsTag.innerText = flips;
		disableDeck = isPlaying = false;


		cardcreat[0].innerHTML = "";

		for (let i = 0; i < 12; i++) {
			maxcard = 6;
			let cardele = document.createElement("li");
			cardele.setAttribute('class', 'card')

			let front = document.createElement("div");
			front.setAttribute('class', 'view front-view')

			let frontimg = document.createElement("img");
			frontimg.setAttribute('src', 'img/question-mark.jpg');
			frontimg.setAttribute('alt', 'icon');
			front.appendChild(frontimg);

			let back = document.createElement("div");
			back.setAttribute('class', 'view back-view')

			let backimg = document.createElement("img");
			backimg.setAttribute('src', 'img/img-1.jpg');
			backimg.setAttribute('alt', 'card-img');

			back.appendChild(backimg);

			cardele.appendChild(front);
			cardele.appendChild(back);
			cardcreat[0].appendChild(cardele);

		}

		let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
		arr.sort(() => Math.random() > 0.5 ? 1 : -1);

		const cards = document.querySelectorAll(".card");
		console.log(cards);

		cards.forEach((card, index) => {
			console.log(index);
			card.classList.remove("flip");
			let imgTag = card.querySelector(".back-view img");
			setTimeout(() => {
				imgTag.src = `img/img-${arr[index]}.jpg`;
			}, 500);
			card.addEventListener("click", flipCard);
		});
	}

	else if (level === 2) {
		maxTime = 60;
		maxcard = 10;
		timeLeft = maxTime;
		flips = matchedCard = 0;
		cardOne = cardTwo = "";
		clearInterval(timer);
		timeTag.innerText = timeLeft;
		flipsTag.innerText = flips;
		disableDeck = isPlaying = false;


		cardcreat[0].innerHTML = "";

		for (let i = 0; i < 20; i++) {
			let cardele = document.createElement("li");
			cardele.setAttribute('class', 'card')

			let front = document.createElement("div");
			front.setAttribute('class', 'view front-view')

			let frontimg = document.createElement("img");
			frontimg.setAttribute('src', 'img/question-mark.jpg');
			frontimg.setAttribute('alt', 'icon');
			front.appendChild(frontimg);

			let back = document.createElement("div");
			back.setAttribute('class', 'view back-view')

			let backimg = document.createElement("img");
			backimg.setAttribute('src', 'img/img-1.jpg');
			backimg.setAttribute('alt', 'card-img');

			back.appendChild(backimg);

			cardele.appendChild(front);
			cardele.appendChild(back);
			cardcreat[0].appendChild(cardele);

		}

		let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		arr.sort(() => Math.random() > 0.5 ? 1 : -1);

		const cards = document.querySelectorAll(".card");
		console.log(cards);

		cards.forEach((card, index) => {
			console.log(index);
			card.classList.remove("flip");
			let imgTag = card.querySelector(".back-view img");
			setTimeout(() => {
				imgTag.src = `img/img-${arr[index]}.jpg`;
			}, 500);
			card.addEventListener("click", flipCard);
		});
	}

	else if (level === 3) {
		maxcard = 14;
		maxTime = 70;
		timeLeft = maxTime;
		flips = matchedCard = 0;
		cardOne = cardTwo = "";
		clearInterval(timer);
		timeTag.innerText = timeLeft;
		flipsTag.innerText = flips;
		disableDeck = isPlaying = false;

		cardcreat[0].innerHTML = "";

		for (let i = 0; i < 28; i++) {
			let cardele = document.createElement("li");
			cardele.setAttribute('class', 'card')

			let front = document.createElement("div");
			front.setAttribute('class', 'view front-view')

			let frontimg = document.createElement("img");
			frontimg.setAttribute('src', 'img/question-mark.jpg');
			frontimg.setAttribute('alt', 'icon');
			front.appendChild(frontimg);

			let back = document.createElement("div");
			back.setAttribute('class', 'view back-view')

			let backimg = document.createElement("img");
			backimg.setAttribute('src', 'img/img-1.jpg');
			backimg.setAttribute('alt', 'card-img');

			back.appendChild(backimg);

			cardele.appendChild(front);
			cardele.appendChild(back);
			cardcreat[0].appendChild(cardele);

		}

		let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, , 11, 12, 13, 14];
		arr.sort(() => Math.random() > 0.5 ? 1 : -1);

		const cards = document.querySelectorAll(".card");
		console.log(cards);

		cards.forEach((card, index) => {
			console.log(index);
			card.classList.remove("flip");
			let imgTag = card.querySelector(".back-view img");
			setTimeout(() => {
				imgTag.src = `img/img-${arr[index]}.jpg`;
			}, 500);
			card.addEventListener("click", flipCard);
		});
	}

}

shuffleCard();

function easyClick() {
	easyBtn.classList.add("active");
	interBtn.classList.remove("active");
	hardBtn.classList.remove("active");
	level = 1;
	shuffleCard();
}
function interClick() {
	easyBtn.classList.remove("active");
	interBtn.classList.add("active");
	hardBtn.classList.remove("active");
	level = 2;
	shuffleCard();
}
function hardClick() {
	easyBtn.classList.remove("active");
	interBtn.classList.remove("active");
	hardBtn.classList.add("active");
	level = 3;
	shuffleCard();
}

refreshBtn.addEventListener("click", shuffleCard);
easyBtn.addEventListener("click", easyClick);
interBtn.addEventListener("click", interClick);
hardBtn.addEventListener("click", hardClick);

cards.forEach(card => {
	card.addEventListener("click", flipCard);
});
