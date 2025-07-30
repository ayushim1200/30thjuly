const themes = {
  love: ["images/love1.png", "images/love2.png", "images/love3.png", "images/love4.png", "images/love5.png"],
  friendship: ["images/f1.png", "images/f2.png", "images/f3.png", "images/f4.png", "images/f5.png"],
  magic: ["images/magic1.png", "images/magic2.png", "images/magic3.png", "images/magic4.png", "images/magic5.png"],
  growth: ["images/g1.png", "images/g2.png", "images/g3.png", "images/g4.png", "images/g5.png"]
};

function loadCards(theme) {
  const container = document.getElementById("deck-container");
  container.innerHTML = ""; // clear old cards

  themes[theme].forEach((imgSrc, index) => {
    const card = document.createElement("div");
    card.className = "tarot-card";

    const front = document.createElement("img");
    front.src = "images/card_back.png";
    front.className = "front";

    const back = document.createElement("img");
    back.src = imgSrc;
    back.className = "back";

    card.appendChild(front);
    card.appendChild(back);

    // Flip logic
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });
}
