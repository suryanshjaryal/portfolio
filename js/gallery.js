// Gallery page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    
    let currentImageIndex = 0;
    let visibleImages = [];

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery items
            filterGalleryItems(filter);
        });
    });

    function filterGalleryItems(filter) {
        visibleImages = [];
        
        galleryItems.forEach((item, index) => {
            const categories = item.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                item.style.display = 'block';
                item.classList.add('fade-in');
                visibleImages.push(index);
                setTimeout(() => {
                    item.classList.add('visible');
                }, 100);
            } else {
                item.classList.remove('visible');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initialize visible images array
    galleryItems.forEach((item, index) => {
        visibleImages.push(index);
    });

    // Gallery item hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(-4px)';
        });
    });

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more images
            loadMoreBtn.textContent = 'Loading...';
            setTimeout(() => {
                loadMoreBtn.textContent = 'Load More Images';
                // In a real application, you would load more images here
            }, 1000);
        });
    }
});

// Lightbox functionality
function openLightbox(button) {
    const galleryItem = button.closest('.gallery-item');
    const img = galleryItem.querySelector('img');
    const title = galleryItem.querySelector('.gallery-info h3').textContent;
    const description = galleryItem.querySelector('.gallery-info p').textContent;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    
    // Set current image index
    const galleryItems = document.querySelectorAll('.gallery-item');
    currentImageIndex = Array.from(galleryItems).indexOf(galleryItem);
    
    // Update lightbox content
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function previousImage() {
    const galleryItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])');
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage(galleryItems[currentImageIndex]);
    }
}

function nextImage() {
    const galleryItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])');
    if (currentImageIndex < gallery