// Blog page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const postsGrid = document.querySelector('.posts-grid');
    
    // Sample additional blog posts data
    const additionalPosts = [
        {
            title: "ADD MORE POSTS",
            
        },
        {
            title: "ADD MORE POSTS",
            
        },
        {
            title: "ADD MORE POSTS",
           
        }
    ];

    let postsLoaded = 0;
    const postsPerLoad = 3;

    // Load more posts functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMorePosts();
        });
    }

    function loadMorePosts() {
        const startIndex = postsLoaded;
        const endIndex = Math.min(startIndex + postsPerLoad, additionalPosts.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const post = additionalPosts[i];
            const postElement = createPostElement(post);
            postsGrid.appendChild(postElement);
        }
        
        postsLoaded = endIndex;
        
        // Hide load more button if all posts are loaded
        if (postsLoaded >= additionalPosts.length) {
            loadMoreBtn.style.display = 'none';
        }
        
        // Animate new posts
        const newPosts = postsGrid.querySelectorAll('.blog-post-card:not(.visible)');
        newPosts.forEach((post, index) => {
            setTimeout(() => {
                post.classList.add('visible');
            }, index * 100);
        });
    }

    function createPostElement(post) {
        const article = document.createElement('article');
        article.className = 'blog-post-card fade-in';
        article.onclick = () => window.location.href = `blog-post-${post.slug}.html`;
        
        article.innerHTML = `
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-category">${post.category}</span>
                    <span class="post-date">${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <div class="post-footer">
                    <span class="post-read-time">${post.readTime}</span>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        return article;
    }

    // Blog post card hover effects
    document.querySelectorAll('.blog-post-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-4px)';
        });
    });

    // Featured post hover effect
    const featuredPost = document.querySelector('.featured-post');
    if (featuredPost) {
        featuredPost.addEventListener('mouseenter', () => {
            featuredPost.style.transform = 'translateY(-8px)';
        });
        
        featuredPost.addEventListener('mouseleave', () => {
            featuredPost.style.transform = 'translateY(-4px)';
        });
    }
});