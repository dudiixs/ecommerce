const cardsContainer = document.querySelector(".container");

function handleCardClick(e) {
    const target = e.target.closest(".card");
    if (!target) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        cardsContainer.querySelectorAll(".card").forEach((card) => {
            card.classList.remove("active");
        });
        target.classList.add("active");
    }
}

cardsContainer.addEventListener("click", handleCardClick);
