document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const regularHeart = button.querySelector('#favorite-regular');
            const solidHeart = button.querySelector('#added-favorite');
            
            regularHeart.classList.toggle('active');
            solidHeart.classList.toggle('active');
        });
    });
});