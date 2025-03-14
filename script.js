const cloud = document.querySelector('.cloud');

cloud.addEventListener('click', () => {
    cloud.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cloud.style.transform = 'scale(1)';
    }, 300);
});