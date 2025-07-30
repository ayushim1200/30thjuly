const tarotDeck = {
  love: {
    front: "images/love-front.png",
    cards: ["images/love1.png", "images/love2.png", "images/love3.png", "images/love4.png", "images/love5.png"]
  },
  friendship: {
    front: "images/f-front.png",
    cards: ["images/f1.png", "images/f2.png", "images/f3.png"]
  },
  magic: {
    front: "images/magic-front.png",
    cards: ["images/magic1.png", "images/magic2.png"]
  },
  growth: {
    front: "images/growth-front.png",
    cards: ["images/g1.png", "images/g2.png", "images/g3.png"]
  }
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCard(frontSrc, backSrc) {
  const card = document.createElement("div");
  card.className = "card";

  const cardInner = document.createElement("div");
  cardInner.className = "card-inner";

  const cardFront = document.createElement("div");
  cardFront.className = "card-front";
  const frontImg = document.createElement("img");
  frontImg.src = frontSrc;
  cardFront.appendChild(frontImg);

  const cardBack = document.createElement("div");
  cardBack.className = "card-back";
  const backImg = document.createElement("img");
  backImg.src = backSrc;
  cardBack.appendChild(backImg);

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  return card;
}

window.onload = () => {
  const container = document.getElementById("deck-container");
  Object.keys(tarotDeck).forEach(theme => {
    const { front, cards } = tarotDeck[theme];
    const shuffled = shuffle([...cards]);
    const selected = shuffled.slice(0, 1)[0];
    const cardEl = createCard(front, selected);
    container.appendChild(cardEl);
  });
};
