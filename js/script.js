const themes = {
  love: {
    front: "images/love-front.png",
    cards: [
      "images/love1.png",
      "images/love2.png",
      "images/love3.png",
      "images/love4.png",
      "images/love5.png"
    ]
  },
  friendship: {
    front: "images/f-front.png",
    cards: [
      "images/f1.png",
      "images/f2.png",
      "images/f3.png"
    ]
  },
  magic: {
    front: "images/magic-front.png",
    cards: [
      "images/magic1.png",
      "images/magic2.png"
    ]
  },
  growth: {
    front: "images/growth-front.png",
    cards: [
      "images/g1.png",
      "images/g2.png",
      "images/g3.png"
    ]
  }
};

function loadCards(themeName) {
  const theme = themes[themeName];
  const deckContainer = document.getElementById("deck-container");
  deckContainer.innerHTML = ""; // Clear previous cards

  theme.cards.forEach((backImg, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const front = document.createElement("img");
    front.src = theme.front;
    front.alt = "Front";
    front.className = "card-front";

    const back = document.createElement("img");
    back.src = backImg;
    back.alt = "Back";
    back.className = "card-back";

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    deckContainer.appendChild(card);

    card.addEventListener("click", () => {
      cardInner.classList.toggle("flipped");
    });
  });
}
