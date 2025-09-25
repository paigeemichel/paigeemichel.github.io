const filterButtons = document.querySelectorAll('.gallery-nav button');
const photoCards = document.querySelectorAll('.photo-card');

function filterPhotos(category) {
    photoCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter.toLowerCase();
        filterPhotos(category);
    });
});