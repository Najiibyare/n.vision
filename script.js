document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-images');
    let currentIndex = 0;
    
    function showGallery() {
        const totalImages = gallery.children.length;
        currentIndex = (currentIndex + 1) % totalImages;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    setInterval(showGallery, 5000);
});