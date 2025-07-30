const themes = {
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

function loadCards(theme) {
  const deckContainer = document.getElementById("deck-container");
  deckContainer.innerHTML = ""; // Clear previous

  const selectedTheme = themes[theme];
  if (!selectedTheme) return;

  selectedTheme.cards.forEach((cardImg, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const front = document.createElement("img");
    front.src = selectedTheme.front;
    front.classList.add("card-face", "front");

    const back = document.createElement("img");
    back.src = cardImg;
    back.classList.add("card-face", "back");

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    deckContainer.appendChild(card);
  });
}
