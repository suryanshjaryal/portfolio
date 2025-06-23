// Work page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');

    // Filter functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });

    function filterProjects(filter) {
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                card.classList.add('fade-in');
                setTimeout(() => {
                    card.classList.add('visible');
                }, 100);
            } else {
                card.classList.remove('visible');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Project card hover effects
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-4px)';
        });
    });

    // Prevent event bubbling on project links
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});