document.addEventListener('DOMContentLoaded', function() {
    const images = ["../GaryBluesPics/cheese-cake.jpg", "../GaryBluesPics/mexican-food-still-life.jpg", "../GaryBluesPics/side-view-beer-snacks-as-fried-dushbara-wooden.jpg", "../GaryBluesPics/PorkSlider2.png", "../GaryBluesPics/high-angle-delicious-pizza-with-vegetables.jpg", "../GaryBluesPics/meat-doner-bread-table.jpg", "../GaryBluesPics/fish-chips-chopping-board-with-lemon-sauce.jpg"];
    let positions = [0, 1, 2, 3, 4];
    function updateImageSrc() {
        positions.forEach((pos, index) => {
            const imageDiv = document.getElementById(`pos${index + 1}-div`);
            const img = imageDiv.querySelector('img');
            img.src = images[pos];
        });
    }
    function moveCarousel(direction) {
        if (direction === 'next') {
            positions = positions.map(pos => (pos + 1) % images.length);
        } else {
            positions = positions.map(pos => (pos - 1 + images.length) % images.length);
        }
        updateImageSrc();
    }
    document.getElementById('nextButton').addEventListener('click', function() {
        moveCarousel('next');
    });
    document.getElementById('prevButton').addEventListener('click', function() {
        moveCarousel('prev');
    });
    updateImageSrc();
});
